import React from "react";
import {Link} from "react-router-dom";

const PasswordRecoveryNewPasswordError = () => {
    return (
        <div className="reglog-block">
            <h2 className="reglog-block__title">Ссылка устарела</h2>
            <p className="reglog-block__description">
                Ваша ссылка на восстановление пароля устарела.{" "}
                <Link to="/go/password-recovery">Отправить еще раз</Link>
            </p>
        </div>
    );
};

export default PasswordRecoveryNewPasswordError;
