const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voyageSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  guideID: {
    type: String,
    required: true
  },
  guideName: {
    type: String,
    required: true
  },
  information: {
    type: Object,
    require: true
  },
  chat: {
    type: Array,
    required: true
  }


});

const Voyage = mongoose.model("Voyage", voyageSchema);

module.exports = Voyage;
