const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findById: function (req, res) {
    db.Voyage
      .findAll({ uid: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Voyage
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status().json(err));
  },
  update: function (req, res) {
    db.Voyage
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Voyage
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
