import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {RegisterForm} from "../components/";

import {sendRegister} from "../redux/actions/register";

const Register = () => {
    const dispatch = useDispatch();

    const onSubmit = ({name, email, password}) => {
        dispatch(sendRegister({name, email, password}));
    };

	return (
        <>
            <Helmet>
                <title>Регистрация аккаунта - HobJob</title>
            </Helmet>
            <section className="reglog">
                <div className="container">
                    <div className="reglog-wrapper">
                        <RegisterForm onSubmit={onSubmit} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
