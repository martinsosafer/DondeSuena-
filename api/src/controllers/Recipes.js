require("dotenv").config();
const complexSearch = require("../../foodComplexSearch");
// const { API_KEY } = process.env;
const axios = require("axios");
const { getDiets } = require("./Diets");
const { Recipe, Diet } = require("../db.js");

const formatRecipe = (recipes) => {
	return (
		recipes.length > 0 &&
		recipes.map((el) => {
			return {
				id: el.id,
				title: el.title,
				image: el.image,
				summary: el.summary,
				healthScore: el.healthScore,
				dishTypes: el.dishTypes,
				steps: el.analyzedInstructions.length
					? el.analyzedInstructions[0].steps
					: undefined,
				diets: el.diets,
			};
		})
	);
};

const getRecipes = async (queryRecipes) => {
	// https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true

	const { data } = await axios.get(
		`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`
	);

	//recetas de la api
	// const data = complexSearch;
	const formattedRecipes = formatRecipe(data.results);

	//recetas de la base de datos

	let db = await Recipe.findAll({
		attributes: [
			"id",
			"title",
			"image",
			"summary",
			"healthScore",
			"dishTypes",
			"steps",
		],
		include: [
			{
				model: Diet,
				attributes: ["name"],
			},
		],
	});

	//formateo de la propiedad diets para igualar la prop de la api

	const dietDb = db.map((recipe) => {
		const dietRecipe = recipe.dataValues.Diets.map((el) => el.name);
		return {
			...recipe.dataValues,
			diets: dietRecipe,
		};
	});

	dietDb.forEach((el) => {
		formattedRecipes.push(el);
	});

	// chequeo si el valor que viene por query es dieta o nombre

	const dietList = getDiets();

	if (queryRecipes && (await dietList).includes(queryRecipes)) {
		const filteredByDiets = formattedRecipes.filter((recipe) =>
			recipe.diets.includes(queryRecipes)
		);
		return filteredByDiets;
	}

	if (queryRecipes) {
		const filteredRecipes = formattedRecipes.filter((el) =>
			el.title.includes(queryRecipes)
		);

		if (!filteredRecipes.length) return "recipes not found";

		return filteredRecipes;
	}
	return formattedRecipes;
};

const getRecipeById = async (id) => {
	// const filteredId = id.split(":");

	const allRecipes = await getRecipes();

	const foundedRecipe = allRecipes.find((el) => el.id.toString() === id);

	if (foundedRecipe) return foundedRecipe;

	throw new Error("there is no recipe matching that id ");
};

//agregar propiedades q faltan al post

const postRecipes = async (
	title,
	summary,
	healthScore,
	steps,
	diets,
	image
) => {
	if (!title || !summary || !healthScore || !steps || !diets)
		throw new Error("faltan parametros");

	title = title[0].toUpperCase() + title.slice(1);

	const newRecipe = await Recipe.create({
		title,
		summary,
		healthScore,
		steps,
		image,
	});

	await newRecipe.addDiets(diets);

	// newRecipe.dataValues.diets = [];

	// const dietsDb = await Diet.findAll();

	// const dietsMatched = dietsDb.filter((el) => diets.includes(el.id));

	// console.log(newRecipe.dataValues.diets);

	// dietsMatched.forEach((el) => {
	// 	newRecipe.dataValues.diets = [...newRecipe.dataValue.diets, el.name];
	// });

	return newRecipe;
};

module.exports = {
	getRecipes,
	getRecipeById,
	postRecipes,
};
