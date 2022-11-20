var LocalStrategy = require("passport-local").Strategy;

var User = require("../models/user.model");

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      function (req, username, password, done) {
        process.nextTick(function () {
          User.findOne({ username: username }, function (err, user) {
            if (err) return done(err);
            if (!user)
              return done(
                null,
                false,
                req.flash("loginMessage", "No user found.")
              );

            if (!user.validPassword(password))
              return done(
                null,
                false,
                req.flash("loginMessage", "Oops! Wrong password.")
              );
            else return done(null, user);
          });
        });
      }
    )
  );

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      function (req, username, password, done) {
        const { name, email, language, country } = req.body;
        process.nextTick(function () {
          User.findOne({ username: username }, function (err, existingUser) {
            if (err) return done(err);
            if (existingUser)
              return done(
                null,
                false,
                req.flash("signupMessage", "That username is already taken.")
              );
            if (req.user) {
              var user = req.user;
              user.username = username;
              user.password = user.generateHash(password);
              user.save(function (err) {
                if (err) throw err;
                return done(null, user);
              });
            } else {
              var newUser = new User();

              newUser.username = username;
              newUser.password = newUser.generateHash(password);
              newUser.name = name;
              newUser.email = email;
              newUser.language = language;
              newUser.country = country;
              newUser.city = city;

              newUser.save(function (err) {
                if (err) throw err;

                return done(null, newUser);
              });
            }
          });
        });
      }
    )
  );
};
