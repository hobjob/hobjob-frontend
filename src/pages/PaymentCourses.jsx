import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchPaymentCoursesById} from "../redux/actions/payment";

import {PaymentCourseBlock} from "../components/";

const PaymentCourses = ({
    match: {
        params: {number},
    },
}) => {
    const dispatch = useDispatch();

    const {cart} = useSelector(({cart}) => cart);
    const {payment, isLoaded} = useSelector(({payment}) => payment);

    React.useEffect(() => {
        dispatch(fetchPaymentCoursesById(number));
    }, []);

    React.useEffect(() => {
        if (isLoaded) {
            if (payment.confirmation) {
                const checkout = new window.YooMoneyCheckoutWidget({
                    confirmation_token: payment.confirmation.confirmation_token,
                    return_url: `http://localhost:3000/payment/courses/confirmation/${payment.paymentNumber}`,

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
                            Покупка (курсы) - HobJob
                        </title>
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
                                        Заказ
                                        <span>
                                            ({Object.keys(cart).length})
                                        </span>
                                    </h2>
                                    <div className="payment-info-course-wrapper">
                                        {Object.keys(cart).map((key, index) => (
                                            <PaymentCourseBlock
                                                {...cart[key]}
                                                key={`payment-info-course-${index}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : null}
        </>
    );
};

export default PaymentCourses;
