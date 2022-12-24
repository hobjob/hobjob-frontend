import React from "react";
import {useDispatch} from "react-redux";
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom'

import {useTypedSelector} from "../hooks/useTypedSelector";

import {sendPasswordRecoveryEmail} from "../redux/actions/password_recovery";

import {
    PasswordRecoveryEmailForm,
    PasswordRecoveryEmailSuccess,
} from "../components/";

import Logo from "../assets/images/logo.svg";

const PasswordRecoveryEmail: React.FC = () => {
    const dispatch = useDispatch();

    const {emailStatus} = useTypedSelector(
        ({password_recovery}) => password_recovery
    );

    const onSubmit = ({email}: any) => {
        return dispatch(sendPasswordRecoveryEmail({email}));
    };

    return (
        <>
            <Helmet>
                <title>Восстановить пароль - HobJob</title>
            </Helmet>
            {!localStorage.getItem("accessToken") ? (
                <section className="reglog">
                    <div className="container">
                        <div className="reglog-wrapper center">
                            <Link to="/" className="reglog-logo">
                                <img
                                    src={Logo}
                                    alt="HobJob"
                                    className="reglog-logo__img"
                                />
                            </Link>

                            <div className="reglog-form-wrapper">
                                {emailStatus === "success" ? (
                                    <PasswordRecoveryEmailSuccess />
                                ) : (
                                    <PasswordRecoveryEmailForm
                                        onSubmit={onSubmit}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                (window.location.href = "/")
            )}
        </>
    );
};

export default PasswordRecoveryEmail;
