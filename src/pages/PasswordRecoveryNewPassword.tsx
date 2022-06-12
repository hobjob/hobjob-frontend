import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {sendPasswordRecoveryNewPassword} from "../redux/actions/password_recovery";

import {
    PasswordRecoveryNewPasswordForm,
    PasswordRecoveryNewPasswordError,
} from "../components/";

import Logo from "../assets/images/logo.svg";

interface PasswordRecoveryNewPasswordProps {
    match: {
        params: {hash: string};
    };
}

const PasswordRecoveryNewPassword: React.FC<
    PasswordRecoveryNewPasswordProps
> = ({
    match: {
        params: {hash},
    },
}) => {
    const dispatch = useDispatch();

    const {newPasswordStatus} = useTypedSelector(
        ({password_recovery}) => password_recovery
    );

    const onSubmit = ({password, password_repeat}: any) => {
        return dispatch(
            sendPasswordRecoveryNewPassword({password, password_repeat}, hash)
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
                            <a href="/" className="reglog-logo">
                                <img
                                    src={Logo}
                                    alt="HobJob"
                                    className="reglog-logo__img"
                                />
                            </a>

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
                (window.location.href = "/")
            )}
        </>
    );
};

export default PasswordRecoveryNewPassword;
