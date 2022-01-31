const router = require("express").Router();
const priceController = require("../../controllers/priceController");

// Matches with "/api/price"
router.route("/")
  .get(pricesController.findAll)
  .post(pricesController.create);

// Matches with "/api/price/:id"
router
  .route("/:id")
  .get(pricesController.findById)
  .put(pricesController.update)
  .delete(pricesController.remove);

module.exports = router;
