import styled from "styled-components";
import { Card } from "../card/styled-card";
import { colors } from "../../GlobalStyle.styled";

export const card = styled(Card)`
	margin: auto;
	margin-top: 3%;
	width: 70vw;
	font-size: 13px;
	color: ${colors.TEXT_BLACK};

	.p {
		font-size: 4px;
	}
	margin-bottom: 30px;
`;
export const Image = styled.img`
	object-fit: contain;
	width: 200px;
	display: inline-block;
	margin: 10px;
	border-radius: 15px;
`;
export const text = styled.div`
	display: flex;
`;

export const diets = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const diet = styled.label`
	height: 10%;
	margin: auto;
	background-color: ${colors.BACKGROUND_ITEM};
	color: ${colors.TEXT_WHITE};
	border-radius: 20px;
	padding: 5px 10px;

	opacity: 80%;
	margin: 3px;
`;
export const title = styled.h1``;
export const instructions = styled.div`
	flex: 1;
	padding: 20px;
`;
export const summary = styled.div`
	padding: 20px;
	border-right: 1px solid gray;
	flex: 1;
`;
export const healthScore = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4px;
	align-items: center;
	margin-bottom: 10px;
`;

export const header = styled.div`
	border-bottom: 1px solid gray;
	display: flex;
`;
export const headerText = styled.div`
	padding: 20px;
`;
export const P = styled.p``;

export const styledLi = styled.li`
	margin-bottom: 10px;
`;
