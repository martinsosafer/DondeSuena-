import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	getRecipesByName,
	getRecipes,
	setPage,
	setStatus,
} from "../../redux/actions";
import { Button, Input } from "./styled.search";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
	const [recipeName, setRecipeName] = useState("");
	const dispatch = useDispatch();
	const handleChange = (e) => {
		const input = e.target.value;
		setRecipeName(input);
		// dispatch(setPage(1));
		// input ? dispatch(getRecipesByName(input)) : dispatch(getRecipes());
	};

	const handleSubmit = () => {
		console.log(recipeName);
		dispatch(setStatus("loading"));
		recipeName
			? dispatch(getRecipesByName(recipeName))
			: dispatch(getRecipes());
		dispatch(setPage(1));
		setRecipeName("");

		// window.location.replace("/");
	};
	const handleFocus = () => {
		if (window.location.pathname !== "/") window.location.replace("/");
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}>
			<Input
				onFocus={handleFocus}
				value={recipeName}
				className='searchBar'
				placeholder='search recipe...'
				onChange={(e) => handleChange(e)}
			/>
			<Button type='submit'>
				<HiOutlineSearch size={"1.5em"} />
			</Button>
		</form>
	);
};

export default SearchBar;
