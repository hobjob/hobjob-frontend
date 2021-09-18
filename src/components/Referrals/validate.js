const validate = values => {
	const errors = {};

	if (!values.card) {
		errors.card = 'Поле не может быть пустым';
	} else if (values.card.indexOf("_") !== -1) {
		errors.card = 'Поле не может быть пустым';
	}

	return errors;
};

export default validate;