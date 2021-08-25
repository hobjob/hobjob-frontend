import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchPaymentProSubscribeById} from "../redux/actions/payment";

const PaymentProSubscribe = ({
    match: {
        params: {number},
    },
}) => {
    const dispatch = useDispatch();

    const {payment, isLoaded} = useSelector(({payment}) => payment);

    React.useEffect(() => {
        dispatch(fetchPaymentProSubscribeById(number));
    }, []);

    React.useEffect(() => {
        if (isLoaded) {
            if (payment.confirmation) {
                const checkout = new window.YooMoneyCheckoutWidget({
                    confirmation_token: payment.confirmation.confirmation_token,
                    return_url: `http://localhost:3000/payment/pro/confirmation/${payment.paymentNumber}`,

                    customization: {
                        colors: {
                            controlPrimary: "#DD9E5E",
                            background: "#F9F9F9",
                        },
                    },
                    error_callback: function (error) {
                        console.log(error);
                    },
                });

                checkout.render("payment-form");
            } else {
                window.location.href = "/";
            }
        }
    }, [isLoaded]);

    return (
        <>
            {isLoaded ? (
                <>
                    <Helmet>
                        <title>Оформление Pro подписки (1 год) - HobJob</title>
                    </Helmet>
                    <section className="payment">
                        <div className="container">
                            <div className="payment-wrapper">
                                <div
                                    className="payment-form"
                                    id="payment-form"
                                ></div>
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
            ) : null}
        </>
    );
};

export default PaymentProSubscribe;
