import React from "react";
import * as S from "./styled-card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../media/Food Icon.jpg";

const Card = ({ image, title, healthScore, diets, id }) => {
	const navigate = useNavigate();

	return (
		<S.Card>
			<S.image src={image ? image : `${defaultImage}`} alt='recipe of food' />
			<S.text_wrapper>
				<S.title>{title}</S.title>
				<S.healthScore>
					<span> Health Score: </span>
					<p>
						{healthScore}
						💚
					</p>
				</S.healthScore>
				<S.diets>
					{diets?.map((diet, idx) => {
						return <S.diet key={idx}>{diet}</S.diet>;
					})}
				</S.diets>
				{/* <Link to={`/${id}`}> */}
				<S.button onClick={() => navigate(`/${id}`)}>Detail</S.button>
				{/* </Link> */}
			</S.text_wrapper>
		</S.Card>
	);
};

export default Card;
