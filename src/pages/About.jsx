import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {checkDeclension} from "../Functions/checkDeclension";
import {abbreviateNumber} from "../Functions/abbreviateNumber";

import {fetchStatistics} from "../redux/actions/statistics";

import {CategoriesSection, ShopSection, ReferralsSection} from "../components/";

const About = () => {
    const dispatch = useDispatch();

    const {statistics, isLoaded} = useSelector(({statistics}) => statistics);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(statistics).length) {
            dispatch(fetchStatistics());
        }
    }, []);

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
                                            {isLoaded
                                                ? abbreviateNumber(
                                                      statistics.masters
                                                  )
                                                : "-"}
                                        </h4>
                                        <span
                                            className="
                                        about-section-statistics-item__subtitle
                                    "
                                        >
                                            {
                                                checkDeclension(
                                                    statistics.masters,
                                                    [
                                                        "Мастер",
                                                        "Мастера",
                                                        "Мастеров",
                                                    ]
                                                ).text
                                            }
                                        </span>
                                    </div>
                                    <div className="about-section-statistics-item">
                                        <h4 className="about-section-statistics-item__title">
                                            {isLoaded
                                                ? abbreviateNumber(
                                                      statistics.courses
                                                  )
                                                : "-"}
                                        </h4>
                                        <span
                                            className="
                                        about-section-statistics-item__subtitle
                                    "
                                        >
                                            {
                                                checkDeclension(
                                                    statistics.courses,
                                                    ["Курс", "Курса", "Курсов"]
                                                ).text
                                            }
                                        </span>
                                    </div>
                                    {/* <div className="about-section-statistics-item">
                                        <h4 className="about-section-statistics-item__title">
                                            {isLoaded
                                                ? abbreviateNumber(
                                                      statistics.students
                                                  )
                                                : "-"}
                                        </h4>
                                        <span
                                            className="
                                        about-section-statistics-item__subtitle
                                    "
                                        >
                                            {
                                                checkDeclension(
                                                    statistics.students,
                                                    [
                                                        "Ученик",
                                                        "Ученика",
                                                        "Учеников",
                                                    ]
                                                ).text
                                            }
                                        </span>
                                    </div> */}
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
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/online-platform-about-hb.svg`}
                                        alt=""
                                        className="about-services-item__img"
                                    />

                                    <div className="about-services-item-text">
                                        <h3 className="about-services-item-text__title">
                                            Онлайн платформа, в которой легко
                                            разобраться и учиться
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
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/like-about-hb.svg`}
                                        alt=""
                                        className="about-services-item__img"
                                    />

                                    <div className="about-services-item-text">
                                        <h3 className="about-services-item-text__title">
                                            Контент высочайшего качества,
                                            который вы не найдёте в интернете
                                        </h3>
                                        <p className="about-services-item-text__description">
                                            Все курсы тщательно отобраны и
                                            качественно проработаны
                                        </p>
                                    </div>
                                </div>

                                <div className="about-services-item">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/master-about-hb.svg`}
                                        alt=""
                                        className="about-services-item__img"
                                    />

                                    <div className="about-services-item-text">
                                        <h3 className="about-services-item-text__title">
                                            Мастер передает свои уникальные
                                            знания
                                        </h3>
                                        <p className="about-services-item-text__description">
                                            На платформе представлены лучшие
                                            мастера своего дела. Вам не нужно
                                            тратить время для поиска информации
                                            в интернете, можно удобно учиться и
                                            творить в одном месте
                                        </p>
                                    </div>
                                </div>

                                <div className="about-services-item">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/social-about-hb.svg`}
                                        alt=""
                                        className="about-services-item__img"
                                    />

                                    <div className="about-services-item-text">
                                        <h3 className="about-services-item-text__title">
                                            Уникальное сообщество творческих
                                            людей
                                        </h3>
                                        <p className="about-services-item-text__description">
                                            Уникальное сообщество творческих
                                            людей Учитесь, общайтесь и делитесь
                                            опытом вместе с нами. Удобная
                                            платформа и отдельный для каждого
                                            курса чат в Telegram вам в этом
                                            помогут.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CategoriesSection />

            <ReferralsSection />

            <ShopSection title="Учитесь на практике" />
        </>
    );
};

export default About;
