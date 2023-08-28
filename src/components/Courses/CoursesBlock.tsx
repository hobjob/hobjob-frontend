import React from "react";
import {Link} from "react-router-dom";

import {CourseGood} from "../../models/Course/ICourseGood";
import {Master} from "../../models/IMaster";
import {Category} from "../../models/ICategory";

interface CoursesBlockProps extends CourseGood {
    master: Master;
    categoryItem: Category;

    isLogin: boolean;
    isAdd: boolean;
    isSubscribe: boolean;

    onClickAddCourse: (_id: string) => void;
}

const CoursesBlock: React.FC<CoursesBlockProps> = ({
    _id,
    url,
    image,
    title,
    master,
    categoryItem,

    HobJobProduction,
    isLogin,
    isAdd,
    isSubscribe,

    onClickAddCourse,
}) => {
    return (
        <div className="courses-catalog-block">
            <div className="courses-catalog-block-top">
                <div className="courses-catalog-block-top-cover-wrapper">
                    {HobJobProduction ? (
                        <Link
                            to={`/course/${url}`}
                            className="courses-catalog-block-top-cover-hobjob-production"
                        >
                            <img
                                src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/hobjob-production.svg`}
                                alt=""
                                className="courses-catalog-block-top-cover-hobjob-production__image"
                            />
                        </Link>
                    ) : null}

                    <Link
                        to={`/course/${url}`}
                        className="courses-catalog-block-top-cover"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_768}")`,
                        }}
                    ></Link>
                </div>

                <div className="courses-catalog-block-top-filters">
                    <a
                        href={`/course?categories=${categoryItem.transfer}`}
                        className="category-small courses-catalog-block-top-filters__category"
                    >
                        {categoryItem ? categoryItem.title : null}
                    </a>
                    <Link
                        to={`/master/${master._id}`}
                        className="courses-catalog-block-top-filters__auth"
                    >
                        {master ? (
                            <>
                                {master.name} {master.surname}
                            </>
                        ) : null}
                    </Link>
                </div>

                <Link
                    to={`/course/${url}`}
                    className="courses-catalog-block-top__title"
                >
                    {title}
                </Link>
            </div>
            <div className="courses-catalog-block-bottom">
                {isLogin ? (
                    isAdd ? (
                        <button className="btn disabled courses-catalog-block-bottom__btn">
                            <svg
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.44632 6.0186C1.79012 6.50143 2.22771 6.89948 2.59784 7.36158C3.55556 8.55726 4.36875 9.86064 5.23006 11.1246C5.25198 11.1568 5.76023 11.8699 5.79835 11.8034C5.96582 11.5113 6.09668 11.1775 6.23676 10.8715C6.66638 9.93305 7.1304 9.0248 7.65259 8.13343C8.54438 6.61116 9.43319 5.0821 10.4156 3.61607C10.8657 2.94443 11.395 2.35225 11.8904 1.71673C12.1063 1.43977 12.3942 1.14453 12.5389 0.82259"
                                    stroke="#000000"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                />
                            </svg>
                            Добавлен
                        </button>
                    ) : isSubscribe ? (
                        <button
                            className="btn courses-catalog-block-bottom__btn"
                            onClick={() => onClickAddCourse(_id)}
                        >
                            Добавить в мое обучение
                        </button>
                    ) : (
                        <Link
                            to={`/course/${url}`}
                            className="btn courses-catalog-block-bottom__btn"
                        >
                            Начать обучение
                        </Link>
                    )
                ) : (
                    <Link
                        to={`/course/${url}`}
                        className="btn courses-catalog-block-bottom__btn"
                    >
                        Смотреть
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CoursesBlock;
