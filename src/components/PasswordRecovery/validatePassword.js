export const validatePassword = values => {
	const errors = {};

	const defaultMin = 2;
	const defaultMax = 32;

	if (!values.password) {
		errors.password = 'Поле не может быть пустым';
	} else if (values.password.length > defaultMax) {
		errors.password = `Не более ${defaultMax} символов`;
	} else if (values.password.length < defaultMin) {
		errors.password = `Не менее ${defaultMin} символов`;
	}

	if (!values.password_repeat) {
		errors.password_repeat = 'Поле не может быть пустым';
	} else if (values.password_repeat.length > defaultMax) {
		errors.password_repeat = `Не более ${defaultMax} символов`;
	} else if (values.password_repeat.length < defaultMin) {
		errors.password_repeat = `Не менее ${defaultMin} символов`;
	} else if (values.password !== values.password_repeat) {
		errors.password_repeat = `Пароли не равны`;
	}

	return errors;
};