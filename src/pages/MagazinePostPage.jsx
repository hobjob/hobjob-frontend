import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchPostsById} from "../redux/actions/posts";
import {fetchCategories} from "../redux/actions/categories";

import {Err404} from "../pages/";

import {
    MagazinePostPageCover,
    MagazinePostPageBlock,
    MagazinePostPageNext,
    MagazinePostPageEnd,
    MagazinePostPageLoader,
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

    React.useEffect(() => {
        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchPostsById(id));
    }, [id]);

    return (
        <>
            {isLoadedByIdPosts && isLoadedAllCategories ? (
                itemById ? (
                    <section className="magazine-post-page">
                        <div className="container">
                            <div className="magazine-post-page-wrapper">
                                <MagazinePostPageCover
                                    {...itemById}
                                    categories={categories}
                                />

                                <div className="magazine-post-page-block-wrapper">
                                    {itemById.content.map((block, index) => (
                                        <MagazinePostPageBlock
                                            {...block}
                                            key={`magazine-post-page-block-${index}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {itemById.next ? (
                                <MagazinePostPageNext {...itemById.next} />
                            ) : (
                                <MagazinePostPageEnd />
                            )}
                        </div>
                    </section>
                ) : (
                    <Err404 />
                )
            ) : (
                <section className="magazine-post-page">
                    <div className="container">
                        <div className="magazine-post-page-wrapper">
                            <MagazinePostPageLoader />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default MagazinePostPage;
