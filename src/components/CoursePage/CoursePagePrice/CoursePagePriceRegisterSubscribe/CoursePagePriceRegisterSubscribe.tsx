import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {
    CoursePagePriceRegisterSubscribeForm,
    CoursePagePriceRegisterSubscribeProductBlock,
} from "../../../";

import {sendRegister} from "../../../../redux/actions/register";

import {rates} from "../../../../subscribeRates";

const CoursePagePriceRegisterSubscribe: React.FC = () => {
    const dispatch = useDispatch();

    const {courseByUrl} = useTypedSelector(({courses}) => courses);

    const {
        price: {isCloseAnimation, typeSubscribe},
    } = useTypedSelector(({coursePage}) => coursePage);

    const onSubmit = ({email}: any) => {
        return dispatch(
            sendRegister(
                {
                    email,
                    paymentInfo: `subscribe.${typeSubscribe}`,
                    addSubscribeCourseId: courseByUrl._id,
                },
                localStorage.getItem("ref")
                    ? (localStorage.getItem("ref") as string)
                    : "",
                "subscribe"
            )
        );
    };

    return (
        <div
            className={`course-page-price-register ${
                isCloseAnimation ? "close" : ""
            }`}
        >
            <CoursePagePriceRegisterSubscribeForm onSubmit={onSubmit} />

            <CoursePagePriceRegisterSubscribeProductBlock
                {...rates[typeSubscribe]}
            />
        </div>
    );
};

export default CoursePagePriceRegisterSubscribe;
