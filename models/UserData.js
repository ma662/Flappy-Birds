const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserDataSchema = new Schema({

  userauth: {
    type: Schema.Types.ObjectId,
    ref: "UserAuth"
  },

  character: {
    type: String,
    color: "default",
    required: false
  },

  wins: {
    type: Number,
    required: false
  },

  obstacles_cleared: {
    type: Number,
    required: false
  }
});

var UserData = mongoose.model("UserData", UserDataSchema);
module.exports = UserData;
