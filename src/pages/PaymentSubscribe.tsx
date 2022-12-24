import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchPaymentSubscribeById} from "../redux/actions/payment";

import {
    // PaymentProgressbar,
    // PaymentSubscribeRegisterBlock,
    Loader,
} from "../components/";

interface PaymentSubscribe {}

const PaymentSubscribe: React.FC = () => {
    const dispatch = useDispatch();
    const {number} = useParams();

    const {payment, isLoaded} = useTypedSelector(({payment}) => payment);

    React.useEffect(() => {
        dispatch(fetchPaymentSubscribeById(number ? number : ""));
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
                    error_callback: (error: any) => {
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
                                    {/* <PaymentProgressbar number={1} /> */}

                                    {payment.typeSubscribe ===
                                    "test-subscribe" ? (
                                        <p className="payment-form__description">
                                            Мы спишем 1₽ и вернём его обратно,
                                            чтобы подтвердить, что вы настоящий
                                            человек
                                        </p>
                                    ) : null}

                                    <div
                                        className="payment-form"
                                        id="payment-form"
                                    ></div>
                                </div>

                                <div className="payment-subscribe-block-wrapper">
                                    {/* <PaymentSubscribeRegisterBlock
                                        isYearSubscribe={
                                            payment.nextTypeSubscribe ===
                                            "year-subscribe"
                                                ? true
                                                : false
                                        }
                                        isPrologation={
                                            payment.nextTypeSubscribe === ""
                                                ? true
                                                : false
                                        }
                                        typeSubscribe={payment.typeSubscribe}
                                    /> */}
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
