import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
<<<<<<< HEAD
import {useParams, Navigate, Link} from "react-router-dom";
=======
import {useParams} from "react-router-dom";
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8

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

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Восстановить пароль - HobJob</title>
            </Helmet>
            {!localStorage.getItem("accessToken") ? (
                <section className="reglog">
                    <div className="container">
                        <div className="reglog-wrapper">
<<<<<<< HEAD
                            <Link to="/" className="reglog-logo">
=======
                            <a href="/" className="reglog-logo">
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
                                <img
                                    src={Logo}
                                    alt="HobJob"
                                    className="reglog-logo__img"
                                />
<<<<<<< HEAD
                            </Link>
=======
                            </a>
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8

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
<<<<<<< HEAD
                <Navigate to="/" />
=======
                (window.location.href = "/")
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
            )}
        </>
    );
};

export default PasswordRecoveryNewPassword;
