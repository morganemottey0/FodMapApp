const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  fodmap: {
    fructose: String,
    lactose: String,
    sorbitol: String,
    mannitol: String,
    GOS: String,
    fructanes: String
  },
  safeQuantity: String,
  notes: String,
  tags: [String]
});

module.exports = mongoose.model("Food", foodSchema);
