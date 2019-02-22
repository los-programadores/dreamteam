const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true
  },
  voyages: {
    type: Array,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
