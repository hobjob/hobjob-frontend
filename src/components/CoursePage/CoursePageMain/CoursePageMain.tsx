import React from "react";
import {Link} from "react-router-dom";

import {CourseGood} from "../../../models/ICourseGood";
import {Category} from "../../../models/ICategory";
import {Master} from "../../../models/IMaster";

interface CoursePageMainProps extends CourseGood {
    categories: {[key: string]: Category};
    master: Master;
    isLogin: boolean;
    isAdd: boolean;
    onClickAddCourse: () => void;
    onClickHiddenCourse: () => void;
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
    onClickHiddenCourse,
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
                                    href={`/course/?category=${categories[category].transfer}`}
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
                                <button
                                    className="btn-delete course-page-main-text__btn"
                                    onClick={onClickHiddenCourse}
                                >
                                    Удалить из моего обучения
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
                            <Link
                                to="/go/register"
                                className="btn course-page-main-text__btn"
                            >
                                Открыть все уроки за 1₽
                            </Link>
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
