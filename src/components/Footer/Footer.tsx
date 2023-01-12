import React from "react";
import {Link, NavLink} from "react-router-dom";

import {Instagram, TikTok, Telegram, Youtube, ReadDzen, ReadVk} from "../";

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
                                <a
                                    href="mailto:support@hobjob.ru"
                                    className="footer-block-contact-email"
                                >
                                    <span className="subtitle footer-block-contact-email__subtitle">
                                        Служба поддержки
                                    </span>
                                    <span className="footer-block-contact-email__email">
                                        support@hobjob.ru
                                    </span>
                                </a>
                                <a
                                    href="mailto:hello@hobjob.ru"
                                    className="footer-block-contact-email"
                                >
                                    <span className="subtitle footer-block-contact-email__subtitle">
                                        Для вопросов и предложений
                                    </span>
                                    <span className="footer-block-contact-email__email">
                                        hello@hobjob.ru
                                    </span>
                                </a>
                            </div>
                            <div className="footer-block-contact-socials">
                                <a
                                    href={process.env.REACT_APP_SOCIALS_INST}
                                    className="footer-block-contact-socials__link"
                                >
                                    <Instagram />
                                </a>

                                <a
                                    href={process.env.REACT_APP_SOCIALS_YOUTUBE}
                                    className="footer-block-contact-socials__link"
                                >
                                    <Youtube />
                                </a>
                                <a
                                    href={process.env.REACT_APP_SOCIALS_TIKTOK}
                                    className="footer-block-contact-socials__link"
                                >
                                    <TikTok />
                                </a>

                                <a
                                    href={
                                        process.env.REACT_APP_SOCIALS_TELEGRAM
                                    }
                                    className="footer-block-contact-socials__link"
                                >
                                    <Telegram />
                                </a>
                            </div>

                            <div className="footer-block-contact-socials-read">
                                <ReadDzen />
                                <ReadVk />
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
