var User = require("../models/user.model");
var mongoose = require("mongoose");

exports.getUserInfo = function (req, res) {
  User.findById(
    mongoose.Types.ObjectId(req.params.userId),
    "_id username country city renting email language rental renting date",
    function (err, user) {
      if (err) {
        res.status(404).send("Not found").end();
      }
      res.json(user);
    }
  );
};
