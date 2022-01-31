const router = require("express").Router();
const bookRoutes = require("./books");
const priceRoutes = require("./price");

// Book routes
router.use("/books", bookRoutes);
router.use("/price", priceRoutes);

module.exports = router;
