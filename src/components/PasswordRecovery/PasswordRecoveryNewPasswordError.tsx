import React from "react";
import {Link} from "react-router-dom";

const PasswordRecoveryNewPasswordError: React.FC = () => {
    return (
        <div className="reglog-form">
            <h2 className="reglog-form__title">Ссылка устарела</h2>
            <p className="reglog-form__description">
                Ваша ссылка на восстановление пароля устарела.{" "}
                <Link to="/go/password-recovery">Отправить еще раз</Link>
            </p>
        </div>
    );
};

export default PasswordRecoveryNewPasswordError;
