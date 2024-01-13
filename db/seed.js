const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const techSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Tech = mongoose.model('Tech', techSchema);

const dbConnect = async () => {
  mongoose.connection.on('connected', () => console.log('connected'));
  mongoose.connection.on('open', () => console.log('open'));
  mongoose.connection.on('disconnected', () => console.log('disconnected'));
  mongoose.connection.on('reconnected', () => console.log('reconnected'));
  mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
  mongoose.connection.on('close', () => console.log('close'));

  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error('Error connecting to db.');
  }
};

const techs = [
  {
    name: 'React',
  },
  {
    name: 'Node',
  },
  {
    name: 'MongoDB',
  },
  {
    name: 'Express',
  },
  {
    name: 'NextJS',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
];

const seedDb = async () => {
  try {
    await dbConnect();
    await Tech.deleteMany({});
    await Tech.insertMany(techs);
    console.log('seeded');
  } catch (error) {
    console.log(error);
  }
};

seedDb().then(() => mongoose.connection.close());
