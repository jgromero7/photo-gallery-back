import { Request, Response }  from 'express';
import path from 'path';
import fs from 'fs-extra';

import Photo from '../models/Photo';

export async function getPhoto(req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find();

    return res.status(200).json({'message': 'All photo successfully', 'data': photos});
}

export async function getPhotoByID(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const photo = await Photo.findById(id);

    return res.status(200).json({'message': 'Photo successfully', 'data': photo});
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;
    const { path } = req.file;
    const newPhoto = {
        title, description,
        imagePath: path
    };
    const photo = new Photo(newPhoto);
    await photo.save();
    return res.status(200).json({ 'message': 'Photo successfully saved', 'data': photo });
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const photo = await Photo.findByIdAndDelete(id);
    if (photo) {
        await fs.unlink(path.resolve(photo.imagePath));
    }
    return res.status(200).json({ 'message': 'Photo Deleted successfully', 'data': photo });
}

export async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;
    const { id } = req.params;
    const photo = await Photo.findByIdAndUpdate(id, { title, description }, { new: true });
    return res.status(200).json({ 'message': 'Photo successfully updated', 'data': photo });
}