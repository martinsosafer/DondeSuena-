import styled from "styled-components";
import { colors } from "../../GlobalStyle.styled";

export const filterContainer = styled.div`
	position: relative;
	background-color: ${colors.BACKGROUND};
`;

export const i = styled.div`
	position: absolute;
	right: 20px;
	top: 10px;
	color: ${colors.PRIMARY};
`;

export const selectInput = styled.select`
	width: 100%;
	position: relative;
	padding: 10px 50px 10px 79px;
	border-radius: 50px;
	color: ${colors.PRIMARY};
	border: 1px solid #616161;
	-webkit-appearance: none;
	appearance: none;
	cursor: pointer;

	&::-ms-expand {
		display: none;
	}
	&:focus {
		outline: none;
		box-shadow: 0 0 10px -1px #616161;
	}
`;

export const optionStyled = styled.option`
	color: ${colors.PRIMARY};
`;

export const typeDiet = styled.label`
	position: absolute;

	z-index: 1;
	display: inline-block;
	font-weight: 600;
	font-size: 15px;
	top: 10px;
	left: 16px;
	color: ${colors.PRIMARY};
`;
