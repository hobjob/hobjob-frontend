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

    const onClickStateFilters = () => {
        setStateFiltersAnimationClose(true);

        setTimeout(() => {
            setStateFiltersAnimationClose(false);
            setStateFilters(!stateFilters);
        }, 190);
    };

    const handStateFilters = (e) => {
        if (e.target !== FiltersRef.current) {
            setStateFiltersAnimationClose(true);

            setTimeout(() => {
                setStateFiltersAnimationClose(false);
                setStateFilters(false);
            }, 190);
        }
    };

    return (
        <>
            <div className="shop-top">
                <ShopFiltersSearch />

                <div className="shop-top-filters">
                    <span
                        ref={FiltersRef}
                        onClick={onClickStateFilters}
                        className={`shop-top-filters__title ${
                            stateFilters ? "active" : ""
                        }`}
                    >
                        Фильтры ({Object.keys(filters.masters).length})
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
