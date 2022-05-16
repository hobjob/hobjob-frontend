import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import {Redirect} from "react-router-dom";

import {fetchPostsById} from "../redux/actions/posts";

import {
    MagazinePostPageCover,
    MagazinePostPageBlock,
    MagazinePostPageNext,
    MagazinePostPageEnd,
    Loader,
} from "../components/";

const MagazinePostPage = ({
    match: {
        params: {id},
    },
}) => {
    const dispatch = useDispatch();

    const {itemById, isLoadedByIdPosts} = useSelector(({posts}) => posts);
    const categories = useSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchPostsById(id));
    }, [id]);

    return (
        <>
            {isLoadedByIdPosts && isLoadedAllCategories && isLoadedMasters ? (
                Object.keys(itemById).length ? (
                    <>
                        <Helmet>
                            <title>{itemById.title} - HobJob</title>
						</Helmet>
						
                        <section className="magazine-post-page">
                            <MagazinePostPageCover
                                {...itemById}
                                categories={categories}
                                masters={masters}
							/>
							
                            <div className="magazine-post-page-block-wrapper">
                                {itemById.content.map((block, index) => (
                                    <MagazinePostPageBlock
                                        {...block}
                                        key={`magazine-post-page-block-${index}`}
                                    />
                                ))}
							</div>
							
                            {itemById.next ? (
                                <MagazinePostPageNext {...itemById.next} />
                            ) : (
                                <MagazinePostPageEnd />
                            )}
                        </section>
                    </>
                ) : (
                    <Redirect to="/magazine" />
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MagazinePostPage;
