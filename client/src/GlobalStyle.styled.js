import { createGlobalStyle } from "styled-components";

export const colors = {
	PRIMARY: "#abc9ff",
	// PRIMARY: "#B7C4CF",
	OUTLINE: "#7DE5ED",
	SECONDARY: "#C3FF99",
	TEXT_WHITE: "#FAF7F0",
	TEXT_BLACK: "#1B1A17",
	BACKGROUND: "#FFF5E4",
	BACKGROUND_ITEM: "#874C62",
	DANGER: "#E0144C",
};

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  overflow-wrap: break-word;
  /* margin: 0px; */
  /* padding: 0px; */

  /* background-color: ${colors.BACKGROUND}; */
  font-family: 'Montserrat', sans-serif;
	list-style-type: none;
	text-decoration: none;

	/* color: ${colors.TEXT_BLACK}; */

}
`;
