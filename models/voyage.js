const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voyageSchema = new Schema({
<<<<<<< HEAD
    vid: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true,
        unique: false
    },
    startDatae: {
        type: Date,
        required: true,
        unique: false
    },
    endDate: {
        type: Date,
        required: false,
        unique: false
    },
    insterest: {
        type: Object,
        required: true
    }
=======
  vid: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true,
    unique: false
  },
  startDatae: {
    type: Date,
    required: true,
    unique: false
  },
  endDate: {
    type: Date,
    required: false,
    unique: false
  },
  insterest: {
    type: Object,
    required: true
  }
>>>>>>> master
});

const Voyage = mongoose.model("Voyage", voyageSchema);

<<<<<<< HEAD
module.exports = Voyage;
=======
module.exports = Voyage;
>>>>>>> master
