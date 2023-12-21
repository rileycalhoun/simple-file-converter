import { dbConnect, dbDisconnect } from "$lib/db";
import { redirect, type ServerLoad } from "@sveltejs/kit";
import { FileModel } from '../../../models/FileModel';
import { base } from '$app/paths';

export var load: ServerLoad = async ({ params }) => {
    let { id } = params;
    
    await dbConnect();

    let file = await FileModel.findOne({ _id: id});
    if(!file) {
        console.error("no file was provided");
        throw redirect(303, base + '/');
    }

    await dbDisconnect();

    console.log("loaded file, " + file.name);
    return {
        props: {
            file: {
                name: file.name,
                base64: file.base64
            }
        }
    }
}