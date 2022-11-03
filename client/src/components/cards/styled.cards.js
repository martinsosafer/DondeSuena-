import styled from "styled-components";
import { colors } from "../../GlobalStyle.styled";

export const wrapper = styled.div`
	display: flex;
	/* flex: 1; */
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-evenly;
	background-color: ${colors.BACKGROUND};
`;

export const pagWrapper = styled.div`
	display: flex;
	width: 100%;
	background-color: ${colors.PRIMARY};
	padding: 20px;
	padding-bottom: 0px;
	margin-top: 10px;
	/* flex: 1; */
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	gap: 5px;
`;

//------------------ A/Z
export const order = styled.p`
	font-size: 13px;
	margin: 8px;
	color: ${colors.PRIMARY};
`;
export const CheckBoxWrapper = styled.div`
	position: relative;
`;

export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 42px;
	height: 26px;
	border-radius: 15px;
	background: #bebebe;

	cursor: pointer;
	&::after {
		content: "";
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;

export const CheckBox = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 42px;
	height: 26px;
	&:checked + ${CheckBoxLabel} {
		background: ${colors.SECONDARY};
		&::after {
			content: "";
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 21px;
			transition: 0.2s;
		}
	}
`;

export const AZ = styled.div`
	display: flex;
	flex-direction: row;
`;
//---------------------------

export const filtersContainer = styled.div`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 2%;
	padding-left: 6.5%;
	padding-right: 6.5%;
`;
