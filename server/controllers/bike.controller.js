var Bike = require("../models/bike.model");
var mongoose = require("mongoose");
const User = require("../models/user.model");

exports.createBike = function (req, res) {
  const { body } = req;

  const data = new Bike({ ...body });

  data.save(function (err, data) {
    if (err) return res.status(400).send(err);

    res.send(data._id);
  });
};

exports.readBike = function (req, res) {
  Bike.findById(req.params.id, function (err, bike) {
    if (err) {
      res.status(404).send("Not found").end();
    }
    res.json(bike);
  });
};

exports.lastBikes = function (req, res) {
  Bike.find({ status: "created" })
    .sort({ creationDate: -1 })
    .limit(Number(req.params.quantity))
    .exec(function (err, lastBikes) {
      if (err) {
        res
          .status(404)
          .send("Not found" + err)
          .end();
      }
      res.json(lastBikes);
    });
};

exports.listAllBikes = function (req, res) {
  Bike.find({})
    .sort({ creationDate: -1 })
    .exec(function (err, allBikes) {
      if (err) {
        res
          .status(404)
          .send("Not found" + err)
          .end();
      }
      res.json(allBikes);
    });
};

exports.rentBike = function (req, res) {
  const bikeId = mongoose.Types.ObjectId(req.body.bikeId);
  const userId = mongoose.Types.ObjectId(req.body.userId);
  const username = req.body.username;

  User.findOneAndUpdate(
    { _id: userId, renting: false },
    { renting: true },
    { new: true },
    function (err, doc) {
      if (err || !doc) {
        return res.status(404).send("You can't rent more than one bike").end();
      } else {
        Bike.findOneAndUpdate(
          { _id: bikeId, rented: false },
          { rented: true, rentedBy: userId, username: username },
          {
            new: true,
          },
          function (err, bike) {
            if (err || !bike) {
              res
                .status(404)
                .send("Impossible to rent" + err)
                .end();
            } else {
              res.json(bike);
            }
          }
        );
      }
    }
  );
};

exports.returnBike = function (req, res) {
  const bikeId = req.body.bikeId;
  const userId = mongoose.Types.ObjectId(req.body.userId);

  Bike.findOneAndUpdate(
    { _id: bikeId, rented: true, rentedBy: userId },
    { rented: false, $unset: { rentedBy: 1 } },
    {
      new: true,
    },
    function (err, bike) {
      if (err || !bike) {
        res
          .status(404)
          .send("Impossible to return" + err)
          .end();
      } else {
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
            }
          }
        );

        res.status(200).send("Returned").end();
      }
    }
  );
};
