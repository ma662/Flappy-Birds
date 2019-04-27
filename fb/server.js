const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// authentication
const bcrypt = require("bcrypt");
const passport = require("passport");

const PORT = process.env.PORT || 3001;

// import models
var db = require("./models");

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.json());


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/flappybirds_db";
mongoose.connect( (MONGODB_URI), {useNewUrlParser: true} );

app.get("/api/display-users", function(req, res) {
  // db.Article.create(result)

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

app.post("/api/signup", function(req, res) {
  // do signup stuff

  // send to db
  db.UserAuth.create({
    email: "email@email",
    username: "testuser",
    pass: "pass"
  }).then(function(ret){
    console.log("ret is:", ret);
    res.json(ret);
  });
});

app.post("/api/login", function(req, res) {
  // do login stuff
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
