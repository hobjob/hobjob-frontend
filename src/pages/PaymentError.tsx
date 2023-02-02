import React from "react";
import {Link} from "react-router-dom";

import Logo from "../assets/images/logo.svg";

const PaymentError: React.FC = () => {
    return (
        <section className="reglog-payment-error">
            <div className="container">
                <div className="reglog-payment-error-wrapper">
                    <div className="reglog-payment-error-text">
                        <Link to="/" className="reglog-payment-error-text-logo">
                            <img
                                src={Logo}
                                alt="HobJob"
                                className="reglog-payment-error-text-logo__img"
                            />
                        </Link>

                        <h2 className="title reglog-payment-error-text__title">
                            Ошибка платежа
                        </h2>
                        <p className="description reglog-payment-error-text__description">
                            Мы уже оформили возврат средств. Произошла
                            техническая ошибка.
                        </p>
                        <Link to="/" className="btn reglog-payment-error-text__btn">
                            Перейти на главную страницу
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentError;
