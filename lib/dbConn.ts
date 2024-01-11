import mongoose, { ConnectionStates } from 'mongoose';

interface Connection {
  isConnected: ConnectionStates | null;
}

const connection: Connection = {
  isConnected: null,
};

async function dbConnect() {
  mongoose.connection.on('connected', () => console.log('connected'));
  mongoose.connection.on('open', () => console.log('open'));
  mongoose.connection.on('disconnected', () => console.log('disconnected'));
  mongoose.connection.on('reconnected', () => console.log('reconnected'));
  mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
  mongoose.connection.on('close', () => console.log('close'));

  try {
    if (connection.isConnected) {
      console.log('already connected');

      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = db.connection.readyState;
  } catch (error) {
    throw new Error('Error connecting to db.');
  }
}

export default dbConnect;
