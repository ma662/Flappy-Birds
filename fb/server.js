// dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require ("passport");

// authentication
const bcrypt = require("bcrypt");

// PORT
const PORT = process.env.PORT || 3001;

// import models
var db = require("./models");

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
// app.use(passport.initialize());

app.use(passport.initialize());
app.use(passport.session());
// Passport config
require("./config/passport")(passport);

// Routes
// app.use("/api/users", users);
// app.use("./routes/api/users");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/flappybirds_db";
mongoose.connect( (MONGODB_URI), { useNewUrlParser: true } );

app.post("/_api/user", function(req, res) {
  console.log("Non-cache route firing: ");
  console.log("HERES THE INCOMING DATA FROM FORM:", req);
  
  db.UserAuth.findOne({}, function(err, user) {
    if (err) throw err;
    console.log(user);
    res.json(user);
  });
});

app.get("/api/display-users", function(req, res) {

  // db.UserAuth.create({
  //   email:"m@y",
  //   username: "LALALA",
  //   pass: "myles"
  // }).then(function(thinggy) {
  //   // View the added result in the console
  //   console.log("========", "added USER:" + thinggy, "========",);
  //   res.json(thinggy);
  // })
  // .catch(function(err) {
  //   // If an error occurred, log it
  //   console.log(err);
  //   res.json(err);
  // });

  db.UserAuth.find({}, function(err, ret) {
    if (err) throw err;
    
    console.log(ret);
    res.json(ret);
  });
});

app.post("/_api/user/signup", function(req, res) {
  // check if passwords match
  // check if user exists
  // add user to db 

});

app.post("/_api/user/login", function(req, res) {
  console.log("HITTING THIS ROUTE:", req.body);

  res.json(req.body);
});

app.post("/api/login", function(req, res) {
  // do login stuff==========================================================
});



// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
