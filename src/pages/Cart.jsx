import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import NumberFormat from "react-number-format";
import {Helmet} from "react-helmet";

import {CartBlock, ShopSection, Loader} from "../components/";

import {removeCourseCart} from "../redux/actions/cart";
import {fetchCoursesArrayById} from "../redux/actions/courses";
import {sendCreateCoursesPayment} from "../redux/actions/payment";

const Cart = () => {
    const dispatch = useDispatch();

    const {cart} = useSelector(({cart}) => cart);
    const {itemsArrayById, isLoadedCoursesArrayById} = useSelector(
        ({courses}) => courses
    );
    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);

    const categories = useSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useSelector(
        ({categories}) => categories.isLoadedAllCategories
    );

    const {isSendCourses} = useSelector(({payment}) => payment);
    const {userInfo, isLoadedUserInfo} = useSelector(({user}) => user);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        dispatch(fetchCoursesArrayById(cart));
    }, [Object.keys(cart).length]);

    let totalPrice = 0;

    const removeCourse = (id) => {
        dispatch(removeCourseCart(id));
    };

    const createPayment = () => {
        const order = [];
        const coursesNew = [];

        Object.keys(cart).map((key) => order.push(cart[key]._id));
        Object.keys(userInfo.courses).map((key) =>
            coursesNew.push({...userInfo.courses[key]})
        );

        dispatch(
            sendCreateCoursesPayment(
                {
                    order,
                },
                {courses: coursesNew}
            )
        );
    };

    return (
        <>
            <Helmet>
                <title>Корзина - HobJob</title>
            </Helmet>

            {isLoadedCoursesArrayById &&
            isLoadedMasters &&
            isLoadedAllCategories ? (
                <section className="cart">
                    <div className="container">
                        <div className="cart-wrapper">
                            {Object.keys(cart).length ? (
                                <>
                                    <h2 className="title__mb cart__title">
                                        Корзина
                                        <span>
                                            ({Object.keys(cart).length})
                                        </span>
                                    </h2>

                                    <div className="cart-block-wrapper">
                                        {Object.keys(itemsArrayById).map(
                                            (key, index) => (
                                                <CartBlock
                                                    {...itemsArrayById[key]}
                                                    removeCourse={removeCourse}
                                                    key={`cart-block-${index}`}
                                                    masters={masters}
                                                    categories={categories}
                                                    pro={userInfo.pro}
                                                />
                                            )
                                        )}
                                    </div>

                                    <div className="cart-total">
                                        <div className="cart-total-text">
                                            <span className="cart-total__subtitle">
                                                Итого:
                                            </span>
                                            <h4 className="cart-total__title">
                                                {Object.keys(
                                                    itemsArrayById
                                                ).map((key) => {
                                                    if (userInfo.pro) {
                                                        totalPrice +=
                                                            itemsArrayById[key]
                                                                .price -
                                                            (itemsArrayById[key]
                                                                .price /
                                                                100) *
                                                                20;
                                                    } else {
                                                        totalPrice +=
                                                            itemsArrayById[key]
                                                                .price;
                                                    }
                                                })}
                                                {
                                                    <NumberFormat
                                                        value={totalPrice}
                                                        displayType={"text"}
                                                        thousandSeparator={" "}
                                                        renderText={(value) =>
                                                            value
                                                        }
                                                    />
                                                }
                                                ₽
                                            </h4>
                                        </div>
                                        <div className="cart-total-btn">
                                            {localStorage.getItem(
                                                "accessToken"
                                            ) && isLoadedUserInfo ? (
                                                <button
                                                    className={`btn-arrow cart-total__btn`}
                                                    onClick={createPayment}
                                                    disabled={isSendCourses}
                                                >
                                                    Оформить заказ
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
                                                </button>
                                            ) : (
                                                <a
                                                    href="/payment/courses/login"
                                                    className="btn-arrow cart-total__btn"
                                                >
                                                    Оформить заказ
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
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="cart-empty">
                                    <h2 className="title__mb cart-empty__title">
                                        Ваша корзина пуста. Выберете курс,
                                        который вам нравится
                                    </h2>

                                    <Link
                                        to="/shop"
                                        className="btn-arrow cart-empty__btn"
                                    >
                                        Перейти в магазин курсов
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
                            )}
                        </div>
                    </div>
                </section>
            ) : (
                <Loader />
            )}

            <ShopSection
                title="Вам может понравиться"
                description="Новые курсы добавляются каждый месяц"
            />
        </>
    );
};

export default Cart;
