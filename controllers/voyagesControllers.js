const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Voyage
      .find({ userID: req.params.id })
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllGuideVoyages: function (req, res) {
    db.Voyage
      .find({ guideID: req.params.id })
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Voyage
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
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
  },

  findVoyage: function (req, res) {
    db.Voyage
      .findById({ _id: req.params.voyageID })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  pushChat: function (req, res) {
    db.Voyage
      .findOneAndUpdate({ _id: req.params.voyageID }, { $push: { chat: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
