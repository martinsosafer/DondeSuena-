const { Router } = require("express");
const diets = require("./diets.js");
const recipes = require("./recipes.js");
const router = Router();

// Configurar los routers
router.use("/diets", diets);
router.use("/recipes", recipes);

module.exports = router;
