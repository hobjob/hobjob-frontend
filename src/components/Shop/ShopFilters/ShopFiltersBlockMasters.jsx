import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setCoursesFiltersMasters} from "../../../redux/actions/courses";

const ShopFiltersBlockMasters = () => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({courses}) => courses);
    const {items, isLoaded} = useSelector(({masters}) => masters);

    const setMasters = (masterId) => {
        dispatch(setCoursesFiltersMasters(masterId));
    };

    return (
        <div className="shop-filters-col">
            <span className="subtitle__mb shop-filters-col__subtitle">
                Мастера
            </span>
            <div className="shop-filters-col-block">
                {Object.keys(items).map((key, index) => (
                    <div
                        className="shop-filters-col-block-checkbox"
                        key={`shop-filters-col-block-master-${index}-${key}`}
                    >
                        <input
                            type="checkbox"
                            className="checkbox"
                            id={`shop-filters-col-block-checkbox-${key}`}
                            checked={
                                filters.masters[key] === key ? true : false
                            }
                            onChange={() => setMasters(key)}
                        />
                        <label
                            className="checkbox__label"
                            htmlFor={`shop-filters-col-block-checkbox-${key}`}
                        >
                            <span>
                                {items[key].name} {items[key].surname}
                            </span>
                            <div
                                style={{
                                    backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${items[key].avatar}")`,
                                }}
                                className="checkbox-img"
                            ></div>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopFiltersBlockMasters;
