var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  language: String,
  country: String,
  city: String,
  email: String,
  rental: { type: Number, default: process.env.INITIAL_BIKE_RENTED },
  rented: [{ _id: mongoose.ObjectId }],
  date: { type: Date, default: Date.now },
  renting: { type: Boolean, default: process.env.INITIAL_USER_RENTING_STATUS },
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model("User", userSchema);

module.exports = User;
