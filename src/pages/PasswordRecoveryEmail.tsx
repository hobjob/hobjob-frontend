import React from "react";
import {useDispatch} from "react-redux";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom'
=======
import {Helmet} from "react-helmet";
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8

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
