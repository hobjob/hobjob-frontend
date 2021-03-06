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
        HobJobProduction,
        isAdd,
        isLogin,
        onClickAddCourse,
        onClickHiddenCourse,
    }) => {
        return (
            <div className="shop-block">
                <div className="shop-block-top">
                    <div className="shop-block-top-cover-wrapper">
                        {HobJobProduction ? (
                            <Link
                                to={`/course/${url}`}
                                className="shop-block-top-cover-hobjob-production"
                            >
                                <img
                                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/hobjob-production.svg`}
                                    alt=""
                                    className="shop-block-top-cover-hobjob-production__image"
                                />
                            </Link>
                        ) : null}

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
                    {isLogin ? (
                        isAdd ? (
                            <button
                                className="btn-regular shop-block-bottom__link delete"
                                onClick={() => onClickHiddenCourse(_id)}
                            >
                                ??????????????
                            </button>
                        ) : (
                            <button
                                className="btn-regular shop-block-bottom__link"
                                onClick={() => onClickAddCourse(_id)}
                            >
                                ????????????????
                            </button>
                        )
                    ) : (
                        <a
                            href="/go/register"
                            className="btn-regular shop-block-bottom__link"
                        >
                            ????????????????
                        </a>
                    )}

                    <Link
                        to={`/course/${url}`}
                        className="btn shop-block-bottom__btn"
                    >
                        ????????????????
                    </Link>
                </div>
            </div>
        );
    }
);

export default ShopBlock;
