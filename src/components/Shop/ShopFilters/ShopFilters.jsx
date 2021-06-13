import React from "react";

import {
    ShopFiltersBlockSale,
    ShopFiltersBlockMasters,
    ShopFiltersBlockTimes,
} from "../../";

const ShopFilters = () => {
    return (
        <div className="shop-filters">
            <ShopFiltersBlockSale />
            <ShopFiltersBlockMasters />
            <ShopFiltersBlockTimes />
        </div>
    );
};

export default ShopFilters;
