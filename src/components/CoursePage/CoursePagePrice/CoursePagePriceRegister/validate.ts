interface validateValues {
	email: string;
}

interface validateErrors {
	email?: string;
}

const validate = (values: validateValues) => {
	const errors: validateErrors = {};

	const defaultMin = 2;
	const defaultMax = 32;

	if (!values.email) {
		errors.email = "Поле не может быть пустым";
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Неверная электронная почта";
	} else if (values.email.length > defaultMax) {
		errors.email = `Не более ${defaultMax} символов`;
	} else if (values.email.length < defaultMin) {
		errors.email = `Не менее ${defaultMin} символов`;
	}

	return errors;
};

export default validate;
