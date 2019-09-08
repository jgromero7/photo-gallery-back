import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

import indexRoutes from './routes/index'

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// WhiteList Optional
var whitelist = ['http://localhost:8080', 'http://example2.com']
var corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback('Not allowed by CORS');
    }
  }
}

// This is CORS enable for all Origin! 
app.use(cors()); // Add corsOptions a cors() for access to specific a or more domain

// Routes
app.use('/api/v1', indexRoutes);

// This folder for this applications wil be used to store public file
app.use('/media/uploads', express.static(path.resolve('media/uploads')));

export default app;