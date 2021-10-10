import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {checkDeclension} from "../Functions/checkDeclension";
import {abbreviateNumber} from "../Functions/abbreviateNumber";

import {fetchStatistics} from "../redux/actions/statistics";

import {
    CategoriesSection,
    ShopSection,
    ReferralsSection,
    AboutSection,
} from "../components/";

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
            <AboutSection />
            <section className="about">
                <div className="container">
                    <div className="about-wrapper">
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
                                            учеников. Наслаждайтесь обучением из
                                            дома без установленного расписания и
                                            ограничения по времени
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
                                            Мы составляем свой список мастеров и
                                            самостоятельно производим каждый
                                            курс, чтобы обеспечить
                                            высококачественное онлайн-обучение
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

            <ShopSection
                title="Учитесь на практике"
                description="Обучайтесь у лучших профессионалов своего дела и раскройте самые сокровенные секреты творческого мира"
            />
        </>
    );
};

export default About;
