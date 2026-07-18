const mongoose = require('mongoose');
require('dotenv').config();

const testConnection = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('SUCCESS: Connected to MongoDB Atlas!');
    process.exit(0);
  } catch (error) {
    console.error('FAILED TO CONNECT:');
    console.error(error);
    process.exit(1);
  }
};

testConnection();
