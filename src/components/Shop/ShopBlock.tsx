import React from "react";
import {Link} from "react-router-dom";

import {CourseGood} from "../../models/ICourseGood";
import {Master} from "../../models/IMaster";
import {Category} from "../../models/ICategory";

interface ShopBlockProps extends CourseGood {
    master: Master;
    categoryItem: Category;

    isAdd: boolean;
    isLogin: boolean;

    onClickAddCourse: (_id: string) => void;
    onClickHiddenCourse: (_id: string) => void;
}

const ShopBlock: React.FC<ShopBlockProps> = ({
    _id,
    url,
    image,
    title,
    master,
    categoryItem,
    HobJobProduction,
    description,
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
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_768}")`,
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
                    <div className="shop-block-top-text-filters">
                        <a
                            href={`/course?categories=${categoryItem.transfer}`}
                            className="category-small shop-block-top-text-filters__category"
                        >
                            {categoryItem ? categoryItem.title : null}
                        </a>
                        <Link
                            to={`/master/${master._id}`}
                            className="shop-block-top-text-filters__auth"
                        >
                            {master ? (
                                <>
                                    {master.name} {master.surname}
                                </>
                            ) : null}
                        </Link>
                    </div>
                    {/* <p className="shop-block-top-text__description">
                        {description}
                    </p> */}
                </div>
            </div>
            <div className="shop-block-bottom">
                {/* {isLogin ? (
                    isAdd ? (
                        <button
                            className="btn-regular shop-block-bottom__link delete"
                            onClick={() => onClickHiddenCourse(_id)}
                        >
                            Удалить
                        </button>
                    ) : (
                        <button
                            className="btn-regular shop-block-bottom__link"
                            onClick={() => onClickAddCourse(_id)}
                        >
                            Добавить
                        </button>
                    )
                ) : (
                    <Link
                        to="/go/register"
                        className="btn-regular shop-block-bottom__link"
                    >
                        Добавить
                    </Link>
                )} */}

                <Link
                    to={`/course/${url}`}
                    className="btn shop-block-bottom__btn"
                >
                    Смотреть
                </Link>
            </div>
        </div>
    );
};

export default ShopBlock;
