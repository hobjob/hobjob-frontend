import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const HeaderMenuCart = React.memo(() => {
    const {cart} = useSelector(({cart}) => cart);

    return (
        <NavLink
            to="/cart"
            className="header-nav__link header-nav-cart__link"
            activeClassName="header-nav__link header-nav-cart__link active"
        >
            Корзина ({Object.keys(cart).length})
        </NavLink>
    );
});

export default HeaderMenuCart;
