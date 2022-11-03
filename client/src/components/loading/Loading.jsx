import React from "react";
import loadingGif from "../../media/food-sf.gif";
import * as S from "./styled.loading";

const Loading = () => {
	return (
		<S.container>
			<S.image src={`${loadingGif}`} alt='loading food' />
		</S.container>
	);
};

export default Loading;
