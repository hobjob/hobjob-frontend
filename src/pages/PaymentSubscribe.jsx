import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchPaymentSubscribeById} from "../redux/actions/payment";

import {
    PaymentProgressbar,
    PaymentSubscribeRegisterBlock,
    Loader,
} from "../components/";

const PaymentSubscribe = ({
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
                                    <PaymentProgressbar number={1} />
									
                                    <div
                                        className="payment-form"
                                        id="payment-form"
                                    ></div>
                                </div>

                                <div className="payment-subscribe-block-wrapper">
                                    <PaymentSubscribeRegisterBlock
                                        isYearSubscribe={
                                            payment.nextTypeSubscribe ===
                                            "year-subscribe"
                                        }
                                        isPrologation={
                                            payment.nextTypeSubscribe === ""
                                        }
                                        typeSubscribe={payment.typeSubscribe}
                                    />
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

export default PaymentSubscribe;
