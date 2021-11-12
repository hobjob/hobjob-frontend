import React from "react";
import {Link} from "react-router-dom";
import ReactPlayer from "react-player";

const CoursePageMain = ({
    _id,
    videoTrailerUrl,
    category,
    title,
    description,
    masterId,
    masters,
    categories,
    addTestingCourse,
    addCart,
    isBuy,
    isBuyTesting,
    addState,
    isLogin,
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
                        <Link
                            to={`/master/${masterId}`}
                            className="course-page-main-text-master"
                        >
                            <div
                                className="course-page-main-text-master-avatar"
                                style={{
                                    backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${masters[masterId].avatar}')`,
                                }}
                            ></div>
                            <h4 className="course-page-main-text-master__name">
                                {masters[masterId] ? (
                                    <>
                                        {masters[masterId].name}{" "}
                                        {masters[masterId].surname}
                                    </>
                                ) : null}
                            </h4>
                        </Link>

                        {isBuy && !addState ? (
                            isBuyTesting ? (
                                <button
                                    className="btn course-page-main-text__btn"
                                    onClick={addCart}
                                >
                                    Купить полный доступ
                                </button>
                            ) : (
                                <button className="btn disabled course-page-main-text__btn">
                                    Приобретен
                                </button>
                            )
                        ) : addState ? (
                            <Link
                                to="/cart"
                                className="btn-regular course-page-main-text__btn"
                            >
                                Перейти в корзину
                            </Link>
                        ) : isLogin ? (
                            <button
                                className="btn course-page-main-text__btn"
                                onClick={addTestingCourse}
                            >
                                Получить первый урок бесплатно
                            </button>
                        ) : (
                            <a
                                href={`/testing/${_id}/register`}
                                className="btn course-page-main-text__btn"
                            >
                                Зарегистрироваться и получить первый урок
                                бесплатно
                            </a>
                        )}
                    </div>
                    <div className="course-page-main-video">
                        <div className="course-page-main-video-wrapper">
                            <ReactPlayer
                                url={`${process.env.REACT_APP_IMAGE_DOMEN}/${videoTrailerUrl}`}
                                controls={true}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageMain;
