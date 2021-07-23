import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import {RegisterForm} from "../components/";

import {sendRegister} from "../redux/actions/register";

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = ({name, email, password}) => {
        return dispatch(sendRegister({name, email, password}));
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
