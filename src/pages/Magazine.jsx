import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import queryString from "query-string";

import {fetchPosts, setPostsFilters} from "../redux/actions/posts";
import {fetchCategories} from "../redux/actions/categories";
import {fetchMasters} from "../redux/actions/masters";

import {
    Header,
    Footer,
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

    const {items, filters, isLoadedAllPosts} = useSelector(({posts}) => posts);

    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);

    const categories = useSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useSelector(
        ({categories}) => categories.isLoadedAllCategories
    );

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }

        if (!Object.keys(masters).length) {
            dispatch(fetchMasters());
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

        dispatch(setPostsFilters(newFilters));
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

		console.log(query);
        dispatch(fetchPosts(query));
    }, [Object.keys(filters.categories).length]);

    return (
        <section className="magazine">
            <div className="container">
                <div className="magazine-wrapper">
                    <h2 className="title__mb magazine__title">Журнал</h2>

                    <MagazineFiltersCategories />

                    {isLoadedAllPosts &&
                    isLoadedAllCategories &&
                    isLoadedMasters ? (
                        items.length ? (
                            <>
                                {window.innerWidth > 900 ? (
                                    <MagazineBlockBig
                                        {...items[0]}
                                        masters={masters}
                                        categories={categories}
                                    />
                                ) : null}

                                <div className="magazine-block-wrapper">
                                    {items.map((item, index) =>
                                        window.innerWidth > 900 ? (
                                            index !== 0 ? (
                                                <MagazineBlock
                                                    {...item}
                                                    masters={masters}
                                                    categories={categories}
                                                    key={`magazine-block-${index}`}
                                                />
                                            ) : null
                                        ) : (
                                            <MagazineBlock
                                                {...item}
                                                masters={masters}
                                                categories={categories}
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
