import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {sendLogout} from "../../redux/actions/logout";
import {fetchUserInfo} from "../../redux/actions/user";
import {fetchMasters} from "../../redux/actions/masters";
import {fetchCategories} from "../../redux/actions/categories";

import {HeaderMenu, HeaderModalMenu} from "../";

import Logo from "../../assets/images/logo.svg";

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);
    const masters = useTypedSelector(({masters}) => masters.items);
    const categories = useTypedSelector(({categories}) => categories.items);

    const [modalMenuState, setModalMenuState] = React.useState<boolean>(false);
    const [modalMenuAnimationState, setModalMenuAnimationState] =
        React.useState<boolean>(false);
    const [stateCookies, setStateCookies] = React.useState<boolean>(false);
    const [headerUserMenu, setHeaderUserMenu] = React.useState<boolean>(false);
    const [headerUserMenuAnimateClose, setHeaderUserMenuAnimateClose] =
        React.useState<boolean>(false);

    const HeaderModalMenuRef = React.useRef<HTMLDivElement>(null);
    const headerUserMenuRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.body.addEventListener("click", handHeaderModalMenu);
        document.body.addEventListener("click", handHeaderUserMenu);

        if (
            !Object.keys(userInfo).length &&
            localStorage.getItem("accessToken")
        ) {
            dispatch(fetchUserInfo());
        }

        if (!Object.keys(masters).length) {
            dispatch(fetchMasters());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }
    }, []);

    const openUserMenu = () => {
        setHeaderUserMenu(true);
    };

    const closeUserMenu = () => {
        setHeaderUserMenuAnimateClose(true);

        setTimeout(() => {
            setHeaderUserMenuAnimateClose(false);
            setHeaderUserMenu(false);
        }, 180);
    };

    const handHeaderUserMenu = (e: Event) => {
        if (e.target !== headerUserMenuRef.current) {
            closeUserMenu();
        }
    };

    const clickLogout = () => {
        dispatch(sendLogout());
    };

    const openModalMenu = () => {
        document.body.style.overflow = "hidden";
        setModalMenuState(true);
    };

    const closeModalMenu = () => {
        setModalMenuAnimationState(true);
        document.body.style.overflow = "visible";

        setTimeout(() => {
            setModalMenuState(false);
            setModalMenuAnimationState(false);
        }, 180);
    };

    const handHeaderModalMenu = (e: Event) => {
        if (e.target === HeaderModalMenuRef.current) {
            closeModalMenu();
        }
    };

    const setCookiesClick = () => {
        localStorage.setItem("cookie", "true");
        setStateCookies(true);
    };

    return (
        <>
            {modalMenuState ? (
                <HeaderModalMenu
                    HeaderModalMenuRef={HeaderModalMenuRef}
                    closeModalMenu={closeModalMenu}
                    modalMenuAnimationState={modalMenuAnimationState}
                    clickLogout={clickLogout}
                    isLogin={isLoadedUserInfo}
                />
            ) : null}

            {localStorage.getItem("cookie") || stateCookies ? null : (
                <div className="cookie">
                    <h4 className="cookie__title">
                        Мы используем файлы cookie
                    </h4>
                    <button
                        className="btn-small-round"
                        onClick={setCookiesClick}
                    >
                        Принять
                    </button>
                </div>
            )}

            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-right-block">
                            <Link to="/" className="header-logo__link">
                                <img
                                    src={Logo}
                                    alt="HobJob"
                                    className="header-logo__img"
                                />
                            </Link>

                            <HeaderMenu />
                        </div>

                        <nav className="header-left-block">
                            {isLoadedUserInfo ? (
                                <div className="header-user">
                                    <div className="header-user-nav">
                                        <NavLink
                                            to="/go/training"
                                            className="header-user-nav__link"
                                            activeClassName="header-user-nav__link active"
                                        >
                                            Мое обучение
                                        </NavLink>
                                    </div>

                                    {document.documentElement.clientWidth >
                                    1400 ? (
                                        <div
                                            onClick={openUserMenu}
                                            ref={headerUserMenuRef}
                                            className={`header-user-avatar ${
                                                headerUserMenu ? "active" : ""
                                            }`}
                                            style={{
                                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${userInfo.avatar}")`,
                                            }}
                                        ></div>
                                    ) : (
                                        <div
                                            className="header-user-avatar"
                                            style={{
                                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${userInfo.avatar}")`,
                                            }}
                                            onClick={openModalMenu}
                                        ></div>
                                    )}

                                    {headerUserMenu ? (
                                        <div
                                            className={`header-user-menu ${
                                                headerUserMenuAnimateClose
                                                    ? "close"
                                                    : ""
                                            }`}
                                        >
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
                                <a
                                    href="/go/login"
                                    className="header-login__link"
                                >
                                    Войти в личный кабинет
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
                            )}

                            <div
                                className="header-menu-button"
                                onClick={openModalMenu}
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
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
