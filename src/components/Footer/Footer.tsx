import React from "react";
import {Link, NavLink} from "react-router-dom";

import {Instagram, Vk, TikTok, Telegram, Youtube} from "../";

import Logo from "../../assets/images/logo.svg";
import LogoNagibin from "../../assets/images/nagibin-develompent.svg";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-block">
                        <div className="footer-block-logos">
                            <Link
                                to="/"
                                className="footer-block-logos-logo__link"
                            >
                                <img
                                    src={Logo}
                                    alt="HobJob"
                                    className="footer-block-logos-logo__img"
                                />
                            </Link>

                            {/* Hi, we are Nagibin's studio */}
                            <div className="nagibinstudio">
                                <img
                                    src={LogoNagibin}
                                    alt=""
                                    className="nagibinstudio__img"
                                    style={{
                                        width: "300px",
                                        userSelect: "none",
                                    }}
                                />
                            </div>
                        </div>

                        <div className="footer-block-contact">
                            <div className="footer-block-contact-email-wrapper">
                                <div className="footer-block-contact-email">
                                    <span className="subtitle footer-block-contact-email__subtitle">
                                        Служба поддержки
                                    </span>
                                    <a
                                        href="mailto:support@hobjob.ru"
                                        className="footer-block-contact-email__email"
                                    >
                                        support@hobjob.ru
                                    </a>
                                </div>
                                <div className="footer-block-contact-email">
                                    <span className="subtitle footer-block-contact-email__subtitle">
                                        Для вопросов и предложений
                                    </span>
                                    <a
                                        href="mailto:hello@hobjob.ru"
                                        className="footer-block-contact-email__email"
                                    >
                                        hello@hobjob.ru
                                    </a>
                                </div>
                            </div>
                            <div className="footer-block-contact-social">
                                <a
                                    href="https://vk.com/hobjob"
                                    className="footer-block-contact-social__link"
                                >
                                    <Vk />
                                </a>

                                <a
                                    href="https://www.instagram.com/hobjob.ru/"
                                    className="footer-block-contact-social__link"
                                >
                                    <Instagram />
                                </a>

                                <a
                                    href="https://www.youtube.com/channel/UCFEZn2Om4MucJT60ApT7y6w"
                                    className="footer-block-contact-social__link"
                                >
                                    <Youtube />
                                </a>
                                <a
                                    href="https://vm.tiktok.com/ZSJggxQqj/"
                                    className="footer-block-contact-social__link"
                                >
                                    <TikTok />
                                </a>

                                <a
                                    href="https://t.me/hobjob"
                                    className="footer-block-contact-social__link"
                                >
                                    <Telegram />
                                </a>
                            </div>
                        </div>

                        <nav className="footer-block-nav">
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                    `footer-block-nav__link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                Главная
                            </NavLink>

                            <NavLink
                                to="/course"
                                className={({isActive}) =>
                                    `footer-block-nav__link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                Курсы
                            </NavLink>

                            <NavLink
                                to="/magazine"
                                className={({isActive}) =>
                                    `footer-block-nav__link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                Журнал
                            </NavLink>

                            <a
                                href={`${process.env.REACT_APP_DOMEN_MASTERS_SERVICES}`}
                                className="footer-block-nav__link"
                            >
                                Выложить курс
                            </a>
                        </nav>
                    </div>
                    <div className="footer-block footer-block-subinfo">
                        <div className="footer-block-subinfo-block">
                            <span className="footer-block-subinfo-block__span">
                                © HobJob {new Date().getFullYear()}
                            </span>
                        </div>
                        <div className="footer-block-subinfo-block">
                            <NavLink
                                to="/regulations"
                                className={({isActive}) =>
                                    `footer-block-subinfo-block__link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                Правила пользования Платформой
                            </NavLink>
                            <NavLink
                                to="/policy"
                                className={({isActive}) =>
                                    `footer-block-subinfo-block__link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                Политика конфиденциальности
                            </NavLink>
                            <NavLink
                                to="/public-offer"
                                className={({isActive}) =>
                                    `footer-block-subinfo-block__link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                Публичная оферта
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
