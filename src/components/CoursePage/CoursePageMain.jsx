import React from "react";
import {Link} from "react-router-dom";

const CoursePageMain = ({
    category,
    title,
    description,
    masterId,
    master,
    categories,
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
                            <a
                                href={`/shop/?category=${category}`}
                                className="course-page-main-text-subinfo__category"
                            >
                                {categories[category]
                                    ? categories[category].title
                                    : null}
                            </a>
                        </div>
                        <h2 className="course-page__title course-page-main-text__title">
                            {title}
                        </h2>
                        <p className="course-page-main-text__description">
                            {description}
                        </p>

                        {master ? (
                            <Link
                                to={`/master/${masterId}`}
                                className="course-page-main-text-master"
                            >
                                <div
                                    className="course-page-main-text-master-avatar"
                                    style={{
                                        backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar}')`,
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
                                    Добавлен
                                </button>
                            ) : (
                                <button
                                    className="btn course-page-main-text__btn"
                                    onClick={onClickAddCourse}
                                >
                                    Добавить в мои курсы
                                </button>
                            )
                        ) : (
                            <a
                                href="/go/register"
                                className="btn course-page-main-text__btn"
                            >
                                Оформите пробную подписку
                            </a>
                        )}
                    </div>
                    <div
                        className="course-page-main-image"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageMain;
