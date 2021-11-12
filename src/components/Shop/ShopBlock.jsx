import React from "react";
import {Link} from "react-router-dom";

const ShopBlock = React.memo(
    ({
        _id,
        url,
        image,
        title,
        master,
        masterId,
        category,
        onClickAddCourseCart,
        cartItems = {},
        isBuy,
        isBuyTesting,
        buyFullAccess,
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

            if (window.location.pathname === "/") {
                window.location.href = "/cart";
            }

            setAddState(true);
        };

        return (
            <div className="shop-block">
                <div className="shop-block-top">
                    <Link
                        to={`/course/${url}`}
                        className="shop-block-top-cover"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                        }}
                    ></Link>
                    <div className="shop-block-top-text">
                        <Link
                            to={`/course/${url}`}
                            className="shop-block-top-text__title"
                        >
                            {title}
                        </Link>
                        <Link
                            to={`/master/${masterId}`}
                            className="shop-block-top-text__auth"
                        >
                            {master ? (
                                <>
                                    {master.name} {master.surname}
                                </>
                            ) : null}
                        </Link>
                        <div className="shop-block-top-text-tags">
                            <span className="shop-block-top-text__category">
                                {category ? category.title : null}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="shop-block-bottom">
                    {isBuyTesting ? (
                        <p
                            onClick={() => buyFullAccess(_id)}
                            className="shop-block-bottom__link"
                        >
                            Купить полный доступ
                        </p>
                    ) : isBuy ? (
                        <p className="shop-block-bottom__message">Приобретен</p>
                    ) : addState ? (
                        <Link to="/cart" className="shop-block-bottom__link">
                            Перейти в корзину
                        </Link>
                    ) : (
                        <p
                            className="shop-block-bottom__link"
                            onClick={onClickAdd}
                        >
                            Добавить в корзину
                        </p>
                    )}

                    <Link
                        to={`/course/${url}`}
                        className="btn shop-block-bottom__btn"
                    >
                        Подробнее
                    </Link>
                </div>
            </div>
        );
    }
);

export default ShopBlock;
