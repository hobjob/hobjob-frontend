import React from "react";

import {
    ShopFiltersBlockSale,
    ShopFiltersBlockMasters,
    ShopFiltersBlockTimes,
} from "../../";

const ShopFilters = React.memo(() => {
    return (
        <div className="shop-filters">
            <ShopFiltersBlockSale />
            <ShopFiltersBlockMasters />
            <ShopFiltersBlockTimes />
        </div>
    );
});

export default ShopFilters;
