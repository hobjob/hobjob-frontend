import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {sendPasswordRecoveryEmail} from "../redux/actions/password_recovery";

import {
    PasswordRecoveryEmailForm,
    PasswordRecoveryEmailSuccess,
} from "../components/";

const PasswordRecoveryEmail = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {emailStatus} = useSelector(
        ({password_recovery}) => password_recovery
    );

    const onSubmit = ({email}) => {
        return dispatch(sendPasswordRecoveryEmail({email}));
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
                            {emailStatus === "success" ? (
                                <PasswordRecoveryEmailSuccess />
                            ) : (
                                <PasswordRecoveryEmailForm
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

export default PasswordRecoveryEmail;
