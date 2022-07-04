import React from "react";

import {Loader} from "../components/";

const PaymentStatus: React.FC= () => {
    React.useEffect(() => {
        // const events = new EventSource(
        //     `${process.env.REACT_APP_API_DOMEN}/payment/status/${number}`
        // );

        // events.onmessage = ({ data }) => {
        //     const {status, type} = JSON.parse(data);

        //     if (status === "succeeded") {
        //         if (
        //             type === "buy-courses" ||
        //             type === "buy-extra-lessons-course"
        //         ) {
        //             window.location.href = "/go/training";
        //         }

        //         if (type === "registration-pro-subscribe") {
        //             window.location.href = "/go/cabinet";
        //         }
        //     } else {
        //         window.location.href = "/payment/error";
        //     }
        // };

        // setTimeout(() => {
        //     window.location.reload();
        // }, 3000);

        setTimeout(() => {
            window.location.href = "/go/training";
        }, 3000);
    }, []);

    return <Loader />;
};

export default PaymentStatus;
