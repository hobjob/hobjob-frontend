interface validateEmailValues {
    email: string;
}

interface validateEmailErrors {
    email?: string;
}

export const validateEmail = (values: validateEmailValues) => {
    const errors: validateEmailErrors = {};

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
