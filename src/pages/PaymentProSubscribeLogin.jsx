import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {sendLogin} from "../redux/actions/login";
import {sendCreateProSubscribePayment} from "../redux/actions/payment";

import {PaymentProgressbar, LoginForm} from "../components/";

const PaymentProSubscribeLogin = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = ({email, password}) => {
        const functionSuccess = (user) => {
            dispatch(sendCreateProSubscribePayment(user));
        };

        return dispatch(sendLogin({email, password}, functionSuccess));
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

                                    <LoginForm
                                        onSubmit={onSubmit}
                                        registerLink="/payment/pro/register"
                                    />

                                    <div className="reglog-bottom">
                                        <Link
                                            to="/go/password-recovery"
                                            className="reglog-bottom__link"
                                        >
                                            Забыли пароль?
                                        </Link>
                                    </div>
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

export default PaymentProSubscribeLogin;
