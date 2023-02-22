const express = require("express");
const PORT = 3030;
const cors = require("cors");
const connectedDB = require('./db/dbconnet')
const app = express();
connectedDB();
app.use(cors());

const router_api = require('./routes/prodects')
app.use('/api/products' , router_api);

app.get("/", (req, res) => {
  res.status(200).send(
    '<h2> Hi , I am live</h2>'
  );
});

app.listen(PORT, console.log(`I am connnet on ${PORT}`));
