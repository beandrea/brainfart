const router = require("express").Router()
const userRoutes = require("./user");

// router.use("/books", bookRoutes);
router.use("/user", userRoutes);

module.exports = router;