import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {sendRegister} from "../redux/actions/register";

import {
    PaymentProgressbar,
    PaymentSubscribeRegisterBlock,
    RegisterForm,
} from "../components/";

const Register = () => {
    const dispatch = useDispatch();

    const [isYearSubscribe, setIsYearSubscribe] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = ({email, name, password}) => {
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
                (window.location.href = "/")
            )}
        </>
    );
};

export default Register;
