import React from "react";
<<<<<<< HEAD
import {Link, Navigate} from "react-router-dom";
=======
import {Link} from "react-router-dom";
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
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
                                <LoginForm onSubmit={onSubmit} />
                            </div>

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
<<<<<<< HEAD
                <Navigate to="/" />
=======
                (window.location.href = "/")
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
            )}
        </>
    );
};

export default Login;
