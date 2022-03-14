import React from "react";
import {NavLink} from "react-router-dom";

const HeaderMenu = React.memo(() => {
    return (
        <nav className="header-nav">
            <NavLink
                to="/shop"
                className="header-nav__link"
                activeClassName="header-nav__link active"
            >
                Курсы
            </NavLink>
            <a
                href={`${process.env.REACT_APP_DOMEN_MASTERS_SERVICES}`}
                className="header-nav__link"
            >
                Для мастеров
            </a>
            <NavLink
                to="/magazine"
                className="header-nav__link"
                activeClassName="header-nav__link active"
            >
                Журнал
            </NavLink>
        </nav>
    );
});

export default HeaderMenu;
