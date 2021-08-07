import React from "react";
import {useDispatch} from "react-redux";

import {sendConfirmationPayment} from "../redux/actions/payment";

import {Loader} from "../components/";

const PaymentConfirmation = ({
    match: {
        params: {number},
    },
}) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(sendConfirmationPayment(number));
    }, []);

    return (
        <div className="loader-wrapper">
            <Loader />
        </div>
    );
};

export default PaymentConfirmation;
