import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRecipe, setStatus } from "../../redux/actions";
import { formValidate } from "../../helpers/create/validate";
import * as S from "./styled-create-recipe";
var number = 1;

const Create = () => {
	const diets = useSelector((state) => state.diets);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	let stateInput = {
		title: "",
		summary: "",
		image: "",
		diets: [],
		steps: [],
		healthScore: 0,
	};

	const [input, setInput] = useState(stateInput);
	const [instruction, setInstruction] = useState("");
	const [dietsClicked, setDietClick] = useState({});
	const [errors, setErrors] = useState({
		title: "",
		summary: "",
		image: "",
		healthScore: false,
	});

	const submitForm = async (e) => {
		e.preventDefault();
		const recipe = await dispatch(postRecipe(input));
		dispatch(setStatus("loading"));
		setInput(stateInput);
		setDietClick({});
		navigate(`/${recipe.payload.id}`);
	};

	const handleChange = (e) => {
		const value = e.target.value;
		const property = e.target.name;
		const data = { ...input, [property]: value };
		setInput(data);
		setErrors(formValidate(data));
	};
	//controlar el input de instrucciones

	const handleChangeInstruction = (e) => {
		const value = e.target.value;

		setInstruction(value);
	};

	const addInstruction = () => {
		if (instruction) {
			setInput({
				...input,
				steps: [...input.steps, { num: number++, step: instruction }],
			});
			setInstruction("");
		}
	};

	const dietInputButton = (e) => {
		const id = e.target.value.toString();

		if (input.diets.length < 3) {
			if (input.diets.find((el) => el === id)) {
				const filteredState = input.diets.filter((el) => el !== id);
				setInput({ ...input, diets: filteredState });
				clickDiet(id);
			} else setInput({ ...input, diets: [...input.diets, id] });
			clickDiet(id);
		} else alert("too many diets");
	};

	const clickDiet = (id) => {
		!dietsClicked.hasOwnProperty(id)
			? setDietClick({ ...dietsClicked, [id]: true })
			: setDietClick({ ...dietsClicked, [id]: !dietsClicked[id] });
	};

	return (
		<S.Container>
			<S.Form onSubmit={submitForm}>
				<div>
					<label htmlFor='title'>Title: </label>
					<S.input
						errors={errors}
						type='text'
						name='title'
						value={input.title}
						onChange={handleChange}
						maxLength={30}
					/>
					<span>{input.title.length}/30</span>
					<S.error>{errors.title}</S.error>
				</div>
				<div>
					<label htmlFor='image'>Image:</label>
					<S.input
						name='image'
						value={input.image}
						placeholder='https//...'
						onChange={handleChange}
					/>
					<S.error>{errors.image}</S.error>
				</div>
				<div>
					<label htmlFor='image'>Health Score:</label>

					<S.Range
						type='range'
						name='healthScore'
						value={input.range}
						onChange={handleChange}
					/>
					<span>{input.healthScore}</span>
				</div>

				<S.dietsWrapper>
					{diets.length &&
						diets.map((diet) => {
							return (
								<S.diet_button
									type='button'
									onClick={(e) => {
										dietInputButton(e);
									}}
									key={diet.id}
									value={diet.id}
									dietsClicked={dietsClicked[diet.id]}>
									{diet.name}
								</S.diet_button>
							);
						})}
				</S.dietsWrapper>

				<div>
					Summary:
					<S.textArea
						name='summary'
						value={input.summary}
						onChange={handleChange}
						maxLength={120}
					/>
					<span>{input.summary.length}/120</span>
				</div>
				<div>
					Add Instruction:
					<S.textArea
						name='analyzedInstructions'
						value={instruction}
						onChange={handleChangeInstruction}
						maxLength={120}
					/>
					<button type='button' onClick={addInstruction}>
						+
					</button>
					<div>
						{input.steps.map((el, idx) => {
							return <p key={idx}>{`${el.num}- ${el.step}`}</p>;
						})}
					</div>
				</div>
				<S.Submit
					type='submit'
					disabled={errors.disableSubmit ? "disabled" : undefined}>
					Create
				</S.Submit>
			</S.Form>
		</S.Container>
	);
};

export default Create;
