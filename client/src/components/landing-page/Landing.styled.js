import styled from "styled-components";
import { colors } from "../../GlobalStyle.styled";

// import image from "../../media/landing.jpg";
const image =
	"https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_960_720.jpg";

export const LandingPage = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-image: url(${image});
	background-size: cover;
	justify-content: flex-end;
`;

export const Button = styled.button`
	position: absolute;
	right: 6.5%;
	bottom: 13%;
	background: ${colors.PRIMARY};
	opacity: 70%;
	border-radius: 15px;
	font-family: sans-serif;
	border: 2px solid black;
	box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 1);
	letter-spacing: 0.2em;
	color: black;
	font-size: 25px;
	font-weight: 100;
	padding: 10px 20px 10px 20px;
	text-decoration: none;
	transition: background-color 950ms;
	&:hover {
		cursor: pointer;
		background-color: #ffc4c4;
		border-color: #f47c7c;
		text-decoration: none;
		background-clip: text;
		-webkit-background-clip: text;
		/* -webkit-text-fill-color: transparent; */
	}
`;
