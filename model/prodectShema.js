const mongoose = require("mongoose");

const prodectShemas = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  detailUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  title: {
    type: Object,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  rated: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Produet' , prodectShemas)
