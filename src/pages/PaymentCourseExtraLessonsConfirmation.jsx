import React from "react";
import {useDispatch} from "react-redux";

import {sendConfirmationCourseExtraLessonsPayment} from "../redux/actions/payment";

import {Loader} from "../components/";

const PaymentCourseExtraLessonsConfirmation = ({
    match: {
        params: {number},
    },
}) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(sendConfirmationCourseExtraLessonsPayment(number));
    }, []);

    return (
        <div className="loader-wrapper">
            <Loader />
        </div>
    );
};

export default PaymentCourseExtraLessonsConfirmation;
