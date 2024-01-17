const bcrypt = require('bcrypt');
require('dotenv').config({ path: '.env.local' });

const hashing = async () => {
  const adminPassword = process.env.ADMIN_PASSWORD;
  console.log('🚀 ~ hashing ~ adminPassword:', adminPassword);

  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  console.log('🚀 ~ seedDb ~ hashedPassword:', hashedPassword);
};

hashing();
