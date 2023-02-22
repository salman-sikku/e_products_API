require('dotenv').config();
const mongoose = require('mongoose');
const DB = process.env.MONGO_URL ;


const connectedDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(DB);
    console.log(`mongoDB connection : ${conn.connection.host}`);
  } catch (err) {
    console.log(`No connection : ${err}`);
  }
};



module.exports = connectedDB;