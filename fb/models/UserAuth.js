const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserAuthSchema = new Schema({

  email: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }
});

var UserAuth = mongoose.model("UserAuth", UserAuthSchema);
module.exports = UserAuth;
