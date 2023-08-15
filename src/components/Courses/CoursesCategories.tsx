import React from "react";
import {useDispatch} from "react-redux";
import {animateScroll} from "react-scroll";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {setCoursesFiltersCategories} from "../../redux/actions/courses";

const CoursesFiltersCategories: React.FC = () => {
    const dispatch = useDispatch();

    const {filters} = useTypedSelector(({courses}) => courses);
    const {items} = useTypedSelector(({categories}) => categories);

    const onClickCategory = (category: string) => {
        animateScroll.scrollTo(0, {duration: 0});

        dispatch(setCoursesFiltersCategories(category));
    };

    return (
        <div className="courses-categories">
            {Object.keys(items).map((key, index) => (
                <button
                    className={`category-btn courses-categories__btn ${
                        filters.categories[items[key].transfer] ? "active" : ""
                    }`}
                    key={`courses-btn-filters-${index}`}
                    onClick={() => onClickCategory(items[key].transfer)}
                >
                    {items[key].title}
                </button>
            ))}

            <button
                className={`category-btn courses-categories__btn ${
                    !Object.keys(filters.categories).length ? "active" : ""
                }`}
                onClick={() => onClickCategory("all")}
            >
                Все направления
            </button>
        </div>
    );
};

export default CoursesFiltersCategories;
