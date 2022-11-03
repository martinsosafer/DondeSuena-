import styled from "styled-components";
import { Button, LandingPage } from "../landing-page/Landing.styled";
import { colors } from "../../GlobalStyle.styled";
import { Input } from "../SearcBar/styled.search";
import image from "../../media/create.jpg";
import bgForm from "../../media/pino-hemlock-madersama.jpg";

//extender del boton de landing

export const diet_button = styled(Button)`
	box-shadow: none;
	position: relative;
	left: 0px;
	right: 0px;
	bottom: 0;
	font-size: 8px;
	padding: 5px;
	border: 1px solid black;
	transition: none;
	background-color: ${({ dietsClicked }) => dietsClicked && "#f47c7c"};

	&:hover {
		color: black;
		border: 1px solid black;
	}
`;
export const Submit = styled(Button)`
	box-shadow: none;
	position: relative;
	background-color: ${({ disabled }) => disabled && "gray"};
	width: 50%;
	left: 0;
	right: 0;
	bottom: 0%;
	font-size: 15px;
	padding: 5px;
	&:hover {
		background-color: ${({ disabled }) => disabled && "gray"};
		border-color: ${({ disabled }) => disabled && "black"};
		cursor: ${({ disabled }) => disabled && "default"};
	}
`;
export const Add = styled(Button)`
	box-shadow: none;
	position: relative;
	width: 10%;
	left: 0;
	right: 0;
	bottom: 0%;
	font-size: 6px;
	padding: 0px;
`;

export const Container = styled(LandingPage)`
	background-image: url(${image});
	justify-content: center;
	align-items: center;
`;

export const Range = styled.input`
	color: ${colors.PRIMARY};
	margin-left: 5px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${colors.TEXT_WHITE};
	/* background-image: url(${bgForm}); */

	border-radius: 9px;
	gap: 7px;
	.span {
		font-size: 10px;
	}
`;

export const input = styled(Input)`
	opacity: 60%;
	margin-left: 5px;
	margin-right: 5px;
`;

export const textArea = styled.textarea`
	font-size: 12px;
	border-width: 1px;
	border-color: #cccccc;
	border-style: solid;
	text-align: left;
	box-shadow: 0px 0px 4px 0px rgba(42, 42, 42, 0.75);
	border-radius: 9px;
	text-shadow: 0px 0px 0px rgba(42, 42, 42, 0.45);
	opacity: 60%;
	margin-left: 5px;
	margin-right: 5px;

	&:focus {
		outline: 1.5px solid #7de5ed;
	}
`;

export const dietsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	/* border: 2px solid red; */
`;

export const error = styled.p`
	color: ${colors.DANGER};
	font-size: 13px;
`;
