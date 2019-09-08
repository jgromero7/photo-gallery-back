import { connect } from 'mongoose';

export async function startConnection() {
    await connect('mongodb://172.17.0.2/photo-gallery-db', {
        useNewUrlParser: true,
        useFindAndModify: false,
    });
    console.log('Database is connect');
}