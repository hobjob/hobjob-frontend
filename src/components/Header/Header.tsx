import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {sendLogout} from "../../redux/actions/logout";

import {HeaderMenu, HeaderModalMenu} from "../";

import Logo from "../../assets/images/logo.svg";

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);

    const [modalMenuState, setModalMenuState] = React.useState<boolean>(false);
    const [modalMenuAnimationState, setModalMenuAnimationState] =
        React.useState<boolean>(false);
    const [headerUserMenu, setHeaderUserMenu] = React.useState<boolean>(false);
    const [headerUserMenuAnimateClose, setHeaderUserMenuAnimateClose] =
        React.useState<boolean>(false);

    const HeaderModalMenuRef = React.useRef<HTMLDivElement>(null);
    const headerUserMenuRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.body.addEventListener("click", handHeaderModalMenu);
        document.body.addEventListener("click", handHeaderUserMenu);
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

    const [state, setState] = React.useState<boolean>(true);

    const [prevScrollpos, setPrevScrollpos] = React.useState<number>(0);
    const [currentScrollPos, setCurrentScrollPos] = React.useState<number>(0);

    React.useEffect(() => {
        const wrapper = document.getElementById("wrapper");

        if (wrapper) {
            setPrevScrollpos(window.pageYOffset);

            document.body.onscroll = function () {
                setCurrentScrollPos(window.pageYOffset);

                if (prevScrollpos > currentScrollPos && currentScrollPos > 0) {
                    setState(true);
                } else if (currentScrollPos > 200) {
                    setState(false);
                }

                setPrevScrollpos(currentScrollPos);
            };
        }
    }, [currentScrollPos]);

    return (
        <>
            {modalMenuState ? (
                <HeaderModalMenu
                    HeaderModalMenuRef={HeaderModalMenuRef}
                    closeModalMenu={closeModalMenu}
                    modalMenuAnimationState={modalMenuAnimationState}
                    clickLogout={clickLogout}
                    isLogin={isLoadedUserInfo}
                    userAvatar={`${process.env.REACT_APP_IMAGE_DOMEN}/${userInfo.avatar.size_512}`}
                />
            ) : null}

            <header className={`header ${state ? "active" : ""} `}>
                <div className="header-wrapper">
                    <div className="header-left-block">
                        <Link to="/" className="header-logo__link">
                            <img
                                src={Logo}
                                alt="HobJob"
                                className="header-logo__img"
                            />
                        </Link>

                        <HeaderMenu />
                    </div>

                    <div className="header-right-block">
                        {isLoadedUserInfo ? (
                            <div className="header-user">
                                <div className="header-user-nav">
                                    <NavLink
                                        to="/go/training"
                                        className={({isActive}) =>
                                            `header-user-nav__link ${
                                                isActive ? "active" : ""
                                            }`
                                        }
                                    >
                                        Мое обучение
                                    </NavLink>
                                </div>

                                {document.documentElement.clientWidth > 1200 ? (
                                    <div
                                        onClick={openUserMenu}
                                        ref={headerUserMenuRef}
                                        className={`header-user-avatar ${
                                            headerUserMenu ? "active" : ""
                                        }`}
                                        style={{
                                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${userInfo.avatar.size_512}")`,
                                        }}
                                    ></div>
                                ) : (
                                    <div
                                        className="header-user-avatar"
                                        style={{
                                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${userInfo.avatar.size_512}")`,
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
                            <Link to="/go/login" className="btn header-login__link">
                                Войти
                                <svg
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M13.7438 10.7548H11.9374L11.9539 3.94334L2.16769 13.7296L0.891588 12.4535L10.6778 2.66723L3.86641 2.6838V0.877366H13.7438V10.7548Z" />
                                </svg>
                            </Link>
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
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
