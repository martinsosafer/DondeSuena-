import styled from "styled-components";
import Bgimage from "../../media/pino-hemlock-madersama.jpg";
import { colors } from "../../GlobalStyle.styled";
import { Submit } from "../create-recipe/styled-create-recipe";

export const Card = styled.div`
	box-shadow: inset;
	border-radius: 8px;
	box-shadow: 0 2px 2px;
	margin-top: 15px;
	margin-bottom: 15px;
	width: 25vw;
	background-image: url(${Bgimage});
	overflow: hidden;
	transition: all 0.25s;

	&:hover {
		transform: translateY(-6px);
		box-shadow: 0 12px 16px;
	}
`;

export const text_wrapper = styled.div`
	display: flex;
	font-size: 14px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	padding-bottom: 10px;
	line-height: 1.3;
	text-align: center;
	color: ${colors.TEXT_BLACK};
`;

export const image = styled.img`
	width: 100%;
	object-fit: contain;
`;
export const healthScore = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4px;
	align-items: center;
`;

export const diets = styled.div`
	display: flex;
	gap: 5px;
	font-size: 10px;
	flex-wrap: wrap;
	flex-direction: row;
`;
export const diet = styled.label`
	height: 10%;
	margin: auto;
	background-color: ${colors.BACKGROUND_ITEM};
	color: ${colors.TEXT_WHITE};
	border-radius: 20px;
	padding: 1px 3px;
	opacity: 80%;
`;

export const button = styled(Submit)`
	margin-top: 10px;
	border-radius: 10px;
	background-color: none;
	border: 1px solid black;
`;

export const title = styled.h3`
	font-weight: 600;
`;

// export const diets = styled.div``;
