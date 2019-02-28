const router = require("express").Router();
const voyagesController = require("../../controllers/");

// Matches with "/api/guides"
router.route("/")
    .get(guidesController.findAll)
    .post(guidesController.create);

// Matches with "/api/guides/:id"
router
    .route("/:location")
    .get(guidesController.findAll)
//   .put(guidesController.update)
//   .delete(guidesController.remove);

module.exports = router;
