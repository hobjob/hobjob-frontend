import React from "react";
import {useSelector} from "react-redux";

import {ShopFiltersSearch, ShopFilters} from "../../";

const ShopFiltersTop = React.memo(() => {
    const [stateFilters, setStateFilters] = React.useState(false);
    const [stateFiltersAnimationClose, setStateFiltersAnimationClose] =
        React.useState(false);

    const FiltersRef = React.useRef();

    const {filters} = useSelector(({courses}) => courses);

    React.useEffect(() => {
        document.body.addEventListener("click", handStateFilters);
    }, []);

    const openStateFilters = () => {
        setStateFilters(true);
    };

    const closeStateFilters = () => {
        setStateFiltersAnimationClose(true);

        setTimeout(() => {
            setStateFiltersAnimationClose(false);
            setStateFilters(false);
        }, 180);
    };

    const handStateFilters = (e) => {
        if (FiltersRef.current && !e.composedPath().includes(FiltersRef.current)) {
            closeStateFilters();
        }
    };

    return (
        <>
            <div className="shop-top">
                <ShopFiltersSearch />

                <div className="shop-top-filters">
                    <span
                        ref={FiltersRef}
                        onClick={openStateFilters}
                        className={`shop-top-filters__title ${
                            stateFilters ? "active" : ""
                        }`}
                    >
                        Мастера ({Object.keys(filters.masters).length})
                    </span>
                </div>
            </div>

            {stateFilters ? (
                <ShopFilters
                    stateFiltersAnimationClose={stateFiltersAnimationClose}
                />
            ) : null}
        </>
    );
});

export default ShopFiltersTop;
