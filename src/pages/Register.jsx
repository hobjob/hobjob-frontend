import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import queryString from "query-string";

import {RegisterForm} from "../components/";

import {sendRegister} from "../redux/actions/register";

const Register = ({location: {search}}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = ({name, email, password}) => {
        return dispatch(sendRegister({name, email, password}, queryString.parse(search)));
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Зарегистрируйтесь - HobJob</title>
            </Helmet>
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

                            <RegisterForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </section>
            ) : (
                history.push("/")
            )}
        </>
    );
};

export default Register;
