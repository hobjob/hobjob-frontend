import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchPaymentCourseById} from "../redux/actions/payment/paymentCourse";
import {fetchCourseById} from "../redux/actions/courses";

import {
    ReglogProgressbar,
    ReglogBuyBlock,
    Loader,
} from "../components/";

interface PaymentSubscribe {}

const PaymentSubscribe: React.FC = () => {
    const dispatch = useDispatch();
    const {number} = useParams();

    const {payment, isLoaded} = useTypedSelector(
        ({paymentCourse}) => paymentCourse
    );
    const {courseById} = useTypedSelector(({courses}) => courses);

    React.useEffect(() => {
        dispatch(fetchPaymentCourseById(number ? number : ""));
    }, []);

    React.useEffect(() => {
        if (isLoaded) {
            dispatch(fetchCourseById(payment.courseId));

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
                        <title>Купить курс «{courseById.title}» - HobJob</title>
                    </Helmet>
                    <section className="reglog">
                        <div className="container">
                            <div className="reglog-wrapper space-between">
                                <div className="reglog-form-wrapper">
                                    <ReglogProgressbar number={1} />

                                    <div
                                        className="reglog-form-payment"
                                        id="reglog-form-payment"
                                    ></div>
                                </div>
                                <div className="reglog-product-wrapper">
                                    <ReglogBuyBlock />
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
