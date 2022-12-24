import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {Navigate} from "react-router-dom";

import {sendRegister} from "../redux/actions/register";

import {
    ReglogProgressbar,
    RegisterForm,
    ReglogSubscribeBlock,
    ReglogBuyBlock,
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
                    <section className="reglog">
                        <div className="container">
                            <div className="reglog-wrapper space-between">
                                <div className="reglog-form-wrapper">
                                    <ReglogProgressbar number={1} />

                                    <RegisterForm
                                        onSubmit={onSubmit}
                                        loginLink="/go/login"
                                    />
                                </div>
                                <div className="reglog-product-wrapper">
                                    {/* <ReglogSubscribeBlock /> */}
                                    <ReglogBuyBlock />
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
