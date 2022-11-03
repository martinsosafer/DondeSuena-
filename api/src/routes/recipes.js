const { Router } = require("express");
const router = Router();
const {
	getRecipes,
	getRecipeById,
	postRecipes,
} = require("../controllers/Recipes.js");

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);

		res.status(200).json(await getRecipeById(id));
	} catch (error) {
		res.status(400).json(error.message);
	}
});

router.get("/", async (req, res) => {
	const recipeName = req.query.name;
	const dietName = req.query.diet;

	try {
		if (recipeName) {
			const capRecipeName = recipeName[0].toUpperCase() + recipeName.slice(1);
			return res.status(200).json(await getRecipes(capRecipeName));
		} else if (dietName) {
			return res.status(200).json(await getRecipes(dietName));
		} else res.status(200).json(await getRecipes());
	} catch (error) {
		res.status(400).json(error.message);
	}
});

router.post("/", async (req, res) => {
	try {
		const { title, summary, healthScore, steps, diets, image, dishTypes } =
			req.body;

		const postedRecipe = await postRecipes(
			title,
			summary,
			healthScore,
			steps,
			diets,
			image,
			dishTypes
		);

		res.status(201).json(postedRecipe);
	} catch (error) {
		res.status(404).json(error.message);
	}
});

module.exports = router;
