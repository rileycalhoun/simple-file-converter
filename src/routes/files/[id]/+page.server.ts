import { dbConnect, dbDisconnect } from "$lib/db";
import { redirect, type ServerLoad } from "@sveltejs/kit";
import { FileModel } from '../../../models/FileModel';

export var load: ServerLoad = async ({ params }) => {
    let { id } = params;
    
    await dbConnect();

    let file = await FileModel.findOne({ _id: id});
    if(!file) {
        throw redirect(303, '/');
    }

    await dbDisconnect();

    return {
        props: {
            file: {
                name: file.name,
                base64: file.base64
            }
        }
    }
}