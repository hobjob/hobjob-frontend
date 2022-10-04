import React from "react";

import {PostContent} from "../../../models/IPost";

const MagazinePostPageBlock: React.FC<PostContent> = ({
    title,
    description,
    image,
}) => {
    return (
        <div className="magazine-post-page-block">
            <div className="magazine-post-page-block-text">
                <h3
                    className="magazine-post-page-block-text__title"
                    dangerouslySetInnerHTML={{__html: title}}
				></h3>
				
                {description.map((item, index) => (
                    <p
                        className="description magazine-post-page-block-text__description"
                        key={`magazine-post-page-block-text__description-${index}`}
                        dangerouslySetInnerHTML={{__html: item}}
                    ></p>
                ))}
            </div>

            {image.size_512 !== "" ? (
                <img
                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_1536}`}
                    alt=""
                    className="magazine-post-page-block__img"
                />
            ) : null}
        </div>
    );
};

export default MagazinePostPageBlock;
