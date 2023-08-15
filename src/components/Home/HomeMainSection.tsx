import React from "react";
import {Link} from "react-router-dom";

import CategoriesMainImage from "../../assets/images/main.jpg";
import MainOffer from "../../assets/images/main-offer.svg";

import {useTypedSelector} from "../../hooks/useTypedSelector";

const HomeMainSection: React.FC = () => {
    const {items, isLoadedAllCategories} = useTypedSelector(
        ({categories}) => categories
    );

    return (
        <>
            {isLoadedAllCategories ? (
                <section className="main">
                    <div className="container">
                        <div className="main-wrapper">
                            <div className="main-text">
                                <h1 className="main-text__title">
                                    Творческие курсы по подписке <br />{" "}
                                    Научитесь создавать шедевры своими руками
                                </h1>
{/* 
                                <Link
                                    to="/course"
                                    className="btn main-text__btn"
                                >
                                    Начать обучение
                                </Link>

                                <img
                                    src={MainOffer}
                                    alt="Выберите курс и попробуйте 30 дней всего за 1₽"
                                    className="main-text__image"
                                /> */}
                            </div>
                            {/* <div className="main-image">
                                <img
                                    src={CategoriesMainImage}
                                    alt=""
                                    className="main-image__image"
                                />
                            </div> */}
                            <div className="main-categories">
                                <div className="main-categories-text">
                                    <div className="main-categories-text-items-wrapper">
                                        {Object.keys(items).map(
                                            (key, index) => (
                                                <Link
                                                    to={`/course?categories=${items[key].transfer}`}
                                                    className="main-categories-text__item"
                                                    key={`main-categories-text__item-${index}`}
                                                >
                                                    {items[key].title}
                                                </Link>
                                            )
                                        )}
                                    </div>

                                    <img
                                        src={MainOffer}
                                        alt="Выберите курс и попробуйте 30 дней всего за 1₽"
                                        className="main-text__image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default HomeMainSection;
