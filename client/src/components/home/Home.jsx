import React from "react";
import Cards from "../cards/Cards";
import Loading from "../loading/Loading";
import * as S from "./styled.home";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../../redux/actions";
const Home = () => {
	const status = useSelector((state) => state.status);

	if (status === "loading") {
		return <Loading />;
	}

	return (
		<>
			<S.home_whrapper>
				<Cards />
			</S.home_whrapper>
		</>
	);
};

export default Home;
