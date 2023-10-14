import mongoose from 'mongoose';

export async function connectToDatabase() {
    try{
        const url = process.env.MONGO_URI;
        mongoose.connect(url);
        console.log('Connected to MongoDB Database');
    } catch(error){
        console.log('Error while connecting to MongoDB Database', error);
    }
}