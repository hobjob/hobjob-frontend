import React from "react";
import {Link, Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {LoginForm} from "../components/";

import {sendLogin} from "../redux/actions/login";

import Logo from "../assets/images/logo.svg";

const Login: React.FC = () => {
    const dispatch = useDispatch();

    const onSubmit = ({email, password}: any) => {
        return dispatch(sendLogin({email, password}));
    };

    return (
        <>
            <Helmet>
                <title>Войти - HobJob</title>
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
                                <LoginForm onSubmit={onSubmit} />
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

export default Login;
