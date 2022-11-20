var User = require("../models/user.model");
var mongoose = require("mongoose");

exports.home = function (req, res) {
  res.send("Hello World!");
};

exports.getUserBasicInfo = function (req, res) {
  User.find(
    {
      _id: mongoose.Types.ObjectId(req.body.id),
    },
    "country city renting email language"
  )
    .sort({ creationDate: -1 })
    .exec(function (err, data) {
      if (err) {
        res
          .status(404)
          .send("Not found" + err)
          .end();
      }
      res.json(data);
    });
};

exports.rentBike = function (req, res) {
  const bikeId = mongoose.Types.ObjectId(req.body.bike);
  const userId = mongoose.Types.ObjectId(req.body.userId);

  User.findByIdAndUpdate(
    userId,
    {
      renting: true,
    },
    { $inc: { rental: 1 } },
    { $push: { rented: bikeId } },
    {
      new: true,
    },
    function (err, bike) {
      if (err || bike === null) {
        res
          .status(404)
          .send("Impossible to register the rental" + err)
          .end();
      } else {
        res.status(200).send("Bike registered!!").end();
      }
    }
  );

  exports.finishRental = function (req, res) {
    const userId = mongoose.Types.ObjectId(req.body.userId);

    User.findByIdAndUpdate(
      userId,
      {
        renting: false,
      },
      {
        new: true,
      },
      function (err, bike) {
        if (err || bike === null) {
          res
            .status(404)
            .send("Impossible to register the return" + err)
            .end();
        } else {
          res.status(200).send("Bike return registered!!").end();
        }
      }
    );
  };
};
