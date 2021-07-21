import React from "react";
import {Link} from "react-router-dom";

const HomeMainSectionSpecialOffer = ({
    title,
    image,
    masters,
    masterId,
    _id,
}) => {
    return (
        <Link to={`/course/${_id}`} className="main-special-offer-shop-block">
            <div className="main-special-offer-shop-block-left">
                <div
                    className="main-special-offer-shop-block-left-cover"
                    style={{
                        backgroundImage: `url("${process.env.REACT_APP_DOMEN}/${image}")`,
                    }}
                ></div>
            </div>
            <div className="main-special-offer-shop-block-right">
                <div className="main-special-offer-shop-block-right-text">
                    <span className="main-special-offer-shop-block-right-text__subtitle">
                        Лучший курс недели
                    </span>
                    <h3 className="main-special-offer-shop-block-right-text__title">
                        {title}
                    </h3>
                    <span className="main-special-offer-shop-block-right-text__auth">
                        {masters[masterId].name} {masters[masterId].surname}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default HomeMainSectionSpecialOffer;
