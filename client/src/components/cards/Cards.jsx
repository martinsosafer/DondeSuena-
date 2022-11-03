import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paginator } from "../paginator/paginator";
import { setOrderByAz } from "../../redux/actions";
import FilterDiets from "../filter-diets/FilterDiets";
import Card from "../card/Card";
import * as S from "./styled.cards";

const Cards = () => {
	const recipes = useSelector((state) => state.recipes);
	const page = useSelector((state) => state.page);
	const dispatch = useDispatch();
	const [orderByChart, setOrderByChart] = useState(false);

	useEffect(() => {
		setTimeout(window.scrollTo(0, 0), 5000);
	}, [page, recipes]);

	if (recipes === "recipes not found") return <h1>{recipes}</h1>;

	const lastPostIndex = page * 9;
	const firstPostIndex = lastPostIndex - 9;
	const slicedArray = recipes.slice(firstPostIndex, lastPostIndex);

	const sortByChar = (order) => {
		//armar copia del estado segun el orden de los nombres pasado por parametro
		const sortedRecipes = [];
		for (let i = 0; i < order.length; i++) {
			recipes.forEach(
				(recipe) => recipe.title === order[i] && sortedRecipes.unshift(recipe)
			);
		}
		return sortedRecipes;
	};

	const dispatchOrderAz = () => {
		//cambio el valor del bool
		setOrderByChart(!orderByChart);
		const aZ = recipes.map((el) => el.title).sort();

		//ordeno

		if (orderByChart) dispatch(setOrderByAz(sortByChar(aZ)));
		else {
			const zA = aZ.reverse();
			dispatch(setOrderByAz(sortByChar(zA)));
		}
	};

	return (
		<>
			<S.filtersContainer>
				<S.AZ>
					<S.order>Order By</S.order>

					<S.CheckBoxWrapper>
						<S.CheckBox
							id='checkbox'
							type='checkbox'
							onClick={dispatchOrderAz}
						/>
						<S.CheckBoxLabel htmlFor='checkbox' />
					</S.CheckBoxWrapper>
					<S.order>{orderByChart ? "Z/A" : "A/Z"}</S.order>
				</S.AZ>

				<FilterDiets />
			</S.filtersContainer>
			<hr></hr>

			<S.wrapper>
				{slicedArray.length &&
					slicedArray.map((recipe) => {
						return (
							<Card
								key={recipe.id}
								id={recipe.id}
								image={recipe.image}
								title={recipe.title}
								healthScore={recipe.healthScore}
								diets={recipe.diets}
							/>
						);
					})}
			</S.wrapper>
			<S.pagWrapper>
				<Paginator />
			</S.pagWrapper>
		</>
	);
};

export default Cards;
