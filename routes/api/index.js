const router = require("express").Router();
const userRoutes = require("./users");
const guideRoutes = require("./guides")

// user routes
router.use("/users", userRoutes);
// guide routes
router.use("/guides", guideRoutes);

module.exports = router;
