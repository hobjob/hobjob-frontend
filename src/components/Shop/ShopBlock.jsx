import React from "react";
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";

const ShopBlock = React.memo(
    ({
        _id,
        image,
        title,
        masterId,
        category,
        percentSale,
        price,
        transitTime,
        discountNotPrice,
        onClickAddCourseCart,
        cartItems,
        masters,
        categories,
        pro,
        proPrice,
        isBuy,
    }) => {
        const [addState, setAddState] = React.useState(false);

        React.useEffect(() => {
            if (cartItems[_id]) {
                setAddState(true);
            } else {
                setAddState(false);
            }
        }, [cartItems]);

        const onClickAdd = () => {
            onClickAddCourseCart({_id});
            setAddState(true);
        };

        return (
            <div className="shop-block">
                <div className="shop-block-top">
                    <Link
                        to={`/course/${_id}`}
                        className="shop-block-top-cover"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                        }}
                    ></Link>
                    <div className="shop-block-top-text">
                        <Link
                            to={`/course/${_id}`}
                            className="shop-block-top-text__title"
                        >
                            <h4>{title}</h4>
                        </Link>
                        <Link
                            to={`/master/${masterId}`}
                            className="shop-block-top-text__auth"
                        >
                            {masters[masterId] ? (
                                <>
                                    {masters[masterId].name}{" "}
                                    {masters[masterId].surname}
                                </>
                            ) : null}
                        </Link>
                        <div className="shop-block-top-text-tags">
                            <span className="shop-block-top-text__time">
                                {transitTime}
                            </span>

                            <span className="shop-block-top-text__category">
                                {categories[category]
                                    ? categories[category].title
                                    : null}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="shop-block-bottom">
                    {!percentSale ? (
                        pro ? (
                            <div className="shop-block-bottom-price">
                                <p className="shop-block-bottom__subprice">
                                    <NumberFormat
                                        value={price}
                                        displayType={"text"}
                                        thousandSeparator={" "}
                                        renderText={(value) => value}
                                    />
                                    ₽
                                </p>
                                <p className="shop-block-bottom__price">
                                    <NumberFormat
                                        value={proPrice}
                                        displayType={"text"}
                                        thousandSeparator={" "}
                                        renderText={(value) => value}
                                    />
                                    ₽
                                </p>
                            </div>
                        ) : (
                            <p className="shop-block-bottom__price">
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
                        <div className="shop-block-bottom-price">
                            <p className="shop-block-bottom__subprice">
                                <NumberFormat
                                    value={discountNotPrice}
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(value) => value}
                                />
                                ₽
                            </p>
                            {pro ? (
                                <p className="shop-block-bottom__price">
                                    <NumberFormat
                                        value={proPrice}
                                        displayType={"text"}
                                        thousandSeparator={" "}
                                        renderText={(value) => value}
                                    />
                                    ₽
                                </p>
                            ) : (
                                <p className="shop-block-bottom__price">
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
                    {isBuy ? (
                        <button className="btn disabled shop-block-bottom__btn">
                            Приобретен
                        </button>
                    ) : addState ? (
                        <Link
                            to="/cart"
                            className="btn-regular shop-block-bottom__btn"
                        >
                            Перейти в корзину
                        </Link>
                    ) : (
                        <button
                            className="btn shop-block-bottom__btn"
                            onClick={onClickAdd}
                        >
                            Добавить в корзину
                        </button>
                    )}
                </div>
            </div>
        );
    }
);

export default ShopBlock;
