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
        isAdd,
        isLogin,
        onClickAddCourse,
    }) => {
        return (
            <div className="shop-block">
                <div className="shop-block-top">
                    <div className="shop-block-top-cover-wrapper">
                        <Link
                            to={`/course/${url}`}
                            className="shop-block-top-cover"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                            }}
                        ></Link>
                    </div>

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
                    <Link
                        to={`/course/${url}`}
                        className="shop-block-bottom__link"
                    >
                        Подробнее
                    </Link>

                    {isLogin ? (
                        isAdd ? (
                            <button className="btn disabled shop-block-bottom__btn">
                                Добавлен
                            </button>
                        ) : (
                            <button
                                className="btn shop-block-bottom__btn"
                                onClick={() => onClickAddCourse(_id)}
                            >
                                Добавить
                            </button>
                        )
                    ) : (
                        <a
                            href="/go/register"
                            className="btn shop-block-bottom__btn"
                        >
                            Добавить
                        </a>
                    )}
                </div>
            </div>
        );
    }
);

export default ShopBlock;
