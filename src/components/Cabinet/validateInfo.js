export const validateInfo = (values) => {
	const errors = {};

	const defaultMin = 2;
	const defaultMax = 255;

	if (!values.name) {
		errors.name = 'Поле не может быть пустым';
	} else if (values.name.length > defaultMax) {
		errors.name = `Не более ${defaultMax} символов`;
	} else if (values.name.length < defaultMin) {
		errors.name = `Не менее ${defaultMin} символов`;
	}

	if (!values.surname) {
		errors.surname = 'Поле не может быть пустым';
	} else if (values.surname.length > defaultMax) {
		errors.surname = `Не более ${defaultMax} символов`;
	} else if (values.surname.length < defaultMin) {
		errors.surname = `Не менее ${defaultMin} символов`;
	}

	if (!values.dateOfBirth) {
		errors.dateOfBirth = 'Поле не может быть пустым';
	} else if (values.dateOfBirth.indexOf("_") !== -1) {
		errors.dateOfBirth = 'Поле не может быть пустым';
	}

	if (!values.phone) {
		errors.phone = 'Поле не может быть пустым';
	}
	else if (values.phone.length !== 16) {
		errors.phone = 'Поле не может быть пустым';
	}

	if (!values.city) {
		errors.city = 'Поле не может быть пустым';
	} else if (values.city.length > defaultMax) {
		errors.city = `Не более ${defaultMax} символов`;
	} else if (values.city.length < defaultMin) {
		errors.city = `Не менее ${defaultMin} символов`;
	}

	return errors;
};