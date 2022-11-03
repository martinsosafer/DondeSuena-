export const formValidate = ({ title, summary, image, healthScore }) => {
	const errors = {};

	if (!title) errors.title = "recipe name is required !";
	else if (!/[A-Za-z0-9]/.test(title))
		errors.title = "the title must not contain symbols";
	if (image && !/^(ftp|http|https):\/\/[^ "]+$/.test(image))
		errors.image = "the link must be a valid url !";
	if (summary.length > 120) errors.summary = "summary is too long !";
	if (healthScore > 100 || healthScore < 0) errors.healthScore = true;
	if (errors.title || errors.image || errors.summary || errors.healthScore)
		errors.disableSubmit = true;

	return errors;
};
