var Bike = require("../models/bike.model");
var mongoose = require("mongoose");

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
  const bike = mongoose.Types.ObjectId(req.body.bike);
  const userId = mongoose.Types.ObjectId(req.body.userId);
  const username = mongoose.Types.ObjectId(req.body.username);

  Bike.findOne(
    {
      rented: true,
    },
    function (err, bikeIsRented) {
      if (bikeIsRented) {
        res
          .status(400)
          .send("You can't rent this bike because its already rented" + err)
          .end();
      }
    }
  );

  Bike.findByIdAndUpdate(
    bike,
    { rented: true, rentedBy: userId, username: username },
    {
      new: true,
    },
    function (err, bike) {
      if (err || bike === null) {
        res
          .status(404)
          .send("Impossivel to add" + err)
          .end();
      } else {
        res.status(200).send("Bike rented!!").end();
      }
    }
  );
};

exports.returnBike = function (req, res) {
  const bike = mongoose.Types.ObjectId(req.body.bike);
  const userId = mongoose.Types.ObjectId(req.body.userId);

  Bike.findOne(
    {
      rentedBy: { username: userId },
    },
    function (err, bikeIsRentedByTheSameUser) {
      if (!bikeIsRentedByTheSameUser) {
        res
          .status(400)
          .send("You can't return a bike that wasn't rented by you" + err)
          .end();
      }
    }
  );

  Bike.findByIdAndUpdate(
    bike,
    { rented: false },
    { $unset: { rentedBy: 1, username: 1 } },
    {
      new: true,
    },
    function (err, bike) {
      if (err || bike === null) {
        res
          .status(404)
          .send("Impossivel to add" + err)
          .end();
      } else {
        res.status(200).send("Bike accepted!!").end();
      }
    }
  );
};
