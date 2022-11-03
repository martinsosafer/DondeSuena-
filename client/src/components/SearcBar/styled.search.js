import styled from "styled-components";

export const Button = styled.button`
	all: unset;
	margin-left: 12px;

	color: #fff;
	/* border: 2px solid red; */

	cursor: pointer;
`;

export const Input = styled.input`
	font-size: 12px;
	border-width: 1px;
	border-color: #cccccc;
	border-style: solid;
	padding: 6px 50px 6px 20px;
	text-align: left;
	box-shadow: 0px 0px 4px 0px rgba(42, 42, 42, 0.75);
	border-radius: 9px;
	text-shadow: 0px 0px 0px rgba(42, 42, 42, 0.45);
	/* border: 2px solid red; */

	&:focus {
		outline: 1.5px solid #7de5ed;
	}
`;
