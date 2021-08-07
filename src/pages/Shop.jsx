import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import queryString from "query-string";
import {Helmet} from "react-helmet";

import {fetchCourses, setCoursesFilters} from "../redux/actions/courses";
import {addCourseCart} from "../redux/actions/cart";

import {
    ShopFiltersTop,
    ShopFiltersCategories,
    ShopBlock,
    ShopNotFound,
    Loader,
} from "../components/";

const Shop = ({
    history: {
        location: {search},
    },
}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {user} = useSelector(({user}) => user);
    const {items, isLoadedAllCourses, filters} = useSelector(
        ({courses}) => courses
    );
    const categories = useSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const {cart} = useSelector(({cart}) => cart);
    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        const newFilters = {
            categories: {},
            search: "",
            sale: null,
            masters: {},
            times: {},
        };

        const parseQuery = queryString.parse(search, {
            arrayFormat: "comma",
        });

        if (parseQuery.category) {
            if (typeof parseQuery.category === "object") {
                parseQuery.category.map(
                    (item) => (newFilters.categories[item] = item)
                );
            } else {
                newFilters.categories[parseQuery.category] =
                    parseQuery.category;
            }
        }

        if (parseQuery.q !== undefined) {
            newFilters.search = parseQuery.q;
        }

        if (parseQuery.sale !== undefined) {
            newFilters.sale = parseQuery.sale;
        }

        if (parseQuery.masters) {
            if (typeof parseQuery.masters === "object") {
                parseQuery.masters.map(
                    (item) => (newFilters.masters[item] = item)
                );
            } else {
                newFilters.masters[parseQuery.masters] = parseQuery.masters;
            }
        }

        if (parseQuery.times) {
            if (typeof parseQuery.times === "object") {
                parseQuery.times.map((item) => (newFilters.times[item] = item));
            } else {
                newFilters.times[parseQuery.times] = parseQuery.times;
            }
        }

        dispatch(setCoursesFilters(newFilters));
    }, []);

    React.useEffect(() => {
        const arrayCategories = [];
        const arrayMasters = [];
        const arrayTimes = [];

        Object.keys(filters.categories).map((key) => {
            arrayCategories.push(filters.categories[key]);
        });

        Object.keys(filters.masters).map((key) => {
            arrayMasters.push(filters.masters[key]);
        });

        Object.keys(filters.times).map((key) => {
            arrayTimes.push(filters.times[key]);
        });

        const query = queryString.stringify(
            {
                q: filters.search,
                category: arrayCategories,
                sale: filters.sale,
                masters: arrayMasters,
                times: arrayTimes,
            },
            {arrayFormat: "comma", skipNull: true, skipEmptyString: true}
        );

        history.push(`/shop/?${query}`);

        dispatch(fetchCourses(query));
    }, [
        Object.keys(filters.categories).length,
        filters.search,
        filters.sale,
        Object.keys(filters.masters).length,
        Object.keys(filters.times).length,
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
            <Helmet>
                <title>Магазин курсов - HobJob</title>
            </Helmet>
            <section className="shop">
                <div className="container">
                    <div className="shop-wrapper">
                        <h2 className="title__mb shop__title">
                            Магазин курсов
                            <span>
                                ({isLoadedAllCourses ? items.length : "-"})
                            </span>
                        </h2>

                        <ShopFiltersTop />

                        <ShopFiltersCategories />

                        {isLoadedAllCourses &&
                        isLoadedMasters &&
                        isLoadedAllCategories ? (
                            items.length ? (
                                <div className="shop-block-wrapper">
                                    {items.map((item, index) => (
                                        <ShopBlock
                                            {...item}
                                            onClickAddCourseCart={
                                                onClickAddCourseCart
                                            }
                                            checkDeclension={checkDeclension(
                                                item.transitTime,
                                                ["час", "часа", "часов"]
                                            )}
                                            pro={user.pro}
                                            proPrice={
                                                item.price -
                                                (item.price / 100) * 20
                                            }
                                            cartItems={cart}
                                            key={`shop-block-${index}`}
                                            masters={masters}
                                            categories={categories}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <ShopNotFound />
                            )
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
