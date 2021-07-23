import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {sendPasswordRecoveryNewPassword} from "../redux/actions/password_recovery";

import {
    PasswordRecoveryNewPasswordForm,
    PasswordRecoveryNewPasswordError,
} from "../components/";

const PasswordRecoveryNewPassword = ({
    match: {
        params: {hash},
    },
}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {newPasswordStatus} = useSelector(
        ({password_recovery}) => password_recovery
    );

    const onSubmit = ({password, password_repeat}) => {
        return dispatch(
            sendPasswordRecoveryNewPassword({password, password_repeat}, hash)
        );
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {!localStorage.getItem("accessToken") ? (
                <section className="reglog">
                    <div className="container">
                        <div className="reglog-wrapper">
                            <a href="/" className="reglog-logo">
                                <img
                                    src={`${process.env.REACT_APP_DOMEN}/all/logo.svg`}
                                    alt="HobJob"
                                    className="reglog-logo__img"
                                />
                            </a>

                            {newPasswordStatus === "error" ? (
                                <PasswordRecoveryNewPasswordError />
                            ) : (
                                <PasswordRecoveryNewPasswordForm
                                    onSubmit={onSubmit}
                                />
                            )}
                        </div>
                    </div>
                </section>
            ) : (
                history.push("/")
            )}
        </>
    );
};

export default PasswordRecoveryNewPassword;
