import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private';

var isConnected: boolean = false;

export const dbConnect = async () => {
  if (isConnected) {
    return;
  }

  if (mongoose.connections.length > 0) {
    switch (mongoose.connections[0].readyState) {
      case 1:
        isConnected = true;
        break;
      default:
        isConnected = false;
        break;
    }

    if (isConnected) {
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(MONGO_URI ?? '');
  isConnected = true;

  console.log('Connected to Mongo Database at ', MONGO_URI ?? '');
};

export const dbDisconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;
  if (!isConnected) return;

  await mongoose.disconnect();
  isConnected = false;

  console.log('Disconnected from Mongo!');
};