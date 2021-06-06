import React from "react";
import {Link} from "react-router-dom";

const ShopBlock = React.memo(
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
        onClickAddCourseCart,
        cartItems,
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
                masterId,
                master,
                tags,
                percentSale,
                price,
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
                            backgroundImage: `url(${image})`,
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
                            {master}
                        </Link>
                        <div className="shop-block-top-text-tags">
                            {tags.map((tag, index) => (
                                <Link
                                    to={`/shop/${tag.url}`}
                                    className="shop-block-top-text__tags"
                                    key={`shop-block-top-text__tag-${index}`}
                                >
                                    {tag.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="shop-block-bottom">
                    {!percentSale ? (
                        <p className="shop-block-bottom__price">
                            {price} <span>₽</span>
                        </p>
                    ) : (
                        <div className="shop-block-bottom-price">
                            <p className="shop-block-bottom__subprice">
                                {discountNotPrice} <span>₽</span>
                            </p>
                            <p className="shop-block-bottom__price">
                                {price} <span>₽</span>
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
                            onClick={onClickAdd}
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
