import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {categories} from "../../../categories";

import {setCoursesFiltersCategories} from "../../../redux/actions/courses";

const ShopFiltersCategories = () => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({courses}) => courses);

    const onClickCategory = (category) => {
        dispatch(setCoursesFiltersCategories(category));
    };

    return (
        <div className="shop-btn-wrapper">
            <button
                className={`shop__btn ${
                    !Object.keys(filters.categories).length ? "active" : ""
                }`}
                onClick={() => onClickCategory("all")}
            >
                Все категории
            </button>

            {categories.map((item, index) => (
                <button
                    className={`shop__btn ${
                        filters.categories[item.category] ? "active" : ""
                    }`}
                    key={`shop-btn-filters-${index}`}
                    onClick={() => onClickCategory(item.category)}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default ShopFiltersCategories;
