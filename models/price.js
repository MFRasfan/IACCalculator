const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const priceSchema = new Schema({
  Category: { type: String, required: true },
  Material: { type: String, required: true },
  Sqft1: { type: String, required: true },
  Sqft2: { type: String, required: true },
  Sqft3: { type: String, required: true },
  Sqft4: { type: String, required: true },
  Sqft5: { type: String, required: true },
  Sqft6: { type: String, required: true },
  Sqft7: { type: String, required: true },
  Sqft8: { type: String, required: true },
  Sqft9: { type: String, required: true },
  Sqft10: { type: String, required: true },
  Finishing1: { type: String, required: true },
  Finishing2: { type: String, required: true },
  Finishing3: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Price = mongoose.model("Price", priceSchema);

module.exports = Price;
