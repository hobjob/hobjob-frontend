import React from "react";

import {ShopFiltersBlockMasters} from "../../";

interface ShopFiltersProps {
    stateFiltersAnimationClose: boolean;
}

const ShopFilters: React.FC<ShopFiltersProps> = ({
    stateFiltersAnimationClose,
}) => {
    return (
        <div
            className={`shop-filters ${
                stateFiltersAnimationClose ? "close" : ""
            }`}
        >
            <ShopFiltersBlockMasters />
        </div>
    );
};

export default ShopFilters;
