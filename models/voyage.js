const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voyageSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  guideId: {
    type: String,
    required: true
  },
  information: {
    type: Object,
    required: true
  },
  chat: {
    type: Array,
    required: true
  }
});

const Voyage = mongoose.model("Voyage", voyageSchema);

module.exports = Voyage;
