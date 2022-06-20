import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ShopFiltersSearch, ShopFilters} from "../../";

const ShopFiltersTop: React.FC = () => {
    const [stateFilters, setStateFilters] = React.useState<boolean>(false);
    const [stateFiltersAnimationClose, setStateFiltersAnimationClose] =
        React.useState<boolean>(false);

    const FiltersRef = React.useRef<HTMLDivElement>(null);

    const {filters} = useTypedSelector(({courses}) => courses);

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

    const handStateFilters = (e: Event) => {
        if (
            FiltersRef.current &&
            !e.composedPath().includes(FiltersRef.current)
        ) {
            closeStateFilters();
        }
    };

    return (
        <>
            <div className="shop-top">
                <ShopFiltersSearch />

                <div className="shop-top-filters" ref={FiltersRef}>
                    <span
                        onClick={openStateFilters}
                        className={`shop-top-filters__title ${
                            stateFilters ? "active" : ""
                        }`}
                    >
                        Мастера{" "}
                        {Object.keys(filters.masters).length
                            ? `(${Object.keys(filters.masters).length})`
                            : ""}
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
};

export default ShopFiltersTop;
