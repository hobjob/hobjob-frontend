import React from "react";

const MagazinePostPageBlock = ({title, description, image}) => {
    return (
        <div className="magazine-post-page-block">
            <div className="magazine-post-page-block-text">
                <h3 className="magazine-post-page-block-text__title">
                    {title}
                </h3>
                {description.map((item, index) => (
                    <p
                        className="magazine-post-page-block-text__description"
                        key={`magazine-post-page-block-text__description-${index}`}
                        dangerouslySetInnerHTML={{__html: item}}
                    ></p>
                ))}
            </div>
            <div
                className="magazine-post-page-block__img"
                style={{
                    backgroundImage: `url(${process.env.REACT_APP_DOMEN}/${image})`,
                }}
            ></div>
        </div>
    );
};

export default MagazinePostPageBlock;
