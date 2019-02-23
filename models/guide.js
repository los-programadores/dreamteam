const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guideSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  languages: {
    type: String,
    required: true,
  },
  expertise: {
    type: String,
    required: true
  }
});

const Guide = mongoose.model("Guide", guideSchema);

module.exports = Guide;
