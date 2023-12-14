import CloudConvert from 'cloudconvert';

const Base64Encode = (await import("base64-stream")).Base64Encode;
const request = (await import("request")).default;

import { fail, type Actions, redirect, json } from "@sveltejs/kit";
import { CLOUD_CONVERT_API_KEY } from '$env/static/private';
import { dbConnect, dbDisconnect } from '$lib/db';
import { FileModel } from '../models/FileModel';

import { base } from '$app/paths';

const cloudConvert = new CloudConvert(CLOUD_CONVERT_API_KEY);

export const actions = {
    default: async ({ request: req }) => {
        const formData = Object.fromEntries(await req.formData());

        if(
            !(formData.uploadedFile as File).name ||
            (formData.uploadedFile as File).name === 'undefined'
        ) {
            return fail(400, {
                error: true,
                message: 'You dumb bitch, add a fucking file!'
            });
        }

        const { uploadedFile, format } = formData as { uploadedFile: File, format: string };

        if(!format) {
            return fail(500, {
                error: true,
                message: "You dumb bitch, select a fucking format!"
            });
        }

        // Convert to PDF
        let fileContent = Buffer.from(await uploadedFile.arrayBuffer());
        let job = await cloudConvert.jobs.create({
            tasks: {
                'import-my-file': {
                    operation: 'import/base64',
                    file: fileContent.toString('base64'),
                    filename: uploadedFile.name
                },
                'convert-my-file': {
                    operation: 'convert',
                    input: 'import-my-file',
                    output_format: format
                },
                'export-my-file': {
                    operation: 'export/url',
                    input: 'convert-my-file'
                }
            }
        })

        job = await cloudConvert.jobs.wait(job.id);
        const file = cloudConvert.jobs.getExportUrls(job)[0];

        let url = file.url;
        if(!url) {
            return fail(500, {
                error: true,
                message: 'Something went wrong while converting your file!'
            });
        }

        // Convert the file to base64
        
        let id: string | undefined = undefined;
        var chunks: [String] = [""];
        let downloadJob = request(url).pipe(new Base64Encode())
            .on('data', (chunk) => chunks.push(chunk))
            .on('error', () => {
                return fail(500, {
                    error: true,
                    message: 'Something went wrong while converting your file!'
                });
            })
            .on('finish', async () => {          
                let newFileName = uploadedFile.name.split('.').slice(0, -1).join('.') + '.pdf';
                
                const newFile = {
                    name: newFileName,
                    base64: chunks.join('')
                }
                
                await dbConnect();
                
                const fileModel = await FileModel.create(newFile);
                await fileModel.save();

                await dbDisconnect();
                id = fileModel._id;
            });

            // Wait until the job is done
            while(!downloadJob.closed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            if(id == undefined) {
                return fail(500, {
                    error: true,
                    message: 'Something went wrong while converting your file!'
                });
            }

            throw redirect(303, base + '/files/' + id);
        }
} satisfies Actions;