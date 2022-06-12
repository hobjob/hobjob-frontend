import React from "react";
import {NavLink} from "react-router-dom";

const HeaderMenu: React.FC = () => {
    return (
        <nav className="header-nav">
            <NavLink
                to="/"
                className={({isActive}) =>
                    `header-nav__link ${isActive ? "active" : ""}`
                }
            >
                Главная
            </NavLink>
            <NavLink
                to="/course"
                className={({isActive}) =>
                    `header-nav__link ${isActive ? "active" : ""}`
                }
            >
                Курсы
            </NavLink>
            <NavLink
                to="/magazine"
                className={({isActive}) =>
                    `header-nav__link ${isActive ? "active" : ""}`
                }
            >
                Журнал
            </NavLink>

            <a
                href={`${process.env.REACT_APP_DOMEN_MASTERS_SERVICES}`}
                className="header-nav__link bg"
            >
                Стать мастером
            </a>
        </nav>
    );
};

export default HeaderMenu;
