const router = require("express").Router();
const priceRoutes = require("./price");

// Book routes
router.use("/price", priceRoutes);

module.exports = router;
