import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import { setStatus } from "../../redux/actions";
import Loading from "../loading/Loading";
import * as S from "./styled.detail";

//https://dev.to/sanchithasr/3-ways-to-convert-html-text-to-plain-text-52l8;
function convertToPlain(html) {
	// Create a new div element
	var tempDivElement = document.createElement("div");

	// Set the HTML content with the given value
	tempDivElement.innerHTML = html;

	// Retrieve the text property of the element
	return tempDivElement.textContent || tempDivElement.innerText || "";
}
const Detail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const detail = useSelector((state) => state.detail);

	useEffect(() => {
		dispatch(getDetail(id));
	}, [dispatch, id]);

	if (!Object.keys(detail).length) {
		return <Loading />;
	}

	return (
		<S.card>
			<S.header>
				<S.Image src={detail.image} />
				<S.headerText>
					<S.title>{detail.title}</S.title>
					<S.healthScore>
						<span>Health Score</span>
						<span> 💚{detail.healthScore}</span>
					</S.healthScore>
					<S.diets>
						{detail.diets?.length &&
							detail.diets.map((el, idx) => {
								return <S.diet key={idx}>{el}</S.diet>;
							})}
					</S.diets>
				</S.headerText>
			</S.header>
			<S.text>
				<S.summary>
					<h3>Summary</h3>
					<p>{convertToPlain(detail.summary)}</p>
				</S.summary>
				<S.instructions>
					<h3>Instructions</h3>
					<ol>
						{detail.steps?.length &&
							detail.steps.map((el, index) => {
								return (
									<S.styledLi key={index + detail.id}>{el.step}</S.styledLi>
								);
							})}
					</ol>
				</S.instructions>
			</S.text>
		</S.card>
	);
};

export default Detail;
