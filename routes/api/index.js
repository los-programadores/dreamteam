const router = require("express").Router();
const userRoutes = require("./users");
const guideRoutes = require("./guides");
const voyageRoutes = require("./voyages");

// user routes
router.use("/users", userRoutes);
// guide routes
router.use("/guides", guideRoutes);
//voyages routes
router.use("/voyages", voyageRoutes);

module.exports = router;
