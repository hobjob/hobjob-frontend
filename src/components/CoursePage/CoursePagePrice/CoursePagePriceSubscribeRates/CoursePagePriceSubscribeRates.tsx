import React from "react";

import {
    CoursePagePriceSubscribeRatesBlock,
    CoursePagePriceSubscribeRatesTimer,
} from "../../../";

import {rates} from "../../../../subscribeRates";

interface CoursePagePriceSubscribeRatesProps {
    closeSubscribeRates: () => void;
}

const CoursePagePriceSubscribeRates: React.FC<
    CoursePagePriceSubscribeRatesProps
> = ({closeSubscribeRates}) => {
    return (
        <>
            <div className="course-page-price-subscribe-rates-text">
                <div className="course-page-price-subscribe-rates-text-left">
                    <button
                        className="course-page-price-subscribe-rates-text-left__back"
                        onClick={closeSubscribeRates}
                    >
                        ← Назад
                    </button>

                    <h3 className="course-page-price-subscribe-rates-text-left__title">
                        Успейте оформить подписку со скидкой
                    </h3>
                </div>

                <CoursePagePriceSubscribeRatesTimer />
            </div>

            <div className="course-page-price-subscribe-rates-blocks">
                {Object.keys(rates).map((key, index) => (
                    <CoursePagePriceSubscribeRatesBlock
                        {...rates[key]}
                        key={`course-page-price-subscribe-rates-blocks-block-${index}`}
                    />
                ))}
            </div>
        </>
    );
};

export default CoursePagePriceSubscribeRates;
