import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {useParams, Navigate, Link} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {sendPasswordRecoveryNewPassword} from "../redux/actions/password_recovery";

import {
    PasswordRecoveryNewPasswordForm,
    PasswordRecoveryNewPasswordError,
} from "../components/";

import Logo from "../assets/images/logo.svg";

const PasswordRecoveryNewPassword: React.FC = () => {
    const dispatch = useDispatch();
    const {hash} = useParams();

    const {newPasswordStatus} = useTypedSelector(
        ({password_recovery}) => password_recovery
    );

    const onSubmit = ({password, password_repeat}: any) => {
        return dispatch(
            sendPasswordRecoveryNewPassword(
                {password, password_repeat},
                hash ? hash : ""
            )
        );
    };

    return (
        <>
            <Helmet>
                <title>Восстановить пароль - HobJob</title>
            </Helmet>
            {!localStorage.getItem("accessToken") ? (
                <section className="reglog">
                    <div className="container">
                        <div className="reglog-wrapper">
                            <Link to="/" className="reglog-logo">
                                <img
                                    src={Logo}
                                    alt="HobJob"
                                    className="reglog-logo__img"
                                />
                            </Link>

                            <div className="reglog-block-wrapper">
                                {newPasswordStatus === "error" ? (
                                    <PasswordRecoveryNewPasswordError />
                                ) : (
                                    <PasswordRecoveryNewPasswordForm
                                        onSubmit={onSubmit}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};

export default PasswordRecoveryNewPassword;
