import React from "react";
import {Link, NavLink} from "react-router-dom";

interface HeaderModalMenuProps {
    HeaderModalMenuRef: React.RefObject<HTMLDivElement>;
    modalMenuAnimationState: boolean;
    isLogin: boolean;
    userAvatar: string;

    closeModalMenu: () => void;
    clickLogout: () => void;
}

const HeaderModalMenu: React.FC<HeaderModalMenuProps> = ({
    HeaderModalMenuRef,
    modalMenuAnimationState,
    closeModalMenu,
    clickLogout,
    isLogin,
    userAvatar,
}) => {
    return (
        <div
            className={`header-modal-menu-wrapper ${
                modalMenuAnimationState ? "hidden" : ""
            }`}
            ref={HeaderModalMenuRef}
        >
            <div className="header-modal-menu-content">
                <div
                    className="header-modal-menu-content-close"
                    onClick={closeModalMenu}
                >
                    <svg
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="30" cy="30" r="30" fill="white" />
                        <path
                            d="M32.0159 30.0196L43.397 18.6879C43.9426 18.1472 43.9426 17.2718 43.397 16.7325C42.8527 16.1917 41.9686 16.1917 41.4244 16.7325L30.0529 28.0544L18.5765 16.5637C18.0323 16.0175 17.1482 16.0175 16.6039 16.5637C16.0597 17.1114 16.0597 17.9978 16.6039 18.5441L28.0721 30.0265L16.5625 41.4854C16.0182 42.0261 16.0182 42.9015 16.5625 43.4408C17.1068 43.9815 17.9908 43.9815 18.5351 43.4408L30.035 31.9916L41.4658 43.4367C42.0101 43.9829 42.8942 43.9829 43.4384 43.4367C43.9827 42.889 43.9827 42.0026 43.4384 41.4563L32.0159 30.0196Z"
                            fill="black"
                        />
                    </svg>
                </div>

                <nav className="header-modal-menu-content-nav">
                    <div className="header-modal-menu-content-nav-block-main">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `header-modal-menu-content-nav-block-main__link ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeModalMenu}
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to="/course"
                            className={({isActive}) =>
                                `header-modal-menu-content-nav-block-main__link ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeModalMenu}
                        >
                            Курсы
                        </NavLink>
                        <NavLink
                            to="/magazine"
                            className={({isActive}) =>
                                `header-modal-menu-content-nav-block-main__link ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeModalMenu}
                        >
                            Журнал
                        </NavLink>

                        <a
                            href={`${process.env.REACT_APP_DOMEN_MASTERS_SERVICES}`}
                            className="header-modal-menu-content-nav-block-main__link"
                            onClick={closeModalMenu}
                        >
                            Выложить курс
                        </a>
                    </div>

                    <div className="header-modal-menu-content-nav-block-user">
                        {isLogin ? (
                            <>
                                <NavLink
                                    to="/go/training"
                                    className={({isActive}) =>
                                        `header-modal-menu-content-nav-block-user__link ${
                                            isActive ? "active" : ""
                                        }`
                                    }
                                    onClick={closeModalMenu}
                                >
                                    Мое обучение
                                </NavLink>
                                <NavLink
                                    to="/go/cabinet"
                                    className={({isActive}) =>
                                        `header-modal-menu-content-nav-block-user__link ${
                                            isActive ? "active" : ""
                                        }`
                                    }
                                    onClick={closeModalMenu}
                                >
                                    Мой профиль
                                    <div
                                        className="header-modal-menu-content-nav-block-user__link-image"
                                        style={{
                                            backgroundImage: `url("${userAvatar}")`,
                                        }}
                                    ></div>
                                </NavLink>
                                <NavLink
                                    to="/go/referrals"
                                    className={({isActive}) =>
                                        `header-modal-menu-content-nav-block-user__link ${
                                            isActive ? "active" : ""
                                        }`
                                    }
                                    onClick={closeModalMenu}
                                >
                                    Пригласи друга
                                </NavLink>
                                <a
                                    onClick={clickLogout}
                                    className="header-modal-menu-content-nav-block-user__link"
                                >
                                    Выйти
                                </a>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/go/login"
                                    className="header-modal-menu-content-nav-block-user__link"
                                    onClick={closeModalMenu}
                                >
                                    Войти
                                </Link>
                                <Link
                                    to="/go/register"
                                    className="header-modal-menu-content-nav-block-user__link"
                                    onClick={closeModalMenu}
                                >
                                    Зарегистрироваться
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderModalMenu;
