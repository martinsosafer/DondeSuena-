require("dotenv").config();
const { Router } = require("express");
const { getDiets } = require("../controllers/Diets.js");
const router = Router();
const { Diet } = require("../db.js");

router.get("/", async (req, res) => {
	// const { data } = await axios.get(
	// 	`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
	// );

	try {
		const filteredDiets = await getDiets();

		filteredDiets.length &&
			filteredDiets.forEach(async (el) => {
				await Diet.findOrCreate({
					where: { name: el },
				});
			});
		const allDiets = await Diet.findAll();

		res.status(200).json(allDiets);
	} catch (error) {
		res.status(400).json(error.message);
	}
});

module.exports = router;
