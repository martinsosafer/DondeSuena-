import {
	GET_RECIPES,
	GET_RECIPES_BY_NAME,
	GET_DIETS,
	POST_RECIPE,
	GET_RECIPE_BY_ID,
	SET_ORDER_BY_CHART,
	SET_ORDER_BY_DIET,
	SET_PAGE,
	SET_STATUS,
} from "./actions";

const initialState = {
	recipes: [],
	filters: [],
	diets: [],
	page: 1,
	detail: {},
	status: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return {
				...state,
				recipes: action.payload,
				status: "",

				// filters: action.payload,
			};
		case GET_RECIPES_BY_NAME:
			return {
				...state,
				recipes: action.payload,
				status: "",
			};

		case GET_DIETS:
			return {
				...state,
				diets: action.payload,
			};
		case POST_RECIPE:
			return {
				...state,
				recipes: [...state.recipes, action.payload],
			};

		case GET_RECIPE_BY_ID:
			return {
				...state,
				detail: action.payload,
			};

		case SET_ORDER_BY_CHART:
			return {
				...state,

				recipes: action.payload,
			};

		case SET_ORDER_BY_DIET:
			return {
				...state,
				recipes: action.payload,
				status: "",
			};

		case SET_PAGE:
			return {
				...state,
				page: action.payload,
			};
		case SET_STATUS:
			return {
				...state,
				status: action.payload,
			};

		default:
			return {
				...state,
			};
	}
};

export default reducer;
