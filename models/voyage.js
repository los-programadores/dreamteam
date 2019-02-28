const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voyageSchema = new Schema({
  userID: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true,
    unique: false
  },
  guideID: {
    type: Date,
    required: true,
  },
  imformation: {
    type: Object,
    required: true
  },
  chat: {
    type: Object,
    required: true
  }


});

const Voyage = mongoose.model("Voyage", voyageSchema);

module.exports = Voyage;
