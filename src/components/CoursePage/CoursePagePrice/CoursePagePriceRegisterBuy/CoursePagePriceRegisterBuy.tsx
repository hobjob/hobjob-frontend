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

    const {
        price: {isCloseAnimation},
    } = useTypedSelector(({coursePage}) => coursePage);
    const {courseByUrl} = useTypedSelector(({courses}) => courses);

    const onSubmit = ({email, password}: any) => {
        return dispatch(
            sendRegister(
                {email, password, paymentInfo: `buy.${courseByUrl._id}`},
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
