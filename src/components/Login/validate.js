const validate = values => {
	const errors = {};

	const defaultMin = 2;
	const defaultMax = 32;

	if (!values.password) {
		errors.password = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.password)) {
		errors.password = 'Поле не может содержать кириллицу'
	} else if (values.password.length > defaultMax) {
		errors.password = `Не более ${defaultMax} символов`;
	} else if (values.password.length < defaultMin) {
		errors.password = `Не менее ${defaultMin} символов`;
	}

	if (!values.email) {
		errors.email = 'Поле не может быть пустым';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Неверный email'
	} else if (values.email.length > defaultMax) {
		errors.email = `Не более ${defaultMax} символов`;
	} else if (values.email.length < defaultMin) {
		errors.email = `Не менее ${defaultMin} символов`;
	}

	return errors;
};

export default validate;