import React from "react";

import {ShopFiltersBlockMasters} from "../../";

const ShopFilters = React.memo(
    ({stateFiltersAnimationClose}) => {
        return (
            <div
                className={`shop-filters ${
                    stateFiltersAnimationClose ? "close" : ""
                }`}
            >
                <ShopFiltersBlockMasters />
            </div>
        );
    }
);

export default ShopFilters;
