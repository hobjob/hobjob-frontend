import React from "react";
import {Link} from "react-router-dom";

import {RateBlock} from "../../../../models/IRateBlock";

const CoursePagePriceSubscribeRatesBlock: React.FC<RateBlock> = ({
    sale,
    subtitle,
    title,
    price,
    subprice,
    btnLink,
    subbtn,
}) => {
    return (
        <div className="course-page-price-subscribe-rates-blocks-block">
            {sale ? (
                <p className="course-page-price-subscribe-rates-blocks-block__sale">
                    -{sale}%
                </p>
            ) : null}

            <div>
                <p className="course-page-price-subscribe-rates-blocks-block__subtitle">
                    {subtitle}
                </p>
                <h3 className="course-page-price-subscribe-rates-blocks-block__title">
                    {title}
                </h3>
            </div>

            <div>
                <h3 className="course-page-price-subscribe-rates-blocks-block__price">
                    {sale ? (
                        <>
                            {Math.floor(price - (price / 100) * sale)}₽{" "}
                            <span>{price}₽</span>
                        </>
                    ) : (
                        <>{price}₽</>
                    )}
                </h3>
                <p className="course-page-price-subscribe-rates-blocks-block__subprice">
                    {subprice}
                </p>
            </div>

            <div>
                <Link
                    to={btnLink}
                    className="btn course-page-price-subscribe-rates-blocks-block__btn"
                >
                    Оформить подписку
                </Link>

                <p className="course-page-price-subscribe-rates-blocks-block__subbtn">
                    {subbtn}
                </p>
            </div>
        </div>
    );
};

export default CoursePagePriceSubscribeRatesBlock;
