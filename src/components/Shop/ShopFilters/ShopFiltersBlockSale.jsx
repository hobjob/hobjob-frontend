import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setCoursesFiltersSale} from "../../../redux/actions/courses";

const ShopFiltersBlockSale = () => {
    const dispatch = useDispatch();

	const { filters } = useSelector(({courses}) => courses);

    const setStatusSale = (status) => {
		dispatch(setCoursesFiltersSale(status));
    };

    return (
        <div className="shop-filters-col">
            <span className="subtitle__mb shop-filters-col__subtitle">
                Cкидка
            </span>
            <div className="shop-filters-col-block">
                <div className="shop-filters-col-block-checkbox">
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="shop-filters-col-block-checkbox-sale-yes"
                        name="sale-yes"
                        checked={filters.sale === "true" ? true : false}
                        onChange={() => setStatusSale("true")}
                    />
                    <label
                        className="checkbox__label"
                        htmlFor="shop-filters-col-block-checkbox-sale-yes"
                    >
                        <span>Со скидкой</span>
                    </label>
                </div>
                <div className="shop-filters-col-block-checkbox">
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="shop-filters-col-block-checkbox-sale-no"
                        name="sale-no"
                        checked={filters.sale === "false" ? true : false}
                        onChange={() => setStatusSale("false")}
                    />
                    <label
                        className="checkbox__label"
                        htmlFor="shop-filters-col-block-checkbox-sale-no"
                    >
                        <span>Без скидки</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ShopFiltersBlockSale;
