import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";
import {Helmet} from "react-helmet";

import { checkDeclension } from "../Functions/checkDeclension";

import {fetchStatistics} from "../redux/actions/statistics";

import {MastersAboutTabItem} from "../components/";

const MastersAbout = () => {
    const dispatch = useDispatch();

    const [visibleButton, setVisibleButton] = React.useState(false);

    const {statistics} = useSelector(({statistics}) => statistics);

    const MastersAboutWrapper = React.useRef();

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(statistics).length) {
            dispatch(fetchStatistics());
        }

        window.addEventListener("scroll", () => {
            if (Math.floor(window.pageYOffset) > 200) {
                setVisibleButton(true);
            } else {
                setVisibleButton(false);
            }
        });
    }, []);

    const FAQ = [
        {
            title: "Кто может опубликовать курс в HobJob?",
            description: `Любой профессионал в творческой сфере. Наша команда отвечает за детальное рассмотрение каждого предложения, дабы убедиться, что оно соответствует стандартам качества HobJob. В дополнение к вашему предложению важно отправить всю необходимую информацию, чтобы мы могли иметь четкое представление о том, кто вы и чем занимаетесь.`,
        },
        {
            title: "Придётся ли вам платить?",
            description: `Нет. Мы размещаем курсы наших мастеров у себя бесплатно, но берём процент с каждой продажи.`,
        },
        {
            title: "Что нужно, чтобы стать масетром в HobJob? ",
            description: `Первым делом необходимо созать свою учётную запись в HobJob. Затем отправить заявку на размещение вас как мастера, это можно сделать на данной странице в самом начале, нажав  “Заполнить заявку мастера”.`,
        },
        {
            title: "Какие курсы можно предложть?",
            description: `Курсы должны быть нацелены на создание проекта в любом из направлений HobJob: фотография и видео, иллюстрация, 3D и анимация, дизайн, каллиграфия и типографика, ремесло и технология. Миссия HobJob - помочь тысячам творческих людей осваивать новые навыки и исследовать свои увлечения, а также делиться своими знаниями и проектами с сообществом.`,
        },

        {
            title: "На что похожи курсы HobJob?",
            description: `Курсы HobJob нацелены на изучения конкретного навыка или на создание конкретного проекта. В курсах вы узнаете много полезной и передовой информации от профессионала своей области.`,
        },
    ];

    return (
        <>
            <Helmet>
                <title>Для мастеров - HobJob</title>
            </Helmet>
            <section className="masters-about" ref={MastersAboutWrapper}>
                <div className="container">
                    <div className="masters-about-wrapper">
                        <Link
                            to="/"
                            className={`btn-small-round masters-about__btn ${
                                visibleButton ? "active" : ""
                            }`}
                        >
                            Заполнить заявку Мастера
                        </Link>
                        <div className="masters-about-main">
                            <div className="masters-about-left">
                                <h2 className="title masters-about-section__title">
                                    Учите тому, что вы любите и умеете
                                </h2>
                            </div>
                            <div className="masters-about-right">
                                <div className="masters-about-text">
                                    <p
                                        className="
                                    description__mb
                                    masters-about-section__description
                                "
                                    >
                                        Станьте мастером HobJob и получайте
                                        доход от ваших онлайн-курсов
                                    </p>
                                    <Link
                                        to="/master"
                                        className="btn-arrow masters-about-section__btn"
                                    >
                                        Заполнить заявку Мастера
                                        <svg
                                            width="31"
                                            height="12"
                                            viewBox="0 0 31 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989592 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z"
                                                fill="#D89350"
                                            />
                                        </svg>
                                    </Link>
                                </div>

                                <div className="masters-about-statistics">
                                    <div className="masters-about-statistics-item">
                                        <h4 className="masters-about-statistics-item__title">
                                            <NumberFormat
                                                value={statistics.masters}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                                renderText={(value) => value}
                                            />
                                        </h4>
                                        <span className="masters-about-statistics-item__subtitle">
                                            {
                                                checkDeclension(
                                                    statistics.masters,
                                                    [
                                                        "Мастер",
                                                        "Мастера",
                                                        "Мастеров",
                                                    ]
                                                ).text
                                            }{" "}
                                            уже с нами!
                                        </span>
                                    </div>
                                    <div className="masters-about-statistics-item">
                                        <h4 className="masters-about-statistics-item__title">
                                            <NumberFormat
                                                value={statistics.payouts}
                                                displayType={"text"}
                                                thousandSeparator={" "}
                                                renderText={(value) => value}
                                            />
                                        </h4>
                                        <span className="masters-about-statistics-item__subtitle">
                                            Выплат
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="masters-about-services">
                            <h2 className="title__mb masters-about-services__title">
                                Наши преимущества
                            </h2>{" "}
                            <div className="masters-about-services-items-wrapper">
                                <div className="masters-about-services-item">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/large-community-masters-page.svg`}
                                        alt=""
                                        className="masters-about-services-item__img"
                                    />

                                    <div className="masters-about-services-item-text">
                                        <h3 className="masters-about-services-item-text__title">
                                            Большое сообщество
                                        </h3>
                                        <p className="masters-about-services-item-text__description">
                                            На нашем сайте тысячи людей
                                            постоянно изучают что-то новое,
                                            делятся своими работами и
                                            рекомендуют курсы своим друзьям
                                        </p>
                                    </div>
                                </div>

                                <div className="masters-about-services-item">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/affiliate-system-masters-page.svg`}
                                        alt=""
                                        className="masters-about-services-item__img"
                                    />

                                    <div className="masters-about-services-item-text">
                                        <h3 className="masters-about-services-item-text__title">
                                            Развитая партнёрская система
                                        </h3>
                                        <p className="masters-about-services-item-text__description">
                                            Получение сертификата о прохождении
                                            курса. Только в про версии человек
                                            будет получать сертификат за
                                            прохождения курса
                                        </p>
                                    </div>
                                </div>

                                <div className="masters-about-services-item">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/interface-masters-page.svg`}
                                        alt=""
                                        className="masters-about-services-item__img"
                                    />

                                    <div className="masters-about-services-item-text">
                                        <h3 className="masters-about-services-item-text__title">
                                            Удобный интерфейс для прохождения
                                            курсов
                                        </h3>
                                        <p className="masters-about-services-item-text__description">
                                            Вашим клиентам будет удобно учится у
                                            нас, потому что мы используем
                                            передовые технологии и постоянно
                                            совершенствуем образовательный
                                            процесс
                                        </p>
                                    </div>
                                </div>

                                <div className="masters-about-services-item">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/followers-masters-page.svg`}
                                        alt=""
                                        className="masters-about-services-item__img"
                                    />

                                    <div className="masters-about-services-item-text">
                                        <h3 className="masters-about-services-item-text__title">
                                            Вы получите новых клиентов и
                                            подписчиков
                                        </h3>
                                        <p className="masters-about-services-item-text__description">
                                            Для каждого мастера мы
                                            создаёмотдельную страничку, где
                                            подробно рассказываем о нём,
                                            указываем все социальные сети и
                                            контакты
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="masters-about-faq">
                            <h2 className="title__mb masters-about-faq__title">
                                Часто задаваемые вопросы
                            </h2>
                            <div className="masters-about-faq-tabs-wrapper">
                                {FAQ.map((item, index) => (
                                    <MastersAboutTabItem
                                        {...item}
                                        key={`masters-about-faq-tab-${index}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="masters-about-bottom">
                            <div className="masters-about-bottom-left">
                                <h2 className="title masters-about-bottom__title">
                                    Поняли, что хотите стать мастером HobJob?
                                </h2>
                            </div>
                            <div className="masters-about-bottom-right">
                                <p className="description__mb masters-about-bottom__description">
                                    Наше большое сообщество ждёт ваш курс! Если
                                    вы любите преподавать и с радостью делитесь
                                    своими знаниями, HobJob - уникальное место
                                    для этого.
                                </p>
                                <Link
                                    to="/master"
                                    className="btn-arrow masters-about-bottom__btn"
                                >
                                    Заполнить заявку Мастера
                                    <svg
                                        width="31"
                                        height="12"
                                        viewBox="0 0 31 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989592 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z"
                                            fill="#D89350"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MastersAbout;
