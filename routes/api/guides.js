const router = require("express").Router();
const guidesController = require("../../controllers/guidesController");

// Matches with "/api/users"
router.route("/")
  .get(guidesController.findAll)
  .post(guidesController.create);

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
