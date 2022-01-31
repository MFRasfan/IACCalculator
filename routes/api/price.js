const router = require("express").Router();
const priceController = require("../../controllers/priceController");

// Matches with "/api/price"
router.route("/")
  .get(priceController.findAll)
  .post(priceController.create);

// Matches with "/api/price/:id"
router
  .route("/:id")
  .get(priceController.findById)
  .put(priceController.update)
  .delete(priceController.remove);

module.exports = router;
