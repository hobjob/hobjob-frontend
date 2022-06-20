import React from "react";
import {useDispatch} from "react-redux";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";
=======
import {Helmet} from "react-helmet";
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8

import {sendRegister} from "../redux/actions/register";

import {
    PaymentProgressbar,
    PaymentSubscribeRegisterBlock,
    RegisterForm,
} from "../components/";

const Register: React.FC = () => {
    const dispatch = useDispatch();

    const [isYearSubscribe, setIsYearSubscribe] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = ({email, name, password}: any) => {
        return dispatch(
            sendRegister(
                {
                    email,
                    name,
                    password,
                    nextTypeSubscribe: isYearSubscribe
                        ? "year-subscribe"
                        : "month-subscribe",
                },
                JSON.parse(localStorage.getItem("ref") || "")
            )
        );
    };

    const setYearSubscribe = () => {
        setIsYearSubscribe(!isYearSubscribe);
    };

    return (
        <>
            {!localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Регистрация - HobJob</title>
                    </Helmet>
                    <section className="payment">
                        <div className="container">
                            <div className="payment-wrapper">
                                <div className="payment-login-wrapper">
                                    <PaymentProgressbar number={1} />

                                    <RegisterForm
                                        onSubmit={onSubmit}
                                        loginLink="/go/login"
                                    />
                                </div>

                                <div className="payment-subscribe-block-wrapper">
                                    <PaymentSubscribeRegisterBlock
                                        setYearSubscribe={setYearSubscribe}
                                        isYearSubscribe={isYearSubscribe}
                                        isCheckbox={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
<<<<<<< HEAD
                <Navigate to="/" />
=======
                (window.location.href = "/")
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
            )}
        </>
    );
};

export default Register;
