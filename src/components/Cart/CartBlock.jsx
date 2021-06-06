import React from "react";
import {Link} from "react-router-dom";

const CartBlock = React.memo(
    ({
        _id,
        image,
        title,
        masterId,
        master,
        tags,
        percentSale,
        price,
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
                            backgroundImage: `url(${image})`,
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
                            to={`/master/${masterId}`}
                            className="cart-block-content-text__auth"
                        >
                            {master}
                        </Link>

                        <div className="cart-block-content-text-tags">
                            {tags.map((tag, index) => (
                                <Link
                                    to={`/shop/${tag.url}`}
                                    className="cart-block-content-text__tags"
                                    key={`cart-block-content-text__tag-${index}`}
                                >
                                    {tag.title}
                                </Link>
                            ))}
                        </div>

                        {!percentSale ? (
                            <p className="cart-block-content-text__price">
                                {price} <span>₽</span>
                            </p>
                        ) : (
                            <div className="cart-block-content-text-price">
                                <p className="cart-block-content-text__subprice">
                                    {discountNotPrice} <span>₽</span>
                                </p>
                                <p className="cart-block-content-text__price">
                                    {price}
                                    <span>₽</span>
                                </p>
                            </div>
                        )}
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
