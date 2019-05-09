const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bcrypt = require("bcrypt");
const passport = require ("passport");
const LocalStrategy = require("passport-local").Strategy;

const mongoose = require("mongoose");

// import models
var db = require("./models");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(require("cookie-parser")());
app.use(require("express-session")({ secret: "secret", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/flappybirds_db";
mongoose.connect( (MONGODB_URI), { useNewUrlParser: true } );

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport setup
let userList = [];
passport.use(new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
  function(email, password, done) {
    //try to find user
    db.UserAuth.findOne({
        email: email
        // password: password // This actually gets done by bCrypt
    })
    .then(user => {
      if(!user){
        // if we can't find the user... return error
        return done("No user found", null, { message: "No user found" });
      }
      else{
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
        //more magic after finding the user
        // return done(null, user);
      }
    })
    .catch( err => {
      console.log(err);
      return done(err, null);
    });
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.UserAuth.findOne({ _id: id })
  .then(function (user) {
    done(null, user);
  })
  .catch(error => {
    console.log(error);
    done(error, false);
  });
});

require("./routes/api-routes")(app, passport);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  if (process.env.NODE_ENV === "production") {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }
  else {
    res.json({"message": "Go to http://localhost:3000"});
  }
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
