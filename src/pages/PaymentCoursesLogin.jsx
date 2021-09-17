import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchCoursesArrayById} from "../redux/actions/courses";
import {sendLogin} from "../redux/actions/login";
import {sendCreateCoursesPayment} from "../redux/actions/payment";

import {
    PaymentProgressbar,
    PaymentCourseBlock,
    LoginForm,
} from "../components/";

const PaymentCoursesLogin = () => {
    const dispatch = useDispatch();

    const {itemsArrayById, isLoadedCoursesArrayById} = useSelector(
        ({courses}) => courses
    );
    const {cart} = useSelector(({cart}) => cart);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (Object.keys(cart).length) {
            dispatch(fetchCoursesArrayById(cart));
        } else {
            window.location.href = "/";
        }
    }, []);

    const onSubmit = ({email, password}) => {
        const functionSuccess = (user) => {
            const order = [];
            Object.keys(cart).map((key) => order.push(cart[key]._id));

            dispatch(
                sendCreateCoursesPayment(
                    {
                        order,
                    },
                    user
                )
            );
        };

        return dispatch(sendLogin({email, password}, functionSuccess));
    };

    return (
        <>
            {!localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Покупка (курсы) - HobJob</title>
                    </Helmet>
                    <section className="payment">
                        <div className="container">
                            <div className="payment-wrapper">
                                <div className="payment-login-wrapper">
                                    <PaymentProgressbar number={1} />

                                    <LoginForm
                                        onSubmit={onSubmit}
                                        registerLink="/payment/courses/register"
                                    />

                                    <div className="reglog-bottom">
                                        <Link
                                            to="/go/password-recovery"
                                            className="reglog-bottom__link"
                                        >
                                            Забыли пароль?
                                        </Link>
                                    </div>
                                </div>

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
            ) : (
                (window.location.href = "/")
            )}
        </>
    );
};

export default PaymentCoursesLogin;
