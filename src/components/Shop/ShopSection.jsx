import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Link} from "react-router-dom";

import {fetchCoursesSection} from "../../redux/actions/courses";
import {addCourseCart} from "../../redux/actions/cart";
import {ShopBlock, Loader} from "../";

const ShopSection = ({title}) => {
    const dispatch = useDispatch();

    const [visibleSection, setVisibleSection] = React.useState(true);

    const {user, courses} = useSelector(({user}) => user);
    const {itemsSection, isLoadedSectionCourses} = useSelector(
        ({courses}) => courses
    );
    const {cart} = useSelector(({cart}) => cart);

    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);

    const categories = useSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useSelector(
        ({categories}) => categories.isLoadedAllCategories
    );

    React.useEffect(() => {
        if (!itemsSection.length) {
            dispatch(fetchCoursesSection());
        }
    }, []);

    React.useEffect(() => {
        if (
            document.querySelectorAll(".shop-block").length === 0 &&
            isLoadedSectionCourses &&
            isLoadedMasters &&
            isLoadedAllCategories
        ) {
            setVisibleSection(false);
        } else {
            setVisibleSection(true);
        }
    }, [
        document.querySelectorAll(".shop-block").length,
        isLoadedSectionCourses,
        isLoadedMasters,
        isLoadedAllCategories,
    ]);

    const onClickAddCourseCart = (obj) => {
        dispatch(addCourseCart(obj));
    };

    //склонение ["час", "часа", "часов"]
    const checkDeclension = (num, title) => {
        let result;

        if (num % 100 >= 5 && num % 100 <= 20) {
            result = num + " " + title[2];
        } else {
            if (num % 10 === 1) {
                result = num + " " + title[0];
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                result = num + " " + title[1];
            } else {
                result = num + " " + title[2];
            }
        }

        return result;
    };

    return (
        <>
            {isLoadedSectionCourses &&
            isLoadedMasters &&
            isLoadedAllCategories ? (
                visibleSection ? (
                    <section className="shop-section">
                        <div className="container">
                            <div className="shop-section-wrapper">
                                <h2 className="title__mb shop-section__title">
                                    {title}
                                </h2>
                                <div className="shop-section-block-wrapper">
                                    {Object.keys(itemsSection).map(
                                        (key, index) =>
                                            courses[itemsSection[key]._id] ||
                                            cart[
                                                itemsSection[key]._id
                                            ] ? null : (
                                                <ShopBlock
                                                    {...itemsSection[key]}
                                                    onClickAddCourseCart={
                                                        onClickAddCourseCart
                                                    }
                                                    checkDeclension={checkDeclension(
                                                        itemsSection[key]
                                                            .transitTime,
                                                        ["час", "часа", "часов"]
                                                    )}
                                                    pro={user.pro}
                                                    proPrice={
                                                        itemsSection[key]
                                                            .price -
                                                        (itemsSection[key]
                                                            .price /
                                                            100) *
                                                            20
                                                    }
                                                    cartItems={cart}
                                                    key={`shop-section-block-${index}`}
                                                    masters={masters}
                                                    categories={categories}
                                                />
                                            )
                                    )}
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
                ) : null
            ) : (
                <section className="shop-section">
                    <div className="container">
                        <div className="shop-section-wrapper">
                            <h2 className="title shop-section__title">
                                {title}
                            </h2>

                            <Loader />

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
            )}
        </>
    );
};

export default ShopSection;
