import React from "react";
import {useDispatch} from "react-redux";

import {sendConfirmationProSubscribePayment} from "../redux/actions/payment";

import {Loader} from "../components/";

const PaymentProSubscribeConfirmation = ({
    match: {
        params: {number},
    },
}) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(sendConfirmationProSubscribePayment(number));
    }, []);

    return (
        <div className="loader-wrapper">
            <Loader />
        </div>
    );
};

export default PaymentProSubscribeConfirmation;
