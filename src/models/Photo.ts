import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

interface PhotoI extends Document {
    title: string;
    description: string;
    imagePath: string;
}

export default model<PhotoI>('Photo', schema);