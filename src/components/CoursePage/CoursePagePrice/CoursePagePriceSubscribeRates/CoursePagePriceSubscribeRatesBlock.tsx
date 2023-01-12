import React from "react";
import {Link} from "react-router-dom";

import {Rate} from "../../../../models/IRate";

const CoursePagePriceSubscribeRatesBlock: React.FC<Rate> = ({
    sale,
    subtitle,
    title,
    price,
    subprice,
    subbtn,
    type,
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
                    to={`/go/register?typeSubscribe=${type}`}
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
