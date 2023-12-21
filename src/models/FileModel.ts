import mongoose from 'mongoose';
import type { FileModelType } from '../types/types.js';

const FileSchema = new mongoose.Schema<FileModelType>({
    name: { type: String, required: true },
    base64: { type: String, required: true }
},
{
    timestamps: true
});

export const FileModel = mongoose.models.File ?? mongoose.model<FileModelType>('File', FileSchema);