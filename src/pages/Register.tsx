import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {Navigate} from "react-router-dom";

import {sendRegister} from "../redux/actions/register";

import {
    PaymentProgressbar,
    PaymentSubscribeRegisterBlock,
    RegisterForm,
} from "../components/";

const Register: React.FC = () => {
    const dispatch = useDispatch();

    const [isYearSubscribe, setIsYearSubscribe] = React.useState(false);

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
                localStorage.getItem("ref")
                    ? JSON.parse(localStorage.getItem("ref") as string)
                    : ""
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
                <Navigate to="/" />
            )}
        </>
    );
};

export default Register;
