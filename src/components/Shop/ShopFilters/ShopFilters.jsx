import React from "react";

import {
    ShopFiltersBlockSale,
    ShopFiltersBlockMasters,
} from "../../";

const ShopFilters = React.memo(() => {
    return (
        <div className="shop-filters">
            <ShopFiltersBlockSale />
            <ShopFiltersBlockMasters />
        </div>
    );
});

export default ShopFilters;
