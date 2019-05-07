const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const db = require("../models");

// module.exports = passport => {
//   passport.use(
//     new localStrategy({ usernameField: "email"}, (email, password, done => {
//       db.UserAuth.findOne({
//         email: email
//       }).then( user => {
//         if (!user) {
//           return done(null, false, { message: "No User Found!"});
//         }
//       })
//     })
//     )
//   };

// module.exports = passport => {
//   passport.use(
//     new JwtStrategy(opts, (jwt_payload, done) => {
//       User.findById(jwt_payload.id)
//         .then(user => {
//           if (user) {
//             return done(null, user);
//           }
//           return done(null, false);
//         })
//         .catch(err => console.log(err));
//     })
//   );
// };