import React from "react";
import {NavLink} from "react-router-dom";

const HeaderMenu = React.memo(() => {
    const checkActive = (match, location) => {
        if (!location) return false;
        const {pathname} = location;

        return pathname === "/";
	};
	
    return (
        <nav className="header-nav">
            <NavLink
                to="/"
                className="header-nav__link"
                activeClassName="header-nav__link active"
                isActive={checkActive}
            >
                Главная
            </NavLink>
            <NavLink
                to="/course"
                className="header-nav__link"
                activeClassName="header-nav__link active"
            >
                Курсы
            </NavLink>
            <NavLink
                to="/magazine"
                className="header-nav__link"
                activeClassName="header-nav__link active"
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
});

export default HeaderMenu;
