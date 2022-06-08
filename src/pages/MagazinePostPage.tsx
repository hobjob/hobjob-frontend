import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {useHistory} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchPostsById} from "../redux/actions/posts";

import {
    MagazinePostPageCover,
    MagazinePostPageBlock,
    MagazinePostPageNext,
    MagazinePostPageEnd,
    Loader,
} from "../components/";

interface MagazinePostPageProps {
    match: {
        params: {id: string};
    };
}

const MagazinePostPage: React.FC<MagazinePostPageProps> = ({
    match: {
        params: {id},
    },
}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {itemById, isLoadedByIdPosts} = useTypedSelector(({posts}) => posts);
    const categories = useTypedSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useTypedSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const masters = useTypedSelector(({masters}) => masters.items);
    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchPostsById(id));
    }, [id]);

    return (
        <>
            {isLoadedByIdPosts && isLoadedAllCategories && isLoadedMasters ? (
                itemById._id !== "" ? (
                    <>
                        <Helmet>
                            <title>{itemById.title} - HobJob</title>
                        </Helmet>

                        <section className="magazine-post-page">
                            <MagazinePostPageCover
                                {...itemById}
                                category={categories[itemById.category]}
                                master={masters[itemById.masterId]}
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
                    history.push("/magazine")
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MagazinePostPage;
