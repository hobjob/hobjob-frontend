import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {
    CoursePagePriceRegisterBuyForm,
    CoursePagePriceRegisterBuyProductBlock,
} from "../../../";

import {sendRegister} from "../../../../redux/actions/register";

const CoursePagePriceRegisterBuy: React.FC = () => {
    const dispatch = useDispatch();

    const {isCloseAnimation} = useTypedSelector(({coursePage}) => coursePage);
    const {courseByUrl} = useTypedSelector(({courses}) => courses);

    const onSubmit = ({email}: any) => {
        return dispatch(
            sendRegister(
                {email, paymentInfo: `buy.${courseByUrl._id}`},
                localStorage.getItem("ref")
                    ? (localStorage.getItem("ref") as string)
                    : "",
                "buy"
            )
        );
    };

    return (
        <div
            className={`course-page-price-register ${
                isCloseAnimation ? "close" : ""
            }`}
        >
            <CoursePagePriceRegisterBuyForm onSubmit={onSubmit} />

            <CoursePagePriceRegisterBuyProductBlock {...courseByUrl} />
        </div>
    );
};

export default CoursePagePriceRegisterBuy;
