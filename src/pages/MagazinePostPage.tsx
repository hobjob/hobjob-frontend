import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {useParams, Navigate} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchPostsById} from "../redux/actions/posts";

import {
    MagazinePostPageCover,
    MagazinePostPageBlock,
    MagazinePostPageNext,
    MagazinePostPageEnd,
    Loader,
} from "../components/";

const MagazinePostPage: React.FC = ({}) => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {itemById, isLoadedByIdPosts} = useTypedSelector(({posts}) => posts);
    const categories = useTypedSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useTypedSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const masters = useTypedSelector(({masters}) => masters.items);
    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);

    React.useEffect(() => {
        dispatch(fetchPostsById(id ? id : ""));
    }, [id]);

    return (
        <>
            {isLoadedByIdPosts && isLoadedAllCategories && isLoadedMasters ? (
                Object.keys(itemById).length && itemById._id !== "" ? (
                    <>
                        <Helmet>
                            <title>{itemById.title} - HobJob</title>
                        </Helmet>

                        <section className="magazine-post-page">
                            <div className="container">
                                <div className="magazine-post-page-wrapper">
                                    <MagazinePostPageCover
                                        {...itemById}
                                        category={categories[itemById.category]}
                                        master={masters[itemById.masterId]}
                                    />

                                    <div className="magazine-post-page-block-wrapper">
                                        {itemById.content.map(
                                            (block, index) => (
                                                <MagazinePostPageBlock
                                                    {...block}
                                                    key={`magazine-post-page-block-${index}`}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
							</div>
							
                            {itemById.next ? (
                                <MagazinePostPageNext {...itemById.next} />
                            ) : (
                                <MagazinePostPageEnd />
                            )}
                        </section>
                    </>
                ) : (
                    <Navigate to="/magazine" />
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MagazinePostPage;
