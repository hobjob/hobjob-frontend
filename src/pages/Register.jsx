import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {RegisterForm} from "../components/";

import {sendRegister} from "../redux/actions/register";

const Register = () => {
    const dispatch = useDispatch();

    const onSubmit = ({name, email, password}) => {
		const functionSuccess = () => {
            window.location.href = "/go/training/";
		};
		
        return dispatch(sendRegister({name, email, password}, functionSuccess));
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
                                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/logo.svg`}
                                    alt="HobJob"
                                    className="reglog-logo__img"
                                />
                            </a>

                            <RegisterForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </section>
            ) : (
                (window.location.href = "/")
            )}
        </>
    );
};

export default Register;
