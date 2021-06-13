import React from "react";
import {useDispatch, useSelector} from "react-redux";

import { setCoursesFiltersMasters } from "../../../redux/actions/courses";

const ShopFiltersBlockMasters = () => {
    const dispatch = useDispatch();

    const {filters} = useSelector(({courses}) => courses);

    const setMasters = (masterId) => {
        dispatch(setCoursesFiltersMasters(masterId));
	};
	
    return (
        <div className="shop-filters-col">
            <span className="subtitle__mb shop-filters-col__subtitle">
                Мастера
            </span>
            <div className="shop-filters-col-block">
                <div className="shop-filters-col-block-checkbox">
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="shop-filters-col-block-checkbox-auth1"
                        checked={
                            filters.masters["auth1"] === "auth1" ? true : false
                        }
                        onChange={() => setMasters("auth1")}
                    />
                    <label
                        className="checkbox__label"
                        htmlFor="shop-filters-col-block-checkbox-auth1"
                    >
                        <span>Вася Иванов</span>
                        <div
                            style={{
                                backgroundImage: `url(https://i.pinimg.com/564x/c5/35/3d/c5353d09c8827b6d3389b54842c314df.jpg)`,
                            }}
                            className="checkbox-img"
                        ></div>
                    </label>
                </div>
                <div className="shop-filters-col-block-checkbox">
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="shop-filters-col-block-checkbox-auth2"
                        checked={
                            filters.masters["auth2"] === "auth2" ? true : false
                        }
                        onChange={() => setMasters("auth2")}
                    />
                    <label
                        className="checkbox__label"
                        htmlFor="shop-filters-col-block-checkbox-auth2"
                    >
                        <span>Ник петров</span>
                        <div
                            style={{
                                backgroundImage: `url(https://i.pinimg.com/564x/c5/35/3d/c5353d09c8827b6d3389b54842c314df.jpg)`,
                            }}
                            className="checkbox-img"
                        ></div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ShopFiltersBlockMasters;
