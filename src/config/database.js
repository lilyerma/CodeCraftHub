const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const dbUser = 'root';
      const dbPass = 'NjM3OC1saWx5ZXJt';
      const dbHost = '127.0.0.1';
      const dbPort = '27017';
      const dbName = 'local'; // Or replace with your target database other than 'local', if needed
      const authSource = 'admin'; // Authentication database
  
      const conn = await mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=${authSource}`);
      console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      process.exit(1);
    }
};

module.exports = connectDB;