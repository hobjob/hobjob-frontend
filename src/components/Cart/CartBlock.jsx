import React from "react";
import {Link} from "react-router-dom";

const CartBlock = React.memo(
    ({
        _id,
        image,
        title,
        master,
        category,
        percentSale,
        price,
        checkDeclension,
        discountNotPrice,
        removeCourse,
    }) => {
        const onClickRemoveCourse = () => {
            removeCourse(_id);
        };

        return (
            <div className="cart-block">
                <div className="cart-block-content">
                    <Link
                        to={`/course/${_id}`}
                        className="cart-block-content-cover"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_DOMEN}/${image}")`,
                        }}
                    ></Link>

                    <div className="cart-block-content-text">
                        <Link
                            to={`/course/${_id}`}
                            className="cart-block-content-text__title"
                        >
                            <h4>{title}</h4>
                        </Link>
                        <Link
                            to={`/master/${master._id}`}
                            className="cart-block-content-text__auth"
                        >
                            {master.name} {master.surname}
                        </Link>
                        <div className="cart-block-content-text-tags">
                            <span className="cart-block-content-text__time">
                                {checkDeclension}
                            </span>
                            <span className="cart-block-content-text__category">
                                {category.title}
                            </span>
                        </div>
                        <div className="cart-block-content-text-bottom">
                            {!percentSale ? (
                                <p className="cart-block-content-text__price">
                                    {price} ₽
                                </p>
                            ) : (
                                <div className="cart-block-content-text-price">
                                    <p className="cart-block-content-text__subprice">
                                        {discountNotPrice} ₽
                                    </p>
                                    <p className="cart-block-content-text__price">
                                        {price} ₽
                                    </p>
                                </div>
                            )}
                            <div
                                className="cart-block-close-phone"
                                onClick={onClickRemoveCourse}
                            >
                                <svg
                                    width="107"
                                    height="107"
                                    viewBox="0 0 107 107"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="26.8702"
                                        y1="26.8403"
                                        x2="79.9032"
                                        y2="79.8733"
                                    />
                                    <line
                                        x1="26.163"
                                        y1="79.8735"
                                        x2="79.1961"
                                        y2="26.8405"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-block-close" onClick={onClickRemoveCourse}>
                    <svg
                        width="107"
                        height="107"
                        viewBox="0 0 107 107"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="26.8702"
                            y1="26.8403"
                            x2="79.9032"
                            y2="79.8733"
                        />
                        <line
                            x1="26.163"
                            y1="79.8735"
                            x2="79.1961"
                            y2="26.8405"
                        />
                    </svg>
                </div>
            </div>
        );
    }
);

export default CartBlock;
