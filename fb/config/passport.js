const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const db = require("../models");

module.exports = function(passport) {
  passport.use(
    new localStrategy({ usernameField: "email" }, (email, password, done) => {
      //match user
      db.UserAuth.findOne({
        email: email
      }).then(user => {
        console.log("LOGGING FROM PASSPORT:", user);
        console.log(user);
        if (!user) {
          return done(null, false, { message: "No User Found!" });
        }
        // match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            throw err;
          }
          if (isMatch) {
            // console.log(user);
            return done(null, user);
          } else {
            return done(null, false, { message: "Password Incorrect" });
          }
        });
      });
    })
  );
  //serialize passport cookie
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // when we retrieve the data from a user session
  passport.deserializeUser(function(id, done) {
    db.User.findOne({ id: id })
      .then(function(user) {
        done(null, user);
      })
      .catch(error => {
        console.log(error);
        done(error, false);
      });
  });
};