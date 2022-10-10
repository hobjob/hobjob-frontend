import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {setCoursesFiltersCategories} from "../../../redux/actions/courses";

const ShopFiltersCategories: React.FC = () => {
    const dispatch = useDispatch();

    const {filters} = useTypedSelector(({courses}) => courses);
    const {items} = useTypedSelector(({categories}) => categories);

    const onClickCategory = (category: string) => {
        dispatch(setCoursesFiltersCategories(category));
    };

    return (
        <div className="shop-btn-wrapper">
            <button
                className={`category-btn shop__btn ${
                    !Object.keys(filters.categories).length ? "active" : ""
                }`}
                onClick={() => onClickCategory("all")}
            >
                Все направления
            </button>

            {Object.keys(items).map((key, index) => (
                <button
                    className={`category-btn shop__btn ${
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
};

export default ShopFiltersCategories;
