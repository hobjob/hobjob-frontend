import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchMagazineById} from "../redux/actions/magazine";

import {Err404} from "../pages/";

import {
    MagazinePostPageCover,
    MagazinePostPageBlock,
    MagazinePostPageNext,
} from "../components/";

const MagazinePostPage = ({
    match: {
        params: {id},
    },
}) => {
    const dispatch = useDispatch();

    const {itemById, isLoadedByIdMagazine} = useSelector(
        ({magazine}) => magazine
    );

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchMagazineById(id));
    }, [id]);

    return (
        <>
            {isLoadedByIdMagazine ? (
                itemById ? (
                    <section className="magazine-post-page">
                        <div className="container">
                            <div className="magazine-post-page-wrapper">
                                <MagazinePostPageCover {...itemById} />

                                <div className="magazine-post-page-block-wrapper">
                                    {itemById.content.map((block, index) => (
                                        <MagazinePostPageBlock
                                            {...block}
                                            key={`magazine-post-page-block-${index}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {itemById.nextPost ? (
                                <MagazinePostPageNext {...itemById.nextPost} />
                            ) : null}
                        </div>
                    </section>
                ) : (
                    <Err404 />
                )
            ) : null}
        </>
    );
};

export default MagazinePostPage;
