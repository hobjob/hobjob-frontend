import React from "react";
import {Link} from "react-router-dom";

import {Rate} from "../../../../models/IRate";

interface CoursePagePriceSubscribeRatesBlockProps extends Rate {
    isLogin: boolean;
    createPaymentSubscribe: (type: string) => void;
    onClickGoToRegisterSubscribe: (type: string) => void;
}

const CoursePagePriceSubscribeRatesBlock: React.FC<
    CoursePagePriceSubscribeRatesBlockProps
> = ({
    sale,
    subtitle,
    title,
    price,
    subprice,
    subbtn,
    type,
    isLogin,
    createPaymentSubscribe,
    onClickGoToRegisterSubscribe,
}) => {
    return (
        <div className="course-page-price-subscribe-rates-blocks-block">
            {sale ? (
                <p className="course-page-price-subscribe-rates-blocks-block__sale">
                    -{sale}%
                </p>
            ) : null}

            <div className="course-page-price-subscribe-rates-blocks-block-top-text">
                <p className="course-page-price-subscribe-rates-blocks-block-top-text__subtitle">
                    {subtitle}
                </p>
                <h3 className="course-page-price-subscribe-rates-blocks-block-top-text__title">
                    {title}
                </h3>
            </div>

            <div className="course-page-price-subscribe-rates-blocks-block-middle-text">
                <h3 className="course-page-price-subscribe-rates-blocks-block-middle-text__price">
                    {sale ? (
                        <>
                            {Math.floor(price - (price / 100) * sale)}₽{" "}
                            <span>{price}₽</span>
                        </>
                    ) : (
                        <>{price}₽</>
                    )}
                </h3>
                <p className="course-page-price-subscribe-rates-blocks-block-middle-text__subprice">
                    {subprice}
                </p>
            </div>

            <div className="course-page-price-subscribe-rates-blocks-block-bottom-text">
                {isLogin ? (
                    <button
                        className="btn course-page-price-subscribe-rates-blocks-block-bottom-text__btn"
                        onClick={() => createPaymentSubscribe(type)}
                    >
                        Оформить подписку
                    </button>
                ) : (
                    <button
                        onClick={() => onClickGoToRegisterSubscribe(type)}
                        className="btn  course-page-price-subscribe-rates-blocks-block-bottom-text__btn"
                    >
                        Оформить подписку
                    </button>
                )}

                <p className="course-page-price-subscribe-rates-blocks-block-bottom-text__subbtn">
                    {subbtn}
                </p>
            </div>
        </div>
    );
};

export default CoursePagePriceSubscribeRatesBlock;
