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
                Для мастеров
            </a>
        </nav>
    );
});

export default HeaderMenu;
