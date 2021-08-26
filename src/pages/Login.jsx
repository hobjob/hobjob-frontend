import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {LoginForm} from "../components/";

import {sendLogin} from "../redux/actions/login";

const Login = () => {
    const dispatch = useDispatch();

    const onSubmit = ({email, password}) => {
        return dispatch(sendLogin({email, password}));
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Войти - HobJob</title>
            </Helmet>
            {!localStorage.getItem("accessToken") ? (
                <section className="reglog">
                    <div className="container">
                        <div className="reglog-wrapper">
                            <a href="/" className="reglog-logo">
                                <img
                                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/logo.svg`}
                                    alt="HobJob"
                                    className="reglog-logo__img"
                                />
                            </a>

                            <LoginForm onSubmit={onSubmit} />

                            <div className="reglog-bottom">
                                <Link
                                    to="/go/password-recovery"
                                    className="reglog-bottom__link"
                                >
                                    Забыли пароль?
                                </Link>
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

export default Login;
