import "./App.css";
import { useCallback, useMemo } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDiets, getRecipes, setPage, setStatus } from "./redux/actions";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import { GlobalStyle } from "./GlobalStyle.styled";
import Detail from "./components/recipe-detail/Detail";
import Create from "./components/create-recipe/Create";
import Landing from "./components/landing-page/Landing.jsx";

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const getThePlace = useCallback(() => {
		dispatch(getDiets());
		dispatch(getRecipes());
		dispatch(setPage(1));
		dispatch(setStatus("loading"));
		navigate("/landing");
	}, []);

	useMemo(() => {
		getThePlace();
	}, []);

	return (
		<>
			<Nav />
			<GlobalStyle />

			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/landing' element={<Landing />} />
				<Route path='/create' element={<Create />} />
				<Route path='/:id' element={<Detail />} />
			</Routes>
		</>
	);
}

export default App;
