import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setMagazineFiltersCategories} from "../../redux/actions/magazine";

import {CategoriesBtnLoader} from "../";

const MagazineFiltersCategories = () => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({magazine}) => magazine);
    const {items, isLoadedAllCategories} = useSelector(
        ({categories}) => categories
    );

    const onClickCategory = (category) => {
        dispatch(setMagazineFiltersCategories(category));
    };

    return (
        <div className="magazine-filters-categories">
            <button
                className={`magazine__btn ${
                    !Object.keys(filters.categories).length ? "active" : ""
                }`}
                onClick={() => onClickCategory("all")}
            >
                Все категории
            </button>

            {isLoadedAllCategories
                ? Object.keys(items).map((key, index) => (
                      <button
                          className={`magazine__btn ${
                              filters.categories[items[key].category]
                                  ? "active"
                                  : ""
                          }`}
                          key={`magazine-btn-filters-${index}`}
                          onClick={() => onClickCategory(items[key].category)}
                      >
                          {items[key].title}
                      </button>
                  ))
                : Array(5)
                      .fill(0)
                      .map((_, index) => (
                          <CategoriesBtnLoader
                              key={`magazine-categories-filters-btn-loader-${index}`}
                          />
                      ))}
        </div>
    );
};

export default MagazineFiltersCategories;
