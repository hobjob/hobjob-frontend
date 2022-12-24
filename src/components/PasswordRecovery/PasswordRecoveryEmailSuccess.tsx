import React from "react";
import {Link} from "react-router-dom";

const PasswordRecoveryEmailSuccess: React.FC = () => {
    return (
        <div className="reglog-form">
            <h2 className="reglog-form__title">Письмо отправлено</h2>
            <p className="reglog-form__description">
                На ваш email было отправлено письмо с ссылкой на изменения
                пароля. Если письмо не пришло проверьте папку «спам».{" "}
                <Link
                    to="/go/password-recovery"
                    onClick={() => window.location.reload()}
                >
                    Отправить еще раз
                </Link>
            </p>
        </div>
    );
};

export default PasswordRecoveryEmailSuccess;
