var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bikeSchema = new mongoose.Schema({
  name: String,
  rented: { type: Boolean, default: process.env.INITIAL_BIKE_RENTED_STATUS },
  location: {
    latitude: String,
    longitude: String,
  },
  description: {
    type: Schema.Types.Mixed,
    year: Number,
    color: String,
  },
  rentedBy: {
    _id: mongoose.ObjectId,
    username: String,
  },
});

var Bike = mongoose.model("Bike", bikeSchema);

module.exports = Bike;
