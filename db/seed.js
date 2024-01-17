const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
const adminPassword = process.env.ADMIN_PASSWORD;
const adminEmail = process.env.ADMIN_EMAIL;

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
    console.log('seeding techs...');
    await dbConnect();
    await Tech.deleteMany({});
    await Tech.insertMany(techs);

    // User: the only one
    //console.log('seeding user...');
    //const hashedPassword = await bcrypt.hash(adminPassword, 31);
    //await User.create({
    //  name: 'Simón Muñoz Saavedra',
    //  email: adminEmail,
    //  password: hashedPassword,
    //});

    console.log('seeded');
  } catch (error) {
    console.log(error);
  }
};

seedDb().then(() => mongoose.connection.close());
