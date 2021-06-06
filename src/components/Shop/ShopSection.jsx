import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Link} from "react-router-dom";

import {fetchCourses} from "../../redux/actions/courses";
import {addCourseCart} from "../../redux/actions/cart";
import ShopBlock from "./ShopBlock";

const ShopSection = ({title}) => {
    const dispatch = useDispatch();

    const {items} = useSelector(({courses}) => courses);
    const {cart} = useSelector(({cart}) => cart);

    React.useEffect(() => {
        if (!items.length) {
            dispatch(fetchCourses());
        }
    }, []);

    const onClickAddCourseCart = (obj) => {
        dispatch(addCourseCart(obj));
    };

    return (
        <section className="shop-section">
            <div className="container">
                <div className="shop-section-wrapper">
                    <h2 className="title__mb shop-section__title">{title}</h2>
                    <div className="shop-section-block-wrapper">
                        {items.map((item, index) => (
                            <ShopBlock
                                {...item}
                                onClickAddCourseCart={onClickAddCourseCart}
                                cartItems={cart}
                                key={`shop-section-block-${index}`}
                            />
                        ))}
                    </div>

                    <div className="shop-section-btn">
                        <Link
                            to="/shop"
                            className="btn-arrow shop-section__btn"
                        >
                            Показать еще
                            <svg
                                width="31"
                                height="12"
                                viewBox="0 0 31 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989592 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z"
                                    fill="#D89350"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopSection;
