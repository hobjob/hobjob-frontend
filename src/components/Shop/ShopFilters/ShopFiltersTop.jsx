import React from "react";
import {useSelector} from "react-redux";

import {ShopFiltersSearch, ShopFilters} from "../../";

const ShopFiltersTop = React.memo(() => {
    const [openFilters, setOpenFilters] = React.useState(false);
    const [filtersCount, setFiltersCount] = React.useState(0);

    const {filters} = useSelector(({courses}) => courses);

    React.useEffect(() => {
        let count = 0;

        count += Object.keys(filters.masters).length;
        count += Object.keys(filters.times).length;

        if (filters.sale !== null) {
            count += 1;
        }

        setFiltersCount(count);
    }, [
        Object.keys(filters.masters).length,
        filters.sale,
        Object.keys(filters.times).length,
    ]);

    const onClickOpenFilters = () => {
        setOpenFilters(!openFilters);
    };

    return (
        <>
            <div className="shop-top">
                <ShopFiltersSearch />

                <div className="shop-top-filters">
                    <span
                        className={`shop-top-filters__title ${
                            openFilters ? "active" : ""
                        }`}
                        onClick={onClickOpenFilters}
                    >
                        Фильтры ({filtersCount})
                    </span>
                </div>
            </div>

            {openFilters ? <ShopFilters /> : null}
        </>
    );
});

export default ShopFiltersTop;
