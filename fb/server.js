// dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require ("passport");

// authentication
const bcrypt = require("bcrypt");


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

// app.use(
//   session({
//     secret: "secret",

//     resave: true,

//     saveUninitialized: true
//   })
// );

app.use(bodyParser.json());

// Passport middleware
// app.use(passport.initialize());

app.use(passport.initialize());
app.use(passport.session());

// Passport config
require("./config/passport")(passport);

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

  db.UserAuth.find({}, function(err, ret) {
    if (err) throw err;
    
    console.log(ret);
    res.json(ret);
  });
})

app.post("/_api/user/signup", function(req, res) {
  let errors = [];

  console.log("HERES TEH REQUEST BODY:", req.body);
  
  if (req.body.password !== req.body.password2) {
    // errors.push({ errorMessage: "Password do not match!" });
    errors.push(".");
    return res.json({ errorMessage: "Passwords do not match" });
  }
  if (req.body.password.length < 4) {
    errors.push(".");
    return res.json({ errorMessage: "Password must be atleast 4 characters" });
  }
  if (errors.length > 0) {
    console.log("Errors length is:", errors.length);
    return res.json({ errorMessage: "Issue processing signup" });
  }
  else {
    db.UserAuth.findOne({ username: req.body.username }).then(user => {
      if (user) {
        console.log("THIS USERNAME WAS FOUND IN DB ALREADY");

        return res.json({ errorMessage: "Username already taken, please try again!" });
      }
    });

    db.UserAuth.findOne({ email: req.body.email }).then(email => {
      if (email) {
        console.log("THIS EMAIL WAS FOUND IN DB ALREADY");
        // errors.push({ errorMessage: "Email already Registered! Please Login." });
        return res.json({ errorMessage: "Email already Registered! Please Login." });
      }
      else {
        const newUser = {
          username: req.body.username,
          email: req.body.email,
          pass: req.body.password
        };

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.pass, salt, (err, hash) => {
            if (err) {
              throw err;
            }
            newUser.pass = hash;
            db.UserAuth.create(newUser);
            return res.json({ errorMessage: "Signup successful. Please Login to continue."});
          });
        });

        console.log("New User Added:", newUser);
      }
    });
  }
});

// app.post("/_api/user/signup", function(req, res) {
//   console.log("WE GOT THE DATA HERE: ", req.body);
//   // check if passwords match
//   if (req.body.password !== req.body.password2) {
//     console.log("Password mismatch");
//     res.json({ errorMessage: "Password mismatch" });
//   }
//   // check if user exists
//   db.UserAuth.findOne({email: req.body.email}, (thing) => {
//     console.log("Attempt find 1"); 
//     console.log(thing);
//   });


//   if () {
//     console.log("HELLHELLOOGOOGOGOGOGOG");
//   }
//   else {
//     console.log("NAAAAA");
//   }
//   // console.log( db.UserAuth.findOne({email: req.body.email}) );
//   // add user to db 

// });

app.post("/_api/user/login", function(req, res) {
  console.log("HITTING THIS ROUTE:", req.body);

  res.json(req.body);
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
