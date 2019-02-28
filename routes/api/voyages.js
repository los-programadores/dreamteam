const router = require("express").Router();
const voyagesController = require("../../controllers/voyagesControllers");

// Matches with "/api/users"
router.route("/")
    .post(voyagesController.create);

// Matches with "/api/voyages/:id"
router
    .route("/:id")
    .get(voyagesController.findAll)
//   .delete(voyagesController.remove);

module.exports = router;