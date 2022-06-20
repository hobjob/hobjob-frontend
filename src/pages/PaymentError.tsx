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
<<<<<<< HEAD
                        <Link to="/" className="payment-error-text-logo">
=======
                        <a href="/" className="payment-error-text-logo">
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
                            <img
                                src={Logo}
                                alt="HobJob"
                                className="payment-error-text-logo__img"
                            />
<<<<<<< HEAD
                        </Link>
=======
                        </a>
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8

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
