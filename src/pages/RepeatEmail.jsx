import React from "react";
import {useDispatch} from "react-redux";

import {sendRepeatEmail} from "../redux/actions/repeat_email";

import {RepeatEmailForm} from "../components/";

const RepeatEmail = () => {
    const dispatch = useDispatch();

    const onSubmit = ({email}) => {
        return dispatch(sendRepeatEmail({email}));
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="reglog">
            <div className="container">
                <div className="reglog-wrapper">
                    <div className="reglog-logo">
                        <img
                            src={`${process.env.REACT_APP_DOMEN}/all/logo.svg`}
                            alt="HobJob"
                            className="reglog-logo__img"
                        />
                    </div>

                    <RepeatEmailForm onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    );
};

export default RepeatEmail;
