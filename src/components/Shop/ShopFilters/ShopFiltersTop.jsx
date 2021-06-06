import React from "react";

import ShopFiltersSearch from "./ShopFiltersSearch";

const ShopFiltersTop = () => {
    return (
        <div className="shop-top">
            <ShopFiltersSearch />
			
            <div className="shop-top-filters">
                <span className="shop-top-filters__title">Фильтры</span>
            </div>
        </div>
    );
};

export default ShopFiltersTop;
