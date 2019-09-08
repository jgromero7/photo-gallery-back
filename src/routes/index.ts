import { Router } from 'express';

const router = Router();

// Controllers
import { getPhoto, createPhoto, getPhotoByID, deletePhoto, updatePhoto } from '../controllers/photo.controller'

import multer from '../libs/multer';

router.route('/photo')
        .get(getPhoto)
        .post(multer.single('image'), createPhoto);

router.route('/photo/:id')
        .get(getPhotoByID)
        .put(updatePhoto)
        .delete(deletePhoto);


export default router;