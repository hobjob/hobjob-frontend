import React from "react";
import {Link} from "react-router-dom";

import Logo from "../assets/images/logo.svg";

const PaymentError: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
	}, []);
	
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
                            Мы уже оформили возврат средств. Произошла
                            техническая ошибка.
                        </p>
                        <Link to="/" className="btn payment-error-text__btn">
                            Перейти на главную страницу
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentError;
