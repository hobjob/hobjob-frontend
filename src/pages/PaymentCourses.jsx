import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchPaymentCoursesById} from "../redux/actions/payment";
import {fetchCoursesArrayById} from "../redux/actions/courses";

import {PaymentCourseBlock} from "../components/";

const PaymentCourses = ({
    match: {
        params: {number},
    },
}) => {
    const dispatch = useDispatch();

    const {itemsArrayById, isLoadedCoursesArrayById} = useSelector(
        ({courses}) => courses
    );
    const {payment, isLoaded} = useSelector(({payment}) => payment);

    React.useEffect(() => {
        dispatch(fetchPaymentCoursesById(number));
    }, []);

    React.useEffect(() => {
        if (isLoaded) {
            const newObj = {};

            payment.order.map((id) => {
                newObj[id] = {_id: id};
            });

            dispatch(fetchCoursesArrayById(newObj));
        }
    }, [isLoaded]);

    React.useEffect(() => {
        if (isLoaded) {
            if (payment.confirmation) {
                const checkout = new window.YooMoneyCheckoutWidget({
                    confirmation_token: payment.confirmation.confirmation_token,
                    return_url: `${process.env.REACT_APP_DOMEN}/payment/courses/confirmation/${payment.paymentNumber}`,

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
                        <title>Покупка (курсы) - HobJob</title>
                    </Helmet>
                    <section className="payment">
                        <div className="container">
                            <div className="payment-wrapper">
                                <div
                                    className="payment-form"
                                    id="payment-form"
                                ></div>
                                {isLoadedCoursesArrayById ? (
                                    <div className="payment-info">
                                        <h2 className="payment-info__title">
                                            Заказ
                                            <span>
                                                (
                                                {
                                                    Object.keys(itemsArrayById)
                                                        .length
                                                }
                                                )
                                            </span>
                                        </h2>
                                        <div className="payment-info-course-wrapper">
                                            {Object.keys(itemsArrayById).map(
                                                (key, index) => (
                                                    <PaymentCourseBlock
                                                        {...itemsArrayById[key]}
                                                        key={`payment-info-course-${index}`}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </section>
                </>
            ) : null}
        </>
    );
};

export default PaymentCourses;
