import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {sendLogout} from "../../redux/actions/logout";
import {fetchUser} from "../../redux/actions/user";
import {fetchMasters} from "../../redux/actions/masters";
import {fetchCategories} from "../../redux/actions/categories";

import {HeaderModalMenu} from "../";

const Header = () => {
    const dispatch = useDispatch();

    const {user, isLoaded} = useSelector(({user}) => user);
    const masters = useSelector(({masters}) => masters.items);
    const categories = useSelector(({categories}) => categories.items);
    const {cart} = useSelector(({cart}) => cart);

    const [modalMenuState, setModalMenuState] = React.useState(false);
    const [modalMenuAnimationState, setModalMenuAnimationState] =
        React.useState(false);
    const [stateCookies, setStateCookies] = React.useState(false);
    const [headerUserMenu, setHeaderUserMenu] = React.useState(false);
    const [headerUserMenuAnimateClose, setHeaderUserMenuAnimateClose] =
        React.useState(false);

    const HeaderModalMenuRef = React.useRef();
    const headerUserMenuRef = React.useRef();

    React.useEffect(() => {
        document.body.addEventListener("click", handHeaderModalMenu);
        document.body.addEventListener("click", handHeaderUserMenu);

        if (!Object.keys(user).length) {
            dispatch(fetchUser());
        }

        if (!Object.keys(masters).length) {
            dispatch(fetchMasters());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }
    }, []);

    const toggleUserMenu = () => {
        setHeaderUserMenuAnimateClose(true);

        setTimeout(() => {
            setHeaderUserMenuAnimateClose(false);
            setHeaderUserMenu(!headerUserMenu);
        }, 190);
    };

    const handHeaderUserMenu = (e) => {
        if (e.target !== headerUserMenuRef.current) {
            setHeaderUserMenuAnimateClose(true);

            setTimeout(() => {
                setHeaderUserMenuAnimateClose(false);
                setHeaderUserMenu(false);
            }, 190);
        }
    };

    const clickLogout = () => {
        dispatch(sendLogout());
    };

    const onClickModalMenu = () => {
        setModalMenuState(!modalMenuState);
    };

    const onClickCloseModalMenu = () => {
        setModalMenuAnimationState(true);

        setTimeout(() => {
            setModalMenuState(false);
            setModalMenuAnimationState(false);
        }, 200);
    };

    if (modalMenuState === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }

    const handHeaderModalMenu = (e) => {
        if (e.target === HeaderModalMenuRef.current) {
            onClickCloseModalMenu();
        }
    };

    const setCookiesClick = () => {
        localStorage.setItem("cookies", true);
        setStateCookies(true);
    };

    return (
        <>
            {modalMenuState ? (
                <HeaderModalMenu
                    isLoaded={isLoaded}
                    HeaderModalMenuRef={HeaderModalMenuRef}
                    onClickCloseModalMenu={onClickCloseModalMenu}
                    modalMenuAnimationState={modalMenuAnimationState}
                    clickLogout={clickLogout}
                />
            ) : null}

            {localStorage.getItem("cookies") || stateCookies ? null : (
                <div className="cookies">
                    <h4 className="cookies__title">
                        Мы используем файлы Cookies
                    </h4>
                    <button
                        className="btn-small-round"
                        onClick={setCookiesClick}
                    >
                        Хорошо
                    </button>
                </div>
            )}

            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <Link to="/" className="header-logo__link">
                            <img
                                src={`${process.env.REACT_APP_DOMEN}/all/logo.svg`}
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
                            {/* <NavLink
                                to="/masters-about"
                                className="header-nav__link"
                                activeClassName="header-nav__link active"
                            >
                                Для мастеров
                            </NavLink> */}
                            <NavLink
                                to="/magazine"
                                className="header-nav__link"
                                activeClassName="header-nav__link active"
                            >
                                Журнал
                            </NavLink>
                        </nav>

                        {!isLoaded ? (
                            <nav className="header-left">
                                <NavLink
                                    to="/cart"
                                    className="header-nav__link header-nav-cart__link"
                                    activeClassName="header-nav__link header-nav-cart__link active"
                                >
                                    Корзина ({Object.keys(cart).length})
                                </NavLink>

                                <a
                                    href="/go/login"
                                    className="header-login__link"
                                >
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
                                </a>

                                <div
                                    className="header-menu-button"
                                    onClick={onClickModalMenu}
                                >
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
                        ) : (
                            <nav className="header-left">
                                <NavLink
                                    to="/cart"
                                    className="header-nav__link header-nav-cart__link"
                                    activeClassName="header-nav__link header-nav-cart__link active"
                                >
                                    Корзина ({Object.keys(cart).length})
                                </NavLink>
                                {document.documentElement.clientWidth > 1200 ? (
                                    <div className="header-user">
                                        <div
                                            onClick={toggleUserMenu}
                                            ref={headerUserMenuRef}
                                            className={`header-user-avatar ${
                                                headerUserMenu ? "active" : ""
                                            }`}
                                            style={{
                                                backgroundImage: `url("${process.env.REACT_APP_DOMEN}/${user.avatar}")`,
                                            }}
                                        ></div>
                                        {headerUserMenu ? (
                                            <div
                                                className={`header-user-menu ${
                                                    headerUserMenuAnimateClose
                                                        ? "close"
                                                        : ""
                                                }`}
                                            >
                                                <NavLink
                                                    to="/go/training"
                                                    className="header-user-menu__link"
                                                >
                                                    Мое обучение
                                                </NavLink>

                                                <NavLink
                                                    to="/go/cabinet"
                                                    className="header-user-menu__link"
                                                >
                                                    Мой профиль
                                                </NavLink>

                                                <NavLink
                                                    to="/go/referrals"
                                                    className="header-user-menu__link"
                                                >
                                                    Пригласи друга
                                                </NavLink>

                                                {user.master === "confirmed" ? (
                                                    <NavLink
                                                        to="/go/master"
                                                        className="header-user-menu__link"
                                                    >
                                                        Для мастера
                                                    </NavLink>
                                                ) : null}

                                                <span
                                                    onClick={clickLogout}
                                                    className="header-user-menu__link"
                                                >
                                                    Выйти
                                                </span>
                                            </div>
                                        ) : null}
                                    </div>
                                ) : (
                                    <div
                                        className="header-user"
                                        onClick={onClickModalMenu}
                                    >
                                        <div
                                            className="header-user-avatar"
                                            style={{
                                                backgroundImage: `url("${process.env.REACT_APP_DOMEN}/${user.avatar}")`,
                                            }}
                                        ></div>
                                    </div>
                                )}
                                <div
                                    className="header-menu-button"
                                    onClick={onClickModalMenu}
                                >
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
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
