import mongoose from "mongoose";

let isConnected = false // track the connection

export const connectToDb = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDb is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: 'share_prompt',
    })

    isConnected = true;
    console.log('MongoDB connected')
  } catch (err) {
    console.log(err);
  }
}