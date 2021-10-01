import React from "react";
import {Link} from "react-router-dom";

import Logo from "../assets/images/logo.svg";

const PaymentError = () => {
    return (
        <section className="payment-error">
            <div className="container">
                <div className="payment-error-wrapper">
                    <div className="payment-error-text">
                        <a href="/" className="payment-error-text-logo">
                            <img
                                src={Logo}
                                alt="HobJob"
                                className="payment-error-text-logo__img"
                            />
                        </a>

                        <h2 className="title payment-error-text__title">
                            Ошибка платежа
                        </h2>
                        <p className="description payment-error-text__description">
                            Мы уже оформили возврат средств. Произошла техническая ошибка.
                        </p>
                        <Link
                            to="/"
                            className="btn-arrow payment-error-text__btn"
                        >
                            Перейти на главную страницу
                            <svg
                                width="31"
                                height="12"
                                viewBox="0 0 31 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989592 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z"
                                    fill="#D89350"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentError;
