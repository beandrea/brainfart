const router = require("express").Router()
const userRoutes = require("./user");
const quizRoutes = require("./quiz");

// router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("/quiz", quizRoutes);

module.exports = router;