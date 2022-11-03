import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../../GlobalStyle.styled";
import { setPage } from "../../redux/actions";
import * as S from "./paginator.styled";

export const Paginator = () => {
	const recipes = useSelector((state) => state.recipes);
	const page = useSelector((state) => state.page);
	const dispatch = useDispatch();
	const pages = [];
	for (let i = 1; i < Math.ceil(recipes.length / 9); i++) {
		pages.push(i);
	}

	const handleClick = (btnPage) => {
		dispatch(setPage(btnPage));
	};

	return (
		<S.container>
			{pages.length &&
				pages.map((btnPage) => {
					const selectedButtonStyle =
						page === btnPage
							? { backgroundColor: colors.PRIMARY, color: "#fff" }
							: undefined;
					return (
						<S.button
							onClick={() => {
								handleClick(btnPage);
							}}
							style={selectedButtonStyle}
							key={btnPage}>
							{btnPage}
						</S.button>
					);
				})}
		</S.container>
	);
};
