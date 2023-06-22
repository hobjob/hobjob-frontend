import React from "react";
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

import {CourseGood} from "../../../models/Course/ICourseGood";
import {Category} from "../../../models/ICategory";
import {Master} from "../../../models/IMaster";

interface CoursePageMainProps extends CourseGood {
    categories: {[key: string]: Category};
    master: Master;
    isLogin: boolean;
    isAdd: boolean;
    onClickAddCourse: () => void;
}

const CoursePageMain: React.FC<CoursePageMainProps> = ({
    category,
    title,
    description,
    master,
    categories,
    HobJobProduction,
    image,
    isLogin,
    isAdd,
    onClickAddCourse,
}) => {
    return (
        <section className="course-page-main">
            <div className="container">
                <div className="course-page-main-wrapper">
                    <div className="course-page-main-text">
                        <div className="course-page-main-text-subinfo">
                            {HobJobProduction ? (
                                <div className="course-page-main-text-subinfo-hobjob-production">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/hobjob-production.svg`}
                                        alt=""
                                        className="course-page-main-text-subinfo-hobjob-production__image"
                                    />
                                </div>
                            ) : null}

                            {categories[category] ? (
                                <a
                                    href={`/course/?categories=${categories[category].transfer}`}
                                    className="category course-page-main-text-subinfo__category"
                                >
                                    {categories[category].title}
                                </a>
                            ) : null}
                        </div>
                        <h2 className="course-page-main-text__title">
                            {title}
                        </h2>
                        <p className="description course-page-main-text__description">
                            {description}
                        </p>

                        {master ? (
                            <Link
                                to={`/master/${master._id}`}
                                className="course-page-main-text-master"
                            >
                                <div
                                    className="course-page-main-text-master-avatar"
                                    style={{
                                        backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar.size_512}')`,
                                    }}
                                ></div>
                                <h4 className="course-page-main-text-master__name">
                                    {master ? (
                                        <>
                                            {master.name} {master.surname}
                                        </>
                                    ) : null}
                                </h4>
                            </Link>
                        ) : null}

                        {isLogin ? (
                            isAdd ? (
                                <button className="btn disabled course-page-main-text__btn">
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
                            ) : (
                                <button
                                    className="btn course-page-main-text__btn"
                                    onClick={onClickAddCourse}
                                >
                                    Добавить в мое обучение
                                </button>
                            )
                        ) : (
                            <LinkScroll
                                to="price"
                                spy={true}
                                smooth={true}
                                offset={-25}
                                duration={1000}
                            >
                                <button className="btn course-page-main-text__btn">
                                    Начать обучение
                                </button>
                            </LinkScroll>
                        )}
                    </div>
                    <div
                        className="course-page-main-image"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_1536}")`,
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageMain;
