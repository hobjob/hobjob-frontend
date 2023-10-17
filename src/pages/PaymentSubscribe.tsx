import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchPaymentSubscribeById} from "../redux/actions/payment/paymentSubscribe";

import {ReglogProgressbar, ReglogSubscribeBlock, Loader} from "../components/";
import {rates} from "../subscribeRates";

interface PaymentSubscribe {}

const PaymentSubscribe: React.FC = () => {
    const dispatch = useDispatch();
    const {number} = useParams();

    const {payment, isLoaded} = useTypedSelector(
        ({paymentSubscribe}) => paymentSubscribe
    );

    React.useEffect(() => {
        dispatch(fetchPaymentSubscribeById(number ? number : "") as any);
    }, []);

    React.useEffect(() => {
        if (isLoaded) {
            if (payment.confirmation) {
                const checkout = new window.YooMoneyCheckoutWidget({
                    confirmation_token: payment.confirmation.confirmation_token,
                    return_url: `${process.env.REACT_APP_DOMEN}/payment/status/${payment.number}`,

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

                checkout.render("reglog-form-payment");
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

                    <section className="reglog">
                        <div className="container">
                            <div className="reglog-wrapper space-between">
                                <div className="reglog-form-wrapper">
                                    <ReglogProgressbar number={2} />

                                    <div
                                        className="reglog-form-payment"
                                        id="reglog-form-payment"
                                    ></div>
                                </div>

                                <div className="reglog-product-wrapper">
                                    <ReglogSubscribeBlock type={payment.type} />
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
