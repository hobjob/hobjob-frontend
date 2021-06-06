import React from "react";
import { Link, NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';

import {DOMEN} from "../../api";

const Header = () => {
	const {cart} = useSelector(({cart}) => cart);

    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <Link to="/" className="header-logo__link">
                        <img
                            src={`${DOMEN}/all/logo.svg`}
                            alt="HobJob"
                            className="header-logo__img"
                        />
                    </Link>

                    <nav className="header-nav">
                        <NavLink
                            to="/shop"
                            className="header-nav__link"
                            activeClassName="header-nav__link active"
                        >
                            Магазин курсов
                        </NavLink>
                        <NavLink
                            to="/pro"
                            className="header-nav__link"
                            activeClassName="header-nav__link active"
                        >
                            Pro аккаунт
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="header-nav__link"
                            activeClassName="header-nav__link active"
                        >
                            О HobJob
                        </NavLink>
                        <NavLink
                            to="/masters"
                            className="header-nav__link"
                            activeClassName="header-nav__link active"
                        >
                            Для мастеров
                        </NavLink>
                        <NavLink
                            to="/magazine"
                            className="header-nav__link"
                            activeClassName="header-nav__link active"
                        >
                            Журнал
                        </NavLink>
                    </nav>

                    <nav className="header-left">
                        <NavLink
                            to="/cart"
                            className="header-nav__link"
                            activeClassName="header-nav__link active"
                        >
                            Корзина ({Object.keys(cart).length})
                        </NavLink>

                        {/* <div className="header-user">
                            <div className="header-user-avatar-arrow">
                                <div
                                    className="header-user-avatar"
                                    style="
                                        background-image: url(https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80);
                                    "
                                ></div>
                                <div className="header-user-arrow">
                                    <svg
                                        width="18"
                                        height="10"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line
                                            x1="0.353553"
                                            y1="0.646447"
                                            x2="8.83883"
                                            y2="9.13173"
                                            stroke="#000"
                                        />
                                        <line
                                            x1="8.657"
                                            y1="8.6362"
                                            x2="17.1423"
                                            y2="0.636265"
                                            stroke="#000"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="header-user-menu">
                                <Link to="#" className="header-user-menu__link"
                                    >Мои курсы</Link
                                >
                                <Link to="#" className="header-user-menu__link"
                                    >Настройки</Link
                                >
                                <Link to="#" className="header-user-menu__link"
                                    >Партнёрская программа</Link
                                >
                                <Link to="#" className="header-user-menu__link"
                                    >Выйти</Link
                                >
                            </div>
                        </div> */}

                        <Link to="#" className="header-login__link">
                            Войти
                            <svg
                                width="21"
                                height="10"
                                viewBox="0 0 21 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.4596 5.45962C20.7135 5.20578 20.7135 4.79422 20.4596 4.54038L16.323 0.403806C16.0692 0.149965 15.6576 0.149965 15.4038 0.403806C15.15 0.657647 15.15 1.0692 15.4038 1.32304L19.0808 5L15.4038 8.67696C15.15 8.9308 15.15 9.34235 15.4038 9.59619C15.6576 9.85003 16.0692 9.85003 16.323 9.59619L20.4596 5.45962ZM0 5.65H20V4.35H0V5.65Z"
                                    fill="#D89350"
                                />
                            </svg>
                        </Link>

                        <div className="header-menu-button">
                            <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24.4792 0H0.52085C0.23335 0 0 0.23335 0 0.52085C0 0.80835 0.23335 1.0417 0.52085 1.0417H24.4792C24.7667 1.0417 25 0.80835 25 0.52085C25 0.23335 24.7667 0 24.4792 0Z"
                                    fill="black"
                                />
                                <path
                                    d="M24.4792 7.29166H0.52085C0.23335 7.29166 0 7.52501 0 7.81251C0 8.10001 0.23335 8.33336 0.52085 8.33336H24.4792C24.7667 8.33336 25 8.10001 25 7.81251C25 7.52501 24.7667 7.29166 24.4792 7.29166Z"
                                    fill="black"
                                />
                                <path
                                    d="M24.4792 14.5833H0.52085C0.23335 14.5833 0 14.8166 0 15.1041C0 15.3916 0.23335 15.625 0.52085 15.625H24.4792C24.7667 15.625 25 15.3916 25 15.1041C25 14.8166 24.7667 14.5833 24.4792 14.5833Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </nav>
				</div>
            </div>
        </header>
    );
};

export default Header;
