const express = require("express");
const Produet = require("../model/prodectShema");
const router = express.Router();

router.get("/", async (req, res) => {
  const { name, company, sort , select } = req.query;
  const userQueryOje = {};

  if (name) {
    userQueryOje.name = { $regex: name, $options: "i" };
  }

  if (company) {
    userQueryOje.company = company;
  }

  let sortApiData = Produet.find(userQueryOje);

  if (sort) {
    let fixSort = sort.replace(",", " ");
    sortApiData = sortApiData.sort(fixSort);
  }

  if(select){
    let selectfix = select.split(",").join(" ") ;
    sortApiData = sortApiData.select(selectfix)
  }

  const productsData = await sortApiData;
  res.status(200).json(productsData);
});

module.exports = router;
