import styled from "styled-components";
import { colors } from "../../GlobalStyle.styled";

export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding-top: 10px;
	padding-bottom: 10px;
	width: 100%;

	background-color: ${colors.PRIMARY};
`;

export const Button = styled.span`
	cursor: pointer;
	font-size: 20px;
	color: ${colors.TEXT_WHITE};
	transition: 100ms;
	font-weight: 600;
	&hover {
		opacity: 0.8;
	}
`;

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 40px;
`;

export const brand = styled.img`
	height: 30px;
	position: absolute;
	left: 152px;
	opacity: 70%;
`;
