import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {sendRepeatEmail} from "../redux/actions/repeat_email";

import {RepeatEmailForm} from "../components/";

import Logo from "../assets/images/logo.svg";

const RepeatEmail = () => {
    const dispatch = useDispatch();

    const onSubmit = ({email}) => {
        return dispatch(sendRepeatEmail({email}));
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Подтвердить email - HobJob</title>
            </Helmet>
            {localStorage.getItem("accessToken") ? (
                <section className="reglog">
                    <div className="container">
                        <div className="reglog-wrapper">
                            <div className="reglog-logo">
                                <img
                                    src={Logo}
                                    alt="HobJob"
                                    className="reglog-logo__img"
                                />
                            </div>

                            <RepeatEmailForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </section>
            ) : (
                (window.location.href = "/")
            )}
        </>
    );
};

export default RepeatEmail;
