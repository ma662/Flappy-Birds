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
  {usernameField: "email", passwordField: "pass"},
  function(email, pass, done) {
    db.UserAuth.findOne({
      email: email,
      pass: pass
    })
    .then(function(user){
      if (!user) {
        console.log(err);
        return done(err, null);
      }
      else{
        return done(null, user);
      }
    })
    .catch( err => {
      console.log(err);
      return(err, null);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.UserAuth.findOne({ id: id })
  .then(function (user) {
    done(null, user);
  })
  .catch(error => {
    console.log(error);
    done(error, false);
  });
});

require("./routes/api-routes.js")(app, passport);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
