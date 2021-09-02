import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {sendCreateProSubscribePayment} from "../redux/actions/payment";

import {BtnLoader} from "../components/";

const Pro = () => {
    const dispatch = useDispatch();

    const [visibleButton, setVisibleButton] = React.useState(false);

    const {user, isLoaded} = useSelector(({user}) => user);
    const {isSendProSubscribe} = useSelector(({payment}) => payment);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        window.addEventListener("scroll", () => {
            if (Math.floor(window.pageYOffset) > 200) {
                setVisibleButton(true);
            } else {
                setVisibleButton(false);
            }
        });
    }, []);

    const createPayment = () => {
        dispatch(sendCreateProSubscribePayment());
    };

    return (
        <>
            <Helmet>
                <title>Pro аккаунт - HobJob</title>
            </Helmet>
            <section className="pro">
                <div className="container">
                    <div className="pro-wrapper">
                        {localStorage.getItem("accessToken") && isLoaded ? (
                            user.pro ? null : isSendProSubscribe ? (
                                <button
                                    className={`btn-small-round disabled pro__btn ${
                                        visibleButton ? "active" : ""
                                    }`}
                                    disabled
                                >
                                    <BtnLoader />
                                </button>
                            ) : (
                                <button
                                    className={`btn-small-round pro__btn ${
                                        visibleButton ? "active" : ""
                                    }`}
                                    onClick={createPayment}
                                >
                                    Вступить
                                </button>
                            )
                        ) : (
                            <a
                                href="/go/register?redirect=pro"
                                className={`btn-small-round pro__btn ${
                                    visibleButton ? "active" : ""
                                }`}
                            >
                                Вступить
                            </a>
                        )}
                        <div className="pro-main">
                            <div className="pro-main-text">
                                <h2 className="title pro-main-text__title">
                                    Pro аккаунт HobJob - участие в лучшем
                                    творческом клубе
                                </h2>
                                <p className="description__mb pro-main-text__description">
                                    Сделав свой аккаунт Pro, вы получите скрытые
                                    возможности нашей платормы, которые погмогут
                                    вам развиваться каждый день
                                </p>

                                <p className="pro-main-text__subtitle">
                                    Годовая подписка
                                </p>
                                <div className="pro-main-text-price">
                                    <p className="pro-main-text__price">
                                        3 500 ₽
                                    </p>
                                    <p className="pro-main-text__subprice">
                                        5 000 ₽
                                    </p>
                                </div>
                                {localStorage.getItem("accessToken") &&
                                isLoaded ? (
                                    user.pro ? (
                                        <button className="btn disabled pro-main-text__btn">
                                            Спасибо, вы уже с нами
                                        </button>
                                    ) : isSendProSubscribe ? (
                                        <button
                                            className="btn pro-main-text__btn disabled"
                                            disabled
                                        >
                                            <BtnLoader />
                                        </button>
                                    ) : (
                                        <button
                                            className="btn pro-main-text__btn"
                                            onClick={createPayment}
                                        >
                                            Вступить
                                        </button>
                                    )
                                ) : (
                                    <a
                                        href="/go/register?redirect=pro"
                                        className="btn pro-main-text__btn"
                                    >
                                        Вступить
                                    </a>
                                )}
                            </div>

                            <img
                                src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/pro-main-section.svg`}
                                alt=""
                                className="pro-main__img"
                            />
                        </div>

                        <div className="pro-about">
                            <h2 className="title__mb pro-about__title">
                                Что вы получите, подписавшись на HobJob Pro
                            </h2>

                            <div className="pro-about-items-wrapper">
                                <div className="pro-about-item">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/20percent-pro.svg`}
                                        alt=""
                                        className="pro-about-item__img"
                                    />

                                    <div className="pro-about-item-text">
                                        <h3 className="pro-about-item-text__title">
                                            Скидка 20%
                                        </h3>
                                        <p className="pro-about-item-text__description">
                                            У владельцев PRO версии есть скидка
                                            20% на все курсы
                                        </p>
                                    </div>
                                </div>
                                <div className="pro-about-item">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/certificate-pro.svg`}
                                        alt=""
                                        className="pro-about-item__img"
                                    />

                                    <div className="pro-about-item-text">
                                        <h3 className="pro-about-item-text__title">
                                            Получение сертификата
                                        </h3>
                                        <p className="pro-about-item-text__description">
                                            Получение сертификата о прохождении
                                            курса. Только в про версии человек
                                            будет получать сертификат за
                                            прохождение курса
                                        </p>
                                    </div>
                                </div>
                                <div className="pro-about-item">
                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/additional-materials-pro.svg`}
                                        alt=""
                                        className="pro-about-item__img"
                                    />

                                    <div className="pro-about-item-text">
                                        <h3 className="pro-about-item-text__title">
                                            Дополнительные материалы
                                        </h3>
                                        <p className="pro-about-item-text__description">
                                            У кажого курса есть дополнительные
                                            материалы, которые помогут вам
                                            глубже погрузиться в тему. Вы можете
                                            приобрести их либо за фиксированную
                                            сумму навсегда, либо получить к ним
                                            доступ через Pro Подписку бесплатно.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pro;
