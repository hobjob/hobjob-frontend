import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setCoursesFiltersCategories} from "../../../redux/actions/courses";

import {CategoriesBtnLoader} from "../../";

const ShopFiltersCategories = () => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({courses}) => courses);
    const {items, isLoadedAllCategories} = useSelector(
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
            {isLoadedAllCategories
                ? Object.keys(items).map((key, index) => (
                      <button
                          className={`shop__btn ${
                              filters.categories[items[key].transfer]
                                  ? "active"
                                  : ""
                          }`}
                          key={`shop-btn-filters-${index}`}
                          onClick={() => onClickCategory(items[key].transfer)}
                      >
                          {items[key].title}
                      </button>
                  ))
                : Array(5)
                      .fill(0)
                      .map((_, index) => (
                          <CategoriesBtnLoader
                              key={`shop-categories-filters-btn-loader-${index}`}
                          />
                      ))}
        </div>
    );
};

export default ShopFiltersCategories;
