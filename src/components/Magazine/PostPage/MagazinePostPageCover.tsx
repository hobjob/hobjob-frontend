import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../../assets/images/logo.svg";

import {Category} from "../../../models/ICategory";
import {Master} from "../../../models/IMaster";
import {Image} from "../../../models/IImage";

interface MagazinePostPageCoverProps {
    title: string;
    description: string;
    image: Image;
    category: Category;
    master: Master;
}

const MagazinePostPageCover: React.FC<MagazinePostPageCoverProps> = ({
    title,
    description,
    category,
    master,
    image,
}) => {
    return (
        <div className="magazine-post-page-cover">
            <div className="magazine-post-page-cover-text">
                <div className="magazine-post-page-cover-text-top">
                    {master ? (
                        <Link
                            to={`/master/${master._id}`}
                            className="magazine-post-page-cover-text-top-auth"
                        >
                            <div
                                className="magazine-post-page-cover-text-top-auth-avatar"
                                style={{
                                    backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar.size_512}")`,
                                }}
                            ></div>
                            <span className="magazine-post-page-cover-text-top-auth__name">
                                <span>Автор</span>
                                {master.name} {master.surname}
                            </span>
                        </Link>
                    ) : (
                        <Link
                            to="/"
                            className="magazine-post-page-cover-text-top-auth"
                        >
                            <img
                                src={Logo}
                                alt=""
                                className="magazine-post-page-cover-text-top-auth__img"
                            />
                            <span className="magazine-post-page-cover-text-top-auth__name">
                                <span>Автор</span> Редактор HobJob
                            </span>
                        </Link>
                    )}

                    <Link
                        to={`/magazine/?category=${category.transfer}`}
                        className="category magazine-post-page-cover-text-top__category"
                    >
                        {category.title}
                    </Link>
                </div>
                <h2 className="magazine-post-page-cover-text__title">
                    {title}
                </h2>
                <p
                    className="description magazine-post-page-cover-text__description"
                    dangerouslySetInnerHTML={{__html: description}}
                ></p>
            </div>

            <img
                src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_2048}`}
                alt=""
                className="magazine-post-page-cover__img"
            />
        </div>
    );
};

export default MagazinePostPageCover;
