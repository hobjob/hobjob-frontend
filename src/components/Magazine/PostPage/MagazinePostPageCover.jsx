import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../../assets/images/logo.svg";

const MagazinePostPageCover = ({
    title,
    description,
    category,
    categories,
    masterId,
    masters,
    image,
}) => {
    return (
        <div className="magazine-post-page-cover">
            <div className="magazine-post-page-text-wrapper">
                <div className="magazine-post-page-cover-text">
                    <div className="magazine-post-page-cover-text-top">
                        {masterId !== "" && masters[masterId] ? (
                            <Link
                                to={`/master/${masterId}`}
                                className="magazine-post-page-cover-text-top-auth"
                            >
                                <div
                                    className="magazine-post-page-cover-text-top-auth-avatar"
                                    style={{
                                        backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${masters[masterId].avatar}")`,
                                    }}
                                ></div>
                                <span className="magazine-post-page-cover-text-top-auth__name">
                                    <span>Автор</span>
                                    {masters[masterId].name}{" "}
                                    {masters[masterId].surname}
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
                            to={`/magazine/?category=${categories[category].transfer}`}
                            className="magazine-post-page-cover-text-top__category"
                        >
                            {categories[category].title}
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
            </div>

            <img
                src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}
                alt=""
                className="magazine-post-page-cover__img"
            />
        </div>
    );
};

export default MagazinePostPageCover;
