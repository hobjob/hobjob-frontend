import React from "react";
import {Link} from "react-router-dom";

const HomeMainSectionSpecialOffer = ({title, image, master, _id}) => {
    return (
        <Link to={`/course/${_id}`} className="main-special-offer-shop-block">
            <div className="main-special-offer-shop-block-left">
                <div
                    className="main-special-offer-shop-block-left-cover"
                    style={{
                        backgroundImage: `url(${image})`,
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
                        {master.name}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default HomeMainSectionSpecialOffer;
