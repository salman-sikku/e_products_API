require("dotenv").config();
const connectedDB = require("./db/dbconnet");
const Produet = require("./model/prodectShema");

const produetSendJson = require("./prodects.json");

const produetSendFun = async () => {
  try {
    await connectedDB(process.env.MONGO_URL);
    await Produet.create(produetSendJson);
    console.log("i am send to db");
  } catch (error) {
    console.log(error);
  }
};

// console.log(produetSendFun())

