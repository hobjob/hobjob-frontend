import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {sendRegister} from "../redux/actions/register";
import {sendCreateProSubscribePayment} from "../redux/actions/payment";

import {PaymentProgressbar, RegisterForm} from "../components/";

const PaymentProSubscribeRegister = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = ({name, email, password}) => {
        const functionSuccess = () => {
            dispatch(sendCreateProSubscribePayment());
        };

        return dispatch(sendRegister({name, email, password}, functionSuccess));
    };

    return (
        <>
            {!localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Оформление Pro подписки (1 год) - HobJob</title>
                    </Helmet>
                    <section className="payment">
                        <div className="container">
                            <div className="payment-wrapper">
                                <div className="payment-login-wrapper">
                                    <PaymentProgressbar number={1} />

                                    <RegisterForm
                                        onSubmit={onSubmit}
                                        loginLink="/payment/pro/login"
                                    />
                                </div>
                                <div className="payment-info">
                                    <h2 className="payment-info__title">
                                        Оформление Pro подписки{" "}
                                        <span>(1 год)</span>
                                    </h2>
                                    <ul className="payment-info-list">
                                        <li className="payment-info-list__item">
                                            - Скидка 20% на все курсы
                                        </li>
                                        <li className="payment-info-list__item">
                                            - Получение сертификата
                                        </li>
                                        <li className="payment-info-list__item">
                                            - Дополнительные материалы
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                (window.location.href = "/")
            )}
        </>
    );
};

export default PaymentProSubscribeRegister;
