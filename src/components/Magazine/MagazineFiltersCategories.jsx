import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setPostsFiltersCategories} from "../../redux/actions/posts";

const MagazineFiltersCategories = () => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({posts}) => posts);
    const {items} = useSelector(
        ({categories}) => categories
    );

    const onClickCategory = (category) => {
        dispatch(setPostsFiltersCategories(category));
    };

    return (
        <div className="magazine-filters-categories">
            <button
                className={`magazine__btn ${
                    !Object.keys(filters.categories).length ? "active" : ""
                }`}
                onClick={() => onClickCategory("all")}
            >
                Все направления
            </button>

            {Object.keys(items).map((key, index) => (
                <button
                    className={`magazine__btn ${
                        filters.categories[items[key].transfer] ? "active" : ""
                    }`}
                    key={`magazine-btn-filters-${index}`}
                    onClick={() => onClickCategory(items[key].transfer)}
                >
                    {items[key].title}
                </button>
            ))}
        </div>
    );
};

export default MagazineFiltersCategories;
