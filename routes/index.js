const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/user");

console.log("test")

// API Routes
router.use("/api/user", userRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
