import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchPaymentCourseExtraLessonsById} from "../redux/actions/payment";

const PaymentCourseExtraLessons = ({
    match: {
        params: {number},
    },
}) => {
    const dispatch = useDispatch();

    const {payment, isLoaded} = useSelector(({payment}) => payment);

    React.useEffect(() => {
        dispatch(fetchPaymentCourseExtraLessonsById(number));
    }, []);

    React.useEffect(() => {
        if (isLoaded) {
            if (payment.confirmation) {
                const checkout = new window.YooMoneyCheckoutWidget({
                    confirmation_token: payment.confirmation.confirmation_token,
                    return_url: `http://localhost:3000/payment/courses/extra-lessons/confirmation/${payment.paymentNumber}`,

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
                    <section className="payment">
                        <div className="container">
                            <div className="payment-wrapper">
                                <div
                                    className="payment-form"
                                    id="payment-form"
                                ></div>
                                <div className="payment-info">
                                    <h2 className="payment-info__title"></h2>
                                    <div className="payment-info-course-wrapper"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : null}
        </>
    );
};

export default PaymentCourseExtraLessons;
