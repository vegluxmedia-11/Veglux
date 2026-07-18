const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User'); // Assume User model exists

const testInsert = async () => {
  try {
    console.log('Connecting...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected. Attempting to insert a dummy user...');
    
    // Try to create a dummy user
    const dummy = await User.create({
      name: 'Test P',
      email: 'testp@example.com',
      password: 'password123'
    });
    
    console.log('INSERT SUCCESS:', dummy.email);
    
    // Clean up
    await User.deleteOne({ email: 'testp@example.com' });
    process.exit(0);
  } catch (error) {
    console.error('INSERT FAILED:', error.message);
    process.exit(1);
  }
};

testInsert();
