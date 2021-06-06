import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import queryString from "query-string";

import {fetchCourses, setCoursesFilters} from "../redux/actions/courses";

import {ShopFiltersTop, ShopFiltersCategories, ShopBlock} from "../components/";

const Shop = ({
    history: {
        location: {search},
    },
}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {items, isLoadedAllCourses, filters} = useSelector(
        ({courses}) => courses
    );
    const {cart} = useSelector(({cart}) => cart);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        const newFilters = {
            categories: {},
            search: "",
        };

        const parseQuery = queryString.parse(search, {
            arrayFormat: "comma",
        });

        if (parseQuery.category) {
            parseQuery.category.map(
                (item) => (newFilters.categories[item] = item)
            );
        }

		if (parseQuery.q !== "") {
            newFilters.search = parseQuery.q;
        }

        dispatch(setCoursesFilters(newFilters));
    }, []);

    React.useEffect(() => {
        const arrayCategories = [];

        Object.keys(filters.categories).map((key) => {
            arrayCategories.push(filters.categories[key]);
        });

        const query = queryString.stringify(
            {
                q: filters.search,
                category: arrayCategories,
            },
            {arrayFormat: "comma", skipNull: true, skipEmptyString: true}
        );

        history.push(`/shop/?${query}`);

        dispatch(fetchCourses(query));
    }, [Object.keys(filters.categories).length, filters.search]);

    return (
        <section className="shop">
            <div className="container">
                <div className="shop-wrapper">
                    <h2 className="title__mb shop__title">Магазин курсов</h2>

                    <ShopFiltersTop />

                    <ShopFiltersCategories />

                    {isLoadedAllCourses ? (
                        <div className="shop-block-wrapper">
                            {items.map((item, index) => (
                                <ShopBlock
                                    {...item}
                                    cartItems={cart}
                                    key={`shop-block-${index}`}
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default Shop;
