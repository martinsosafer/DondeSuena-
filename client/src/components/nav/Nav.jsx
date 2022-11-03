import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipes, setPage } from "../../redux/actions";
import SearchBar from "../SearcBar/SearchBar.jsx";
import brand from "../../media/brand.png";
import * as S from "./styled.nav";
const Nav = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		window.location.replace("/");
		dispatch(getRecipes);
		dispatch(setPage);
	};

	return (
		<>
			{location.pathname !== "/landing" && (
				<S.Nav>
					<S.Button onClick={handleClick}>Food App</S.Button>
					<S.brand src={brand} alt='one fork' />

					<SearchBar />
					<S.Wrapper>
						<S.Button onClick={() => navigate("/create")}>
							Create Recipe
						</S.Button>

						<S.Button onClick={handleClick}>Home</S.Button>
					</S.Wrapper>
				</S.Nav>
			)}
		</>
	);
};

export default Nav;
