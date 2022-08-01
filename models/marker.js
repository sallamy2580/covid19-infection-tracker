const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const markerSchema = new Schema({
  id: {
    type: Number
  },
  country: {
    type: String
  },
  coordinates: {
    type: [Number]
  },
  color: {
    type: String
  },
  value: {
    type: Number
  }
});

const Marker = mongoose.model("Marker", markerSchema);

module.exports = Marker;
