import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {setPostsFiltersCategories} from "../../redux/actions/posts";

const MagazineFiltersCategories: React.FC = () => {
    const dispatch = useDispatch();

    const {filters} = useTypedSelector(({posts}) => posts);
    const {items} = useTypedSelector(({categories}) => categories);

    const onClickCategory = (category: string) => {
        dispatch(setPostsFiltersCategories(category));
    };

    return (
        <div className="magazine-filters-categories">
            <button
                className={`category-btn magazine__btn ${
                    !Object.keys(filters.categories).length ? "active" : ""
                }`}
                onClick={() => onClickCategory("all")}
            >
                Все направления
            </button>

            {Object.keys(items).map((key, index) => (
                <button
                    className={`category-btn magazine__btn ${
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
