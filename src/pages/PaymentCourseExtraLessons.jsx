import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchPaymentCourseExtraLessonsById} from "../redux/actions/payment";
import {fetchCourseById} from "../redux/actions/courses";

import {PaymentCourseBlock, PaymentProgressbar, Loader} from "../components/";

const PaymentCourseExtraLessons = ({
    match: {
        params: {number},
    },
}) => {
    const dispatch = useDispatch();

    const {itemById, isLoadedCourseById} = useSelector(({courses}) => courses);
    const {payment, isLoaded} = useSelector(({payment}) => payment);

    React.useEffect(() => {
        dispatch(fetchPaymentCourseExtraLessonsById(number));
    }, []);

    React.useEffect(() => {
        if (isLoaded) {
            dispatch(fetchCourseById(payment.order[0]));

            if (payment.confirmation) {
                const checkout = new window.YooMoneyCheckoutWidget({
                    confirmation_token: payment.confirmation.confirmation_token,
                    return_url: `${process.env.REACT_APP_DOMEN}/payment/courses/extra-lessons/confirmation/${payment.paymentNumber}`,

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
                        <title>
                            Покупка (дополнительные материалы) - HobJob
                        </title>
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
								
                                {isLoadedCourseById ? (
                                    <div className="payment-info">
                                        <h2 className="payment-info__title">
                                            Дополнительные материалы
                                        </h2>
                                        <div className="payment-info-course-wrapper">
                                            <PaymentCourseBlock {...itemById} />
                                        </div>
                                    </div>
                                ) : null}
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

export default PaymentCourseExtraLessons;
