import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private';

var isConnected: boolean = false;

export const dbConnect = async () => {
  if (isConnected) {
    console.log('Connection was already established');
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
      console.log('Connection was already established');
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(MONGO_URI ?? '');
  isConnected = true;

  console.log('Connected to mongo', MONGO_URI ?? '');
};

export const dbDisconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;
  if (!isConnected) return;

  await mongoose.disconnect();
  isConnected = false;

  console.log('Disconnected from mongo');
};