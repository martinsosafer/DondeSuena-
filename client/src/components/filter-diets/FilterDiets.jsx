import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderByDiet, setPage, setStatus } from "../../redux/actions";
import { FaAngleDown } from "react-icons/fa";

import * as S from "./styled.filter.diets";

const FilterDiets = () => {
	const diets = useSelector((state) => state.diets);
	const dispatch = useDispatch();

	const handleFilter = (e) => {
		dispatch(orderByDiet(e.target.value));
		dispatch(setPage(1));
		dispatch(setStatus("loading"));
	};

	return (
		<S.filterContainer>
			<S.typeDiet>Type: </S.typeDiet>
			<S.selectInput onChange={(e) => handleFilter(e)}>
				{diets.map((el, idx) => {
					return (
						<S.optionStyled key={idx} value={el.name}>
							{el.name}
						</S.optionStyled>
					);
				})}
			</S.selectInput>
			<S.i>
				<FaAngleDown />
			</S.i>
		</S.filterContainer>
	);
};

export default FilterDiets;
