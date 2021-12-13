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
    );
});

export default HeaderMenu;
