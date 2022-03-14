import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setCoursesFiltersCategories} from "../../../redux/actions/courses";

const ShopFiltersCategories = React.memo(() => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({courses}) => courses);
    const {items} = useSelector(
        ({categories}) => categories
    );

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
			
            {Object.keys(items).map((key, index) => (
                <button
                    className={`shop__btn ${
                        filters.categories[items[key].transfer] ? "active" : ""
                    }`}
                    key={`shop-btn-filters-${index}`}
                    onClick={() => onClickCategory(items[key].transfer)}
                >
                    {items[key].title}
                </button>
            ))}
        </div>
    );
});

export default ShopFiltersCategories;
