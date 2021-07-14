import React from "react";
import {useDispatch} from "react-redux";

import {LoginForm} from "../components/";

import { sendLogin } from "../redux/actions/login";

const Login = () => {
    const dispatch = useDispatch();

    const onSubmit = ({email, password}) => {
        dispatch(sendLogin({email, password}));
    };

    return (
        <section className="reglog">
            <div className="container">
                <div className="reglog-wrapper">
                    <LoginForm onSubmit={onSubmit} />

                    <div className="reglog-bottom">
                        <a href="#" className="reglog-bottom__link">
                            Забыли пароль?
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
