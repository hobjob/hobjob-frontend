import React from "react";
import {Link} from 'react-router-dom';

const Pro = () => {
    const [visibleButton, setVisibleButton] = React.useState(false);

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

    return (
        <section className="pro">
            <div className="container">
                <div className="pro-wrapper">
					<Link
						to="/"
                        className={`btn pro__btn ${
                            visibleButton ? "active" : ""
                        }`}
                    >
                        Вступить
                    </Link>
                    <div className="pro-main">
                        <div className="pro-main-text">
                            <h2 className="pro-main-text__title">
                                Pro аккаунт HobJob - участие в лучшем
                                творческом клубе
                            </h2>
                            <p className="description__mb pro-main-text__description">
                                Сделав свой аккаунт Pro, вы получите скрытые
                                возможности нашей платормы, которые погмогут вам
                                развиваться каждый день
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
                            <Link to="" className="btn pro-main-text__btn">
                                Вступить
                            </Link>
                        </div>

                        <img
                            src={`${process.env.REACT_APP_DOMEN}/all/pro-main-section.svg`}
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
                                    src={`${process.env.REACT_APP_DOMEN}/all/20percent-pro.svg`}
                                    alt=""
                                    className="pro-about-item__img"
                                />

                                <div className="pro-about-item-text">
                                    <h3 className="pro-about-item-text__title">
                                        Скидка 20%
                                    </h3>
                                    <p className="pro-about-item-text__description">
                                        У владельцев PRO версии есть скидка 20%
                                        на все курсы
                                    </p>
                                </div>
                            </div>
                            <div className="pro-about-item">
                                <img
                                    src={`${process.env.REACT_APP_DOMEN}/all/certificate-pro.svg`}
                                    alt=""
                                    className="pro-about-item__img"
                                />

                                <div className="pro-about-item-text">
                                    <h3 className="pro-about-item-text__title">
                                        Получение сертификата
                                    </h3>
                                    <p className="pro-about-item-text__description">
                                        Получение сертификата о прохождении
                                        курса. Только в про версии человек будет
                                        получать сертификат за прохождение курса
                                    </p>
                                </div>
                            </div>
                            <div className="pro-about-item">
                                <img
                                    src={`${process.env.REACT_APP_DOMEN}/all/free-pro.svg`}
                                    alt=""
                                    className="pro-about-item__img"
                                />

                                <div className="pro-about-item-text">
                                    <h3 className="pro-about-item-text__title">
                                        1 бесплатный курс в месяц
                                    </h3>
                                    <p className="pro-about-item-text__description">
                                        Каждый месяц мы будем давать вам
                                        бесплатный ограниченный доступ к одному
                                        из курсов на нашей платформе.
                                        Ограниченный доступ: курс доступен 1
                                        месяц, без дополнительных материалов и
                                        сопровождения мастера. Но если вы
                                        захотите получить полный функцианал
                                        данного курса, то сможете его преобрести
                                        со скидкой 50%
                                    </p>
                                </div>
                            </div>
                            <div className="pro-about-item">
                                <img
                                    src={`${process.env.REACT_APP_DOMEN}/all/news-pro.svg`}
                                    alt=""
                                    className="pro-about-item__img"
                                />
                                <div className="pro-about-item-text">
                                    <h3 className="pro-about-item-text__title">
                                        Возможность голосовать
                                    </h3>
                                    <p className="pro-about-item-text__description">
                                        Вы будете получать новости первым и
                                        сможете выбирать, какой курс будет
                                        следующим выпускаться на нашей платформе
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pro;
