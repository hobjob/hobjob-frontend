import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchCourseById} from "../redux/actions/courses";
import {sendLogin} from "../redux/actions/login";
import {assingTestingCourse} from "../redux/actions/testing";

import {
    PaymentCourseBlock,
    TestingProgressbar,
    LoginForm,
} from "../components/";

const TestingLogin = ({
    match: {
        params: {id},
    },
}) => {
    const dispatch = useDispatch();

    const {itemById, isLoadedCourseById} = useSelector(({courses}) => courses);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchCourseById(id));
    }, []);

    const onSubmit = ({email, password}) => {
        const functionSuccess = (user) => {
            dispatch(assingTestingCourse(id, user));
        };

        return dispatch(sendLogin({email, password}, functionSuccess));
    };

    return (
        <>
            {!localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Получить первый урок бесплатно - HobJob</title>
                    </Helmet>
                    <section className="payment">
                        <div className="container">
                            <div className="payment-wrapper">
                                <div className="payment-login-wrapper">
                                    <TestingProgressbar />

                                    <LoginForm
                                        onSubmit={onSubmit}
                                        registerLink={`/testing/${id}/register`}
                                    />
                                </div>

                                {isLoadedCourseById ? (
                                    <div className="payment-info">
                                        <h2 className="payment-info__title">
                                            Получить первый урок бесплатно
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
                (window.location.href = "/")
            )}
        </>
    );
};

export default TestingLogin;
