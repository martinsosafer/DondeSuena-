import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const GET_DIETS = "GET_DIETS";
export const POST_RECIPE = "POST_RECIPE";
export const SET_PAGINATOR = "SET_PAGINATOR";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const SET_ORDER_BY_CHART = "SET_ORDER_BY_CHART";
export const SET_ORDER_BY_DIET = "SET_ORDER_BY_DIET";
export const SET_PAGE = "SET_PAGE";
export const SET_STATUS = "SET_STATUS";

export const getRecipes = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`http://localhost:3001/recipes`);
			const recipes = data;

			return dispatch({
				type: GET_RECIPES,
				payload: recipes,
			});
		} catch (error) {
			console.error(error);
		}
	};
};

export const getRecipesByName = (query) => {
	return async (dispatch) => {
		try {
			const { data } = await axios(
				`http://localhost:3001/recipes?name=${query}`
			);

			return dispatch({
				type: GET_RECIPES_BY_NAME,
				payload: data,
			});
		} catch (error) {
			console.error(error);
		}
	};
};

export const getDiets = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`http://localhost:3001/diets`);

			return dispatch({
				type: GET_DIETS,
				payload: data,
			});
		} catch (error) {
			console.error(error);
		}
	};
};

export const postRecipe = (form) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`http://localhost:3001/recipes`, form);
			const recipe = data;
			console.log(recipe);

			return dispatch({
				type: POST_RECIPE,
				payload: recipe,
			});
		} catch (error) {
			console.error(error);
		}
	};
};

export const getDetail = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`http://localhost:3001/recipes/${id}`);

			return dispatch({
				type: GET_RECIPE_BY_ID,
				payload: data,
			});
		} catch (error) {
			console.error(error);
		}
	};
};

export const setOrderByAz = (sortedRecipes) => {
	return {
		type: SET_ORDER_BY_CHART,
		payload: sortedRecipes,
	};
};

export const orderByDiet = (diet) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(
				`http://localhost:3001/recipes/?diet=${diet}`
			);

			return dispatch({
				type: SET_ORDER_BY_DIET,
				payload: data,
			});
		} catch (error) {
			console.error(error);
		}
	};
};

export const setPage = (page) => {
	return {
		type: SET_PAGE,
		payload: page,
	};
};

export const setStatus = (status) => {
	return {
		type: SET_STATUS,
		payload: status,
	};
};
