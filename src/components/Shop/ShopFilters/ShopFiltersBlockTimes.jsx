import React from "react";

import {useDispatch, useSelector} from "react-redux";

import {setCoursesFiltersTimes} from "../../../redux/actions/courses";

const ShopFiltersBlockTimes = () => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({courses}) => courses);

    const setTimes = (time) => {
        dispatch(setCoursesFiltersTimes(time));
    };

    return (
        <div className="shop-filters-col">
            <span className="subtitle__mb shop-filters-col__subtitle">
                Время прохождения
            </span>
            <div className="shop-filters-col-block-checkbox">
                <input
                    type="checkbox"
                    className="checkbox"
                    id="shop-filters-col-block-checkbox-less-time-12"
                    checked={
                        filters.times["less-time-12"] === "less-time-12"
                            ? true
                            : false
                    }
                    onChange={() => setTimes("less-time-12")}
                />
                <label
                    className="checkbox__label"
                    htmlFor="shop-filters-col-block-checkbox-less-time-12"
                >
                    <span>Меньше 12 часов</span>
                </label>
            </div>
            <div className="shop-filters-col-block-checkbox">
                <input
                    type="checkbox"
                    className="checkbox"
                    id="shop-filters-col-block-checkbox-time-12-24"
                    checked={
                        filters.times["time-12-24"] === "time-12-24"
                            ? true
                            : false
                    }
                    onChange={() => setTimes("time-12-24")}
                />
                <label
                    className="checkbox__label"
                    htmlFor="shop-filters-col-block-checkbox-time-12-24"
                >
                    <span>12 часов - 24 часа</span>
                </label>
            </div>
            <div className="shop-filters-col-block-checkbox">
                <input
                    type="checkbox"
                    className="checkbox"
                    id="shop-filters-col-block-checkbox-time-24-48"
                    checked={
                        filters.times["time-24-48"] === "time-24-48"
                            ? true
                            : false
                    }
                    onChange={() => setTimes("time-24-48")}
                />
                <label
                    className="checkbox__label"
                    htmlFor="shop-filters-col-block-checkbox-time-24-48"
                >
                    <span>24 часа - 48 часов</span>
                </label>
            </div>
            <div className="shop-filters-col-block-checkbox">
                <input
                    type="checkbox"
                    className="checkbox"
                    id="shop-filters-col-block-checkbox-more-time-48"
                    checked={
                        filters.times["more-time-48"] === "more-time-48"
                            ? true
                            : false
                    }
                    onChange={() => setTimes("more-time-48")}
                />
                <label
                    className="checkbox__label"
                    htmlFor="shop-filters-col-block-checkbox-more-time-48"
                >
                    <span>Более 48 часов</span>
                </label>
            </div>
        </div>
    );
};

export default ShopFiltersBlockTimes;
