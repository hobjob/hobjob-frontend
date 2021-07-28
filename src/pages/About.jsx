import React from "react";
import {useDispatch, useSelector} from "react-redux";
import NumberFormat from "react-number-format";
import {Helmet} from "react-helmet";

import {fetchStatistics} from "../redux/actions/statistics";

import {CategoriesSection, ShopSection} from "../components/";

const About = () => {
    const dispatch = useDispatch();

    const {statistics, isLoaded} = useSelector(({statistics}) => statistics);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(statistics).length) {
            dispatch(fetchStatistics());
        }
    }, []);

    //склонение ["мастер", "мастера", "мастеров"]
    //склонение ["курс", "курса", "курсов"]
    //склонение ["ученик", "ученика", "учеников"]
    const checkDeclension = (num, title) => {
        let result;

        if (num % 100 >= 5 && num % 100 <= 20) {
            result = title[2];
        } else {
            if (num % 10 === 1) {
                result = title[0];
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                result = title[1];
            } else {
                result = title[2];
            }
        }

        return result;
    };

    return (
        <>
            <Helmet>
                <title>О нас - HobJob</title>
            </Helmet>
            <section className="about">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="about-main">
                            <div className="about-section-left">
                                <h2 className="title about-section__title">
                                    Что такое HobJob?
                                </h2>
                            </div>
                            <div className="about-section-right">
                                <div className="about-section-text">
                                    <p
                                        className="
                                    description__mb
                                    about-section__description
                                "
                                    >
                                        HobJob - это платформа, на которой
                                        представлены курсы мастеров своего дела.
                                        Они учат тому, что умеют лучше всего -
                                        творить.
                                    </p>
                                </div>

                                <div className="about-section-statistics">
                                    <div className="about-section-statistics-item">
                                        <h4 className="about-section-statistics-item__title">
                                            {isLoaded ? (
                                                <NumberFormat
                                                    value={statistics.masters}
                                                    displayType={"text"}
                                                    thousandSeparator={" "}
                                                    renderText={(value) =>
                                                        value
                                                    }
                                                />
                                            ) : (
                                                "-"
                                            )}
                                        </h4>
                                        <span
                                            className="
                                        about-section-statistics-item__subtitle
                                    "
                                        >
                                            {checkDeclension(
                                                statistics.masters,
                                                [
                                                    "Мастер",
                                                    "Мастера",
                                                    "Мастеров",
                                                ]
                                            )}
                                        </span>
                                    </div>
                                    <div className="about-section-statistics-item">
                                        <h4 className="about-section-statistics-item__title">
                                            {isLoaded ? (
                                                <NumberFormat
                                                    value={statistics.courses}
                                                    displayType={"text"}
                                                    thousandSeparator={" "}
                                                    renderText={(value) =>
                                                        value
                                                    }
                                                />
                                            ) : (
                                                "-"
                                            )}
                                        </h4>
                                        <span
                                            className="
                                        about-section-statistics-item__subtitle
                                    "
                                        >
                                            {checkDeclension(
                                                statistics.courses,
                                                ["Курс", "Курса", "Курсов"]
                                            )}
                                        </span>
                                    </div>
                                    <div className="about-section-statistics-item">
                                        <h4 className="about-section-statistics-item__title">
                                            {isLoaded ? (
                                                <NumberFormat
                                                    value={statistics.students}
                                                    displayType={"text"}
                                                    thousandSeparator={" "}
                                                    renderText={(value) =>
                                                        value
                                                    }
                                                />
                                            ) : (
                                                "-"
                                            )}
                                        </h4>
                                        <span
                                            className="
                                        about-section-statistics-item__subtitle
                                    "
                                        >
                                            {checkDeclension(
                                                statistics.students,
                                                ["Ученик", "Ученика", "Учеников"]
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-services">
                            <h2 className="title__mb about-services__title">
                                Наши преимущества
                            </h2>
                            <div className="about-services-items-wrapper">
                                <div className="about-services-item">
                                    <img
                                        src={`${process.env.REACT_APP_DOMEN}/all/online-platform-about-hb.svg`}
                                        alt=""
                                        className="about-services-item__img"
                                    />

                                    <div className="about-services-item-text">
                                        <h3 className="about-services-item-text__title">
                                            Онлайн платформа в которой легко
                                            разобраться и учится
                                        </h3>
                                        <p className="about-services-item-text__description">
                                            Команда HobJob сделала удобную
                                            образовательную платформу как для
                                            преподавателей, так и для самих
                                            учеников
                                        </p>
                                    </div>
                                </div>

                                <div className="about-services-item">
                                    <img
                                        src={`${process.env.REACT_APP_DOMEN}/all/like-about-hb.svg`}
                                        alt=""
                                        className="about-services-item__img"
                                    />

                                    <div className="about-services-item-text">
                                        <h3 className="about-services-item-text__title">
                                            Контент высочайшего качества,
                                            который вы не найдёте в интернете
                                        </h3>
                                        <p className="about-services-item-text__description">
                                            Все курсы тщательно отобраны,
                                            качественно проработаны и записанны
                                            в студиях профессиональными
                                            видеографами
                                        </p>
                                    </div>
                                </div>

                                <div className="about-services-item">
                                    <img
                                        src={`${process.env.REACT_APP_DOMEN}/all/master-about-hb.svg`}
                                        alt=""
                                        className="about-services-item__img"
                                    />

                                    <div className="about-services-item-text">
                                        <h3 className="about-services-item-text__title">
                                            Мастер передаёт вам передовые знания
                                            в его области
                                        </h3>
                                        <p className="about-services-item-text__description">
                                            Мы отобрали лучших мастеров своего
                                            дела и поэтому вам не нужно тратить
                                            время для поиска информации. Просто
                                            учитесь у них и всё.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CategoriesSection />

            <ShopSection title="Учитесь на практике" />
        </>
    );
};

export default About;
