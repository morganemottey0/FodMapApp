const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodsController");

router.get("/", foodController.getAllFoods);
router.get("/:id", foodController.getFoodById);
router.post("/", foodController.createFood);
router.put("/:id", foodController.updateFood);
router.delete("/:id", foodController.deleteFood);

module.exports = router;
