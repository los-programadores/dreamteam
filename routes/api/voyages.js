const router = require("express").Router();
const voyagesController = require("../../controllers/voyagesController");

// Matches with "/api/voyages"
router.route("/")
  .get(voyagesController.findAll)
  .post(voyagesController.create);

// Matches with "/api/voyages/:user"
router
  .route("/:id")
  .get(voyagesController.findById)
//   .put(guidesController.update)
//   .delete(guidesController.remove);

module.exports = router;
