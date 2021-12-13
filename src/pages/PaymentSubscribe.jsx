import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchPaymentSubscribeById} from "../redux/actions/payment";

import {
    PaymentProgressbar,
    PaymentSubscribeBlock,
    Loader,
} from "../components/";

import {subscriptions} from "../subscriptions";

const PaymentProSubscribe = ({
    match: {
        params: {number},
    },
}) => {
    const dispatch = useDispatch();

    const {payment, isLoaded} = useSelector(({payment}) => payment);

    React.useEffect(() => {
        dispatch(fetchPaymentSubscribeById(number));
    }, []);

    React.useEffect(() => {
        if (isLoaded) {
            if (payment.confirmation) {
                const checkout = new window.YooMoneyCheckoutWidget({
                    confirmation_token: payment.confirmation.confirmation_token,
                    return_url: `${process.env.REACT_APP_DOMEN}/payment/status/${payment.paymentNumber}`,

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
                        <title>Оформление подписки - HobJob</title>
                    </Helmet>
                    <section className="payment">
                        <div className="container">
                            <div className="payment-wrapper">
                                <div className="payment-form-wrapper">
                                    <PaymentProgressbar number={2} />
                                    <div
                                        className="payment-form"
                                        id="payment-form"
                                    ></div>
                                </div>

                                <div className="payment-info">
                                    <h2 className="payment-info__title">
                                        Ваша подписка
                                    </h2>
                                    <div className="payment-info-block-wrapper">
                                        {payment.typeSubscribe ===
                                        "test-subscribe" ? (
                                            <PaymentSubscribeBlock
                                                {...subscriptions[0]}
                                            />
                                        ) : payment.typeSubscribe ===
                                          "month-subscribe" ? (
                                            <PaymentSubscribeBlock
                                                {...subscriptions[1]}
                                            />
                                        ) : payment.typeSubscribe ===
                                          "year-subscribe" ? (
                                            <PaymentSubscribeBlock
                                                {...subscriptions[2]}
                                            />
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default PaymentProSubscribe;
