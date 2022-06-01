export const validatePassword = (values) => {
	const errors = {};

	const defaultMin = 2;
	const defaultMax = 255;

	if (!values.currentPassword) {
		errors.currentPassword = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.currentPassword)) {
		errors.currentPassword = 'Поле не может содержать кириллицу'
	} else if (values.currentPassword.length > defaultMax) {
		errors.currentPassword = `Не более ${defaultMax} символов`;
	} else if (values.currentPassword.length < defaultMin) {
		errors.currentPassword = `Не менее ${defaultMin} символов`;
	}

	if (!values.newPassword) {
		errors.newPassword = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.newPassword)) {
		errors.newPassword = 'Поле не может содержать кириллицу'
	} else if (values.newPassword.length > defaultMax) {
		errors.newPassword = `Не более ${defaultMax} символов`;
	} else if (values.newPassword.length < defaultMin) {
		errors.newPassword = `Не менее ${defaultMin} символов`;
	}

	if (!values.newPasswordRepeat) {
		errors.newPasswordRepeat = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.newPasswordRepeat)) {
		errors.newPasswordRepeat = 'Поле не может содержать кириллицу'
	} else if (values.newPasswordRepeat.length > defaultMax) {
		errors.newPasswordRepeat = `Не более ${defaultMax} символов`;
	} else if (values.newPasswordRepeat.length < defaultMin) {
		errors.newPasswordRepeat = `Не менее ${defaultMin} символов`;
	} else if (values.newPassword !== values.newPasswordRepeat) {
		errors.newPasswordRepeat = `Пароли не равны`;
	}

	return errors;
};