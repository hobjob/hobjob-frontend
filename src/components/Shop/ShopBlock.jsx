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
        discountNotPrice,
        onClickAddCourseCart,
        cartItems,
        checkDeclension,
        masters,
        categories,
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
            const obj = {
                _id,
                image,
                title,
                master: {
                    _id: masterId,
                    name: masters[masterId].name,
                },
                category: {
                    transfer: categories[category].transfer,
                    title: categories[category].title,
                },
                percentSale,
                price,
                checkDeclension,
                discountNotPrice,
            };

            onClickAddCourseCart(obj);
            setAddState(true);
        };

        return (
            <div className="shop-block">
                <div className="shop-block-top">
                    <Link
                        to={`/course/${_id}`}
                        className="shop-block-top-cover"
                        style={{
                            backgroundImage: `url(${process.env.REACT_APP_DOMEN}/${image})`,
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
                                {checkDeclension}
                            </span>
                            {categories[category] ? (
                                <a
                                    href={`/shop/?category=${categories[category].transfer}`}
                                    className="shop-block-top-text__category"
                                >
                                    {categories[category].title}
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="shop-block-bottom">
                    {!percentSale ? (
                        <p className="shop-block-bottom__price">
                            <NumberFormat
                                value={price}
                                displayType={"text"}
                                thousandSeparator={" "}
                                renderText={(value) => value}
                            />
                            ₽
                        </p>
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
                            <p className="shop-block-bottom__price">
                                <NumberFormat
                                    value={price}
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(value) => value}
                                />
                                ₽
                            </p>
                        </div>
                    )}
                    {!addState ? (
                        <button
                            className="btn shop-block-bottom__btn"
                            onClick={onClickAdd}
                        >
                            Добавить в корзину
                        </button>
                    ) : (
                        <Link
                            to="/cart"
                            className="btn-regular shop-block-bottom__btn"
                        >
                            Перейти в корзину
                        </Link>
                    )}
                </div>
            </div>
        );
    }
);

export default ShopBlock;
