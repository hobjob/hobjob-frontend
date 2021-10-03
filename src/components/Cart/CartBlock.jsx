import React from "react";
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";

const CartBlock = React.memo(
    ({
		_id,
		url,
        image,
        title,
        masterId,
        category,
        percentSale,
        price,
        proPrice,
        pro,
        discountNotPrice,
        removeCourse,
        masters,
        categories,
    }) => {
		const onClickRemoveCourse = () => {
			window.scrollTo(0, 0)
			
            removeCourse(_id);
        };

        return (
            <div className="cart-block">
                <Link
                    to={`/course/${url}`}
                    className="cart-block-content-cover-media"
                    style={{
                        backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                    }}
                ></Link>

                <div className="cart-block-content">
                    <Link
                        to={`/course/${url}`}
                        className="cart-block-content-cover"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                        }}
                    ></Link>

                    <div className="cart-block-content-text">
                        <Link
                            to={`/course/${url}`}
                            className="cart-block-content-text__title"
                        >
                            <h4>{title}</h4>
                        </Link>
                        <Link
                            to={`/master/${masterId}`}
                            className="cart-block-content-text__auth"
                        >
                            {masters[masterId] ? (
                                <>
                                    {masters[masterId].name}{" "}
                                    {masters[masterId].surname}
                                </>
                            ) : null}
                        </Link>
                        <div className="cart-block-content-text-tags">
                            <span className="cart-block-content-text__category">
                                {categories[category].title}
                            </span>
                        </div>
                        <div className="cart-block-content-text-bottom">
                            {!percentSale ? (
                                pro ? (
                                    <div className="cart-block-content-text-price">
                                        <p className="cart-block-content-text__subprice">
                                            <NumberFormat
                                                value={price}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                                renderText={(value) => value}
                                            />
                                            ₽
                                        </p>
                                        <p className="cart-block-content-text__price">
                                            <NumberFormat
                                                value={
                                                    price -
                                                    (price / 100) *
                                                        process.env
                                                            .REACT_APP_PAYMENT_PERCENT_PRO
                                                }
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                                renderText={(value) => value}
                                            />
                                            ₽
                                        </p>
                                    </div>
                                ) : (
                                    <p className="cart-block-content-text__price">
                                        <NumberFormat
                                            value={price}
                                            displayType={"text"}
                                            thousandSeparator={" "}
                                            renderText={(value) => value}
                                        />
                                        ₽
                                    </p>
                                )
                            ) : (
                                <div className="cart-block-content-text-price">
                                    <p className="cart-block-content-text__subprice">
                                        <NumberFormat
                                            value={discountNotPrice}
                                            displayType={"text"}
                                            thousandSeparator={" "}
                                            renderText={(value) => value}
                                        />
                                        ₽
                                    </p>
                                    {pro ? (
                                        <p className="cart-block-content-text__price">
                                            <NumberFormat
                                                value={proPrice}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                                renderText={(value) => value}
                                            />
                                            ₽
                                        </p>
                                    ) : (
                                        <p className="cart-block-content-text__price">
                                            <NumberFormat
                                                value={price}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                                renderText={(value) => value}
                                            />
                                            ₽
                                        </p>
                                    )}
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
