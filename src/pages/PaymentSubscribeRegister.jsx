import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {sendRegister} from "../redux/actions/register";

import {
    PaymentProgressbar,
    PaymentSubscribeBlock,
    RegisterForm,
} from "../components/";

import {subscriptions} from "../subscriptions";

const PaymentSubscribeRegister = () => {
    const dispatch = useDispatch();

    const [stateSubscribe, setStateSubscribe] = React.useState({
        index: 0,
        type: "test-subscribe",
    });

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = ({email, name, password}) => {
        return dispatch(
            sendRegister(
                {email, name, password, typeSubscribe: stateSubscribe.type},
                localStorage.getItem("ref")
            )
        );
    };

    const handlerTypeSubscribe = (index, type) => {
        setStateSubscribe({index, type});
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
                                <div className="payment-info">
                                    <h2 className="payment-info__title">
                                        Выберите вашу подписку:
                                    </h2>
                                    <div className="payment-info-block-wrapper">
                                        {subscriptions.map((item, index) => (
                                            <PaymentSubscribeBlock
                                                {...item}
                                                handlerTypeSubscribe={
                                                    handlerTypeSubscribe
                                                }
                                                active={
                                                    stateSubscribe.index ===
                                                    index
                                                        ? true
                                                        : false
                                                }
                                                index={index}
                                                change={true}
                                                key={`payment-info-block-${index}`}
                                            />
                                        ))}
                                    </div>
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

export default PaymentSubscribeRegister;
