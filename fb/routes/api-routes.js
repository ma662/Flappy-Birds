const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function (app, passport) {
  
  // testing route, display users
  app.get("/_api/display", function(req, res) {
    db.UserAuth.find({}, function(err, ret) {
      if (err) throw err;
      
      console.log(ret);
      res.json(ret);
    });
  });

  // signup route
  app.post("/_api/user", function(req, res) {
    let errors = [];
    console.log("SIGNUP REQ:", req.body);
    
    // if (req.body.password !== req.body.password2) {
    //   // errors.push({ message: "Password do not match!" });
    //   errors.push(".");
    //   return res.json({ message: "Passwords do not match" });
    // }
    if (req.body.password.length < 4) {
      errors.push(".");
      return res.json({ message: "Password must be atleast 4 characters" });
    }
    if (errors.length > 0) {
      console.log("Errors length is:", errors.length);
      return res.json({ message: "Issue processing signup" });
    }
    else {
      let message = null;
  
      // db.UserAuth.findOne({ username: req.body.username }).then(user => {
      //   if (user) {
      //     console.log("THIS USERNAME WAS FOUND IN DB ALREADY");
      //     message = "Username already taken, please try again!";
      //     return res.json({ message: message });
      //   }
      // });
  
      db.UserAuth.findOne({ email: req.body.email }).then(email => {
  
        if (email) {
          console.log("THIS EMAIL WAS FOUND IN DB ALREADY");
          message = "Email already Registered! Please Login.";
          return res.json({ message: message });
        }
        else {
          const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          };
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                throw err;
              }
              newUser.password = hash;
              db.UserAuth.create(newUser);
              return res.json({ message: "Signup successful. Please Login to continue."});
            });
          });
  
          console.log("New User Added:", newUser);
        }
      });
    }
  });
    
    /*
    db.UserAuth.findOne({ email: req.body.email })
    .then(function(user) {
      if(!user){
        // create user 

        db.UserAuth.create(req.body)
        .then( dbUser => {
          console.log(dbUser);
          return res.json(dbUser);
        })
        .catch( error => {
          console.log(error);
          return res.json({"message": "Error"})
        });
      }
      else {
        return res.json({"message": "This user exists"});
      }
    })
    .catch( error => {
      console.log(error);
      return res.json({ message: "Another Error"});
    })
  });

  */

  app.get("/_api/user", (req, res) => {
    
    if (req.user) {
      // console.log(req.user);
      let temp= {};

      temp.email = req.user.email;
      temp.username = req.user.username;
      res.json(temp);
    }
    else {
      res.json(false);
    }
  });

  app.post("/_api/user/login",
  
  // THIS LINE IS NO LONGER TOTALLY FUCKED 
  passport.authenticate("local"),
  function (req, res)  {    
      // uname, email, pass
      if (req.user) {
        let temp = {};
        temp.email = req.user.email;
        temp.username = req.user.username;
        res.json(temp);
      }
      else {
        res.json(false);
      }
  });
  
  app.get("/_api/user/logout", function(req, res) {
    req.logout();
    res.json(true);
  });

};


// app.post("/_api/user/signup", function(req, res) {
  //   let errors = [];
  
  //   console.log("HERES THE REQUEST BODY:", req.body);
    
  //   if (req.body.password !== req.body.password2) {
  //     // errors.push({ message: "Password do not match!" });
  //     errors.push(".");
  //     return res.json({ message: "Passwords do not match" });
  //   }
  //   if (req.body.password.length < 4) {
  //     errors.push(".");
  //     return res.json({ message: "Password must be atleast 4 characters" });
  //   }
  //   if (errors.length > 0) {
  //     console.log("Errors length is:", errors.length);
  //     return res.json({ message: "Issue processing signup" });
  //   }
  //   else {
  //     let message = null;
  
  //     db.UserAuth.findOne({ username: req.body.username }).then(user => {
  //       if (user) {
  //         console.log("THIS USERNAME WAS FOUND IN DB ALREADY");
  //         message = "Username already taken, please try again!";
  //         return res.json({ message: message });
  //       }
  //     }); 
  
  //     db.UserAuth.findOne({ email: req.body.email }).then(email => {
  
  //       if (email) {
  //         console.log("THIS EMAIL WAS FOUND IN DB ALREADY");
  //         message = "Email already Registered! Please Login.";
  //         return res.json({ message: message });
  //       }
  //       else {
  //         const newUser = {
  //           username: req.body.username,
  //           email: req.body.email,
  //           password: req.body.password
  //         };
  
  //         bcrypt.genSalt(10, (err, salt) => {
  //           bcrypt.hash(newUser.password, salt, (err, hash) => {
  //             if (err) {
  //               throw err;
  //             }
  //             newUser.password = hash;
  //             db.UserAuth.create(newUser);
  //             return res.json({ message: "Signup successful. Please Login to continue."});
  //           });
  //         });
  
  //         console.log("New User Added:", newUser);
  //       }
  //     });
  //   }
  // });
  
  // app.post(
  //   "/login",
  //   passport.authenticate("local", {
  //     failureRedirect: "/",
  //     failureFlash: "Bad Login!"
  //   }),
  //   (req, res) => {
  //     console.log(req.body);
  
  //     db.UserAuth.findOne({
  //       email: req.body.email
  //     }).then(function(dbRes) {
  //       console.log("dbRES WOO:", dbRes);
  
  //       let q = {};
  //       q.username = dbRes.username;
  //       q.email = dbRes.email; 
        
  //       res.send({redir: "/game"});
  //     });
  //   }
  // );
  
  // app.post("/_api/user/signup", function(req, res) {
  //   console.log("WE GOT THE DATA HERE: ", req.body);
  //   // check if passwords match
  //   if (req.body.password !== req.body.password2) {
  //     console.log("Password mismatch");
  //     res.json({ message: "Password mismatch" });
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