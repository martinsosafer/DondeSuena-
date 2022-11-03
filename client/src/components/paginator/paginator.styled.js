import styled from "styled-components";
import { colors } from "../../GlobalStyle.styled";

export const container = styled.ul`
	display: flex;
	justify-content: space-between;
	gap: 6px;
	background-color: ${colors.BACKGROUND};
	padding: 6px;
	border-radius: 50px;
`;

export const button = styled.li`
	list-style: none;
	font-size: 17px;
	text-decoration: none;
	font-weight: 600;
	border-radius: 50%;
	padding: 2px 10px 2px;
	border: none;
	color: #abc9ff;
	background-color: ${colors.BACKGROUND};

	cursor: pointer;
	transition: 0.25s;
	/* border: 2px solid red; */

	&:hover {
		background-color: #abc9ff;
		color: ${colors.BACKGROUND};
		border: none;
	}
`;

export const Brand = styled.span`
	font-size: 20px;
	color: ${colors.TEXT_WHITE};
	transition: 100ms;
	font-weight: 600;
	&hover {
		opacity: 0.8;
	}
`;
