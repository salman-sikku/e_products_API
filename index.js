const express = require("express");
const PORT = 3030;
const cors = require("cors");
const connectedDB = require('./db/dbconnet')
const app = express();

connectedDB();
app.use(cors());


app.use(require("./routes/prodects"));

app.get("/", (req, res) => {
  res.status(200).send({
    msg: "Hi , I am on Live",
  });
});

app.listen(PORT, console.log(`I am connnet on ${PORT}`));
