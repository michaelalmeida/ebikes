const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");

const cookieParser = require("cookie-parser");
require("body-parser");
const session = require("express-session");
const morgan = require("morgan");

var cors = require("cors");

require("dotenv").config();

var db = mongoose.connection;

mongoose.connect(process.env.DB_CONN);

db.on("error", console.error.bind(console, "connection error:"));

require("./config/passport")(passport);

app.use(cors());
app.options("*", cors());

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(
  session({
    secret: "ebike",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require("./routes/user.routes")(app, passport);
require("./routes/bike.routes")(app, passport);

// app.listen(process.env.PORT, () => {
//   console.log("Server is up and running on port numner " + process.env.PORT);
// });

module.exports = app;
