import React from "react";
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";

import moment from "moment";
import "moment/locale/ru";

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
            <div className="magazine-post-page-cover-text">
                <div className="magazine-post-page-cover-text-top">
                    <Link
                        to={`/magazine/?category=${categories[category].transfer}`}
                        className="magazine-post-page-cover-text-top__category"
                    >
                        {categories[category].title}
                    </Link>

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
                                Редактор HobJob
                            </span>
                        </Link>
                    )}
                </div>
                <h2 className="magazine-post-page-cover-text__title">
                    {title}
                </h2>
                <p
                    className="description magazine-post-page-cover-text__description"
                    dangerouslySetInnerHTML={{__html: description}}
                ></p>
            </div>
            <div
                className="magazine-post-page-cover-img"
                style={{
                    backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                }}
            ></div>
        </div>
    );
};

export default MagazinePostPageCover;
