import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private';

var isConnected: number = 0;

export const dbConnect = async () => {
  console.log('MONGO_URL', MONGO_URI);
  if (isConnected === 1) {
    console.log('ya estabamos conectados');
    return;
  }

  if (mongoose.connections.length > 0) {
    isConnected = mongoose.connections[0].readyState;
    if (isConnected === 1) {
      console.log('usando conexion existente');
      return;
    }

    await mongoose.disconnect();
  }
  await mongoose.connect(MONGO_URI ?? '');
  isConnected = 1;
  console.log('conectado a mongodb', MONGO_URI ?? '');
};

export const dbDisconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;
  if (isConnected === 0) return;

  await mongoose.disconnect();
  isConnected = 0;
  console.log('desconectado de mongodb');
};