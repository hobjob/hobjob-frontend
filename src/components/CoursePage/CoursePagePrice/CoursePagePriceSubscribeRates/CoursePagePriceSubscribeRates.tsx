import React from "react";

import {
    CoursePagePriceSubscribeRatesBlock,
    CoursePagePriceSubscribeRatesTimer,
} from "../../../";

import {RateBlock} from "../../../../models/IRateBlock";

interface CoursePagePriceSubscribeRatesProps {
    closeSubscribeRates: () => void;
}

const CoursePagePriceSubscribeRates: React.FC<CoursePagePriceSubscribeRatesProps> = ({closeSubscribeRates}) => {
    const ratesBlocks: RateBlock[] = [
        {
            sale: 0,
            subtitle: "1 месяц",
            title: "Для тех, кто пробует",
            price: 499,
            subprice: "в месяц",
            btnLink: "",
            subbtn: "Ежемесячная оплата",
        },

        {
            sale: 20,
            subtitle: "1 год",
            title: "Для тех, кто настроен серьезно",
            price: 499,
            subprice: "в месяц",
            btnLink: "",
            subbtn: "При оплате 4788 ₽ за год",
        },

        {
            sale: 50,
            subtitle: "2 года",
            title: "Для тех, кто ищет максимальную выгоду",
            price: 499,
            subprice: "в месяц",
            btnLink: "",
            subbtn: "При оплате 5990 ₽ за 2 года",
        },
    ];

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
                {ratesBlocks.map((block, index) => (
                    <CoursePagePriceSubscribeRatesBlock
                        {...block}
                        key={`course-page-price-subscribe-rates-blocks-block-${index}`}
                    />
                ))}
            </div>
        </>
    );
};

export default CoursePagePriceSubscribeRates;
