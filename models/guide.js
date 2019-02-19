const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guideSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true
  },
});

const Guide = mongoose.model("Guide", guideSchema);

module.exports = Guide;
