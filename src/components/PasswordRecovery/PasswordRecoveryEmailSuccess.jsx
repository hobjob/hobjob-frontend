import React from "react";
import {Link} from "react-router-dom";

const PasswordRecoveryEmailSuccess = () => {
    return (
        <div className="reglog-block">
            <h2 className="reglog-block__title">Письмо отправлено</h2>
            <p className="reglog-block__description">
                На ваш email было отправлено письмо с ссылкой на изменения
                пароля. Если письмо не пришло проверьте папку «спам‎».{" "}
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
