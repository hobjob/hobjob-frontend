import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import queryString from "query-string";

import {fetchMagazine, setMagazineFilters} from "../redux/actions/magazine";
import {fetchCategories} from "../redux/actions/categories";

import {
    MagazineBlockBig,
    MagazineBlock,
    MagazineBlockBigLoader,
    MagazineBlockLoader,
    MagazineFiltersCategories,
    MagazineNotFound,
} from "../components/";

const Magazine = ({
    history: {
        location: {search},
    },
}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {items, filters, isLoadedAllMagazine} = useSelector(
        ({magazine}) => magazine
    );
    const categories = useSelector(({categories}) => categories.items);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }

        const newFilters = {
            categories: {},
        };

        const parseQuery = queryString.parse(search, {
            arrayFormat: "comma",
        });

        if (parseQuery.category) {
            if (typeof parseQuery.category === "object") {
                parseQuery.category.map(
                    (item) => (newFilters.categories[item] = item)
                );
            } else {
                newFilters.categories[parseQuery.category] =
                    parseQuery.category;
            }
        }

        dispatch(setMagazineFilters(newFilters));
    }, []);

    React.useEffect(() => {
        const arrayCategories = [];

        Object.keys(filters.categories).map((key) => {
            arrayCategories.push(filters.categories[key]);
        });

        const query = queryString.stringify(
            {
                category: arrayCategories,
            },
            {arrayFormat: "comma", skipNull: true, skipEmptyString: true}
        );

        history.push(`/magazine/?${query}`);

        dispatch(fetchMagazine(query));
    }, [Object.keys(filters.categories).length, filters.search]);

    return (
        <section className="magazine">
            <div className="container">
                <div className="magazine-wrapper">
                    <h2 className="title__mb magazine__title">Журнал</h2>

                    <MagazineFiltersCategories />

                    {isLoadedAllMagazine ? (
                        items.length ? (
                            <>
                                {window.innerWidth > 900 ? (
                                    <MagazineBlockBig {...items[0]} />
                                ) : null}

                                <div className="magazine-block-wrapper">
                                    {items.map((item, index) =>
                                        window.innerWidth > 900 ? (
                                            index !== 0 ? (
                                                <MagazineBlock
                                                    {...item}
                                                    key={`magazine-block-${index}`}
                                                />
                                            ) : null
                                        ) : (
                                            <MagazineBlock
                                                {...item}
                                                key={`magazine-block-${index}`}
                                            />
                                        )
                                    )}
                                </div>
                            </>
                        ) : (
                            <MagazineNotFound />
                        )
                    ) : (
                        <>
                            <MagazineBlockBigLoader />
                            <div className="magazine-block-wrapper">
                                {Array(3)
                                    .fill(0)
                                    .map((_, index) => (
                                        <MagazineBlockLoader
                                            key={`magazine-block-loader-${index}`}
                                        />
                                    ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Magazine;
