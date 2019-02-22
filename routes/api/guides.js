const router = require("express").Router();
const guidesController = require("../../controllers/guidesController");

// Matches with "/api/guides"
router.route("/")
  .get(guidesController.findAll)
  .post(guidesController.create);

// Matches with "/api/guides/:id"
router
  .route("/:id")
  .get(guidesController.findById)
//   .put(guidesController.update)
//   .delete(guidesController.remove);

module.exports = router;
