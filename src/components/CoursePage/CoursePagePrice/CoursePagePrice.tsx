import React from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    CoursePagePriceSubscribe,
    CoursePagePriceBuy,
    CoursePagePriceSubscribeRates,
} from "../../";

const CoursePagePrice: React.FC = () => {
    const {courseByUrl} = useTypedSelector(({courses}) => courses);

    const [visibleSubscribeRates, setVisibleSubscribeRates] =
        React.useState<boolean>(false);
    const [isCloseAnimationPriceSubscribe, setIsCloseAnimationPriceSubscribe] =
        React.useState<boolean>(false);
    const [isCloseAnimationRatesSubscribe, setIsCloseAnimationRatesSubscribe] =
        React.useState<boolean>(false);

    const openSubscribeRates = () => {
        setIsCloseAnimationPriceSubscribe(true);

        setTimeout(() => {
            setVisibleSubscribeRates(true);
            setIsCloseAnimationPriceSubscribe(false);
        }, 180);
    };

    const closeSubscribeRates = () => {
        setIsCloseAnimationRatesSubscribe(true);

        setTimeout(() => {
            setVisibleSubscribeRates(false);
            setIsCloseAnimationRatesSubscribe(false);
        }, 180);
    };

    return (
        <section className="course-page-price" id="price">
            <div className="container">
                <div className="course-page-price-wrapper">
                    <h2 className="title__mb course-page-price__title">
                        Как получить доступ к курсу?
                    </h2>

                    {visibleSubscribeRates ? (
                        <div
                            className={`course-page-price-subscribe-rates ${
                                isCloseAnimationRatesSubscribe ? "close" : ""
                            }`}
                        >
                            <CoursePagePriceSubscribeRates
                                closeSubscribeRates={closeSubscribeRates}
                            />
                        </div>
                    ) : (
                        <div
                            className={`course-page-price-blocks ${
                                isCloseAnimationPriceSubscribe ? "close" : ""
                            }`}
                        >
                            <CoursePagePriceSubscribe
                                openSubscribeRates={openSubscribeRates}
                            />

                            <CoursePagePriceBuy {...courseByUrl} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CoursePagePrice;
