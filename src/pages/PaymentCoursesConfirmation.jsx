import React from "react";
import {useDispatch} from "react-redux";

import {sendConfirmationCoursesPayment} from "../redux/actions/payment";

import {Loader} from "../components/";

const PaymentCoursesConfirmation = ({
    match: {
        params: {number},
    },
}) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(sendConfirmationCoursesPayment(number));
    }, []);

    return (
        <div className="loader-wrapper">
            <Loader />
        </div>
    );
};

export default PaymentCoursesConfirmation;
