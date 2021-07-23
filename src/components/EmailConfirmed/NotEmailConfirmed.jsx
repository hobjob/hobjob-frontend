import React from "react";

const NotEmailConfirmed = () => {
    return (
        <div className="email-confirmed">
            <div className="container">
                <div className="email-confirmed-wrapper">
                    <div className="email-confirmed-text">
                        <h2 className="title email-confirmed-text__title">
                            Подтвердите ваш email
                        </h2>
                        <p className="description email-confirmed-text__description">
                            На ваш email было отправлено письмо с ссылкой на
                            подтверждение аккаунта. Если письмо не пришло
                            проверьте папку "спам".{" "}
                            <a href="/repeat-email">Отправить еще раз</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotEmailConfirmed;
