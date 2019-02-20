const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
<<<<<<< HEAD
  name: {
    type: String,
    required: true,
  },

=======

  name: {
    type: String,
    required: true,
  }
>>>>>>> master
});

const User = mongoose.model("User", userSchema);

module.exports = User;
