require("dotenv").config();
const axios = require("axios");
const complexSearch = require("../../foodComplexSearch");
const { API_KEY } = process.env;

const getDiets = async () => {
	// const { data } = await axios.get(
	// 	`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
	// );
	const data = complexSearch;
	if (!data) throw new Error("No diets found");
	const filteredDiets = data.results.map((el) => el.diets).flat();
	const filteredDietsSet = new Set(filteredDiets);
	const diets = Array.from(filteredDietsSet);

	return diets;
};

module.exports = {
	getDiets,
};
