import React from "react";
import {Link} from "react-router-dom";

import moment from "moment";
import "moment/locale/ru";

import Logo from "../../assets/images/logo.svg";

const MagazineBlockBig = ({
    _id,
    image,
    title,
    description,
    masterId,
    category,
    categories,
    masters,
}) => {
    return (
        <div className="magazine-block-big">
            <Link
                to={`/magazine/post/${_id}`}
                className="magazine-block-big-cover"
            >
                <div
                    className="magazine-block-big-cover-image"
                    style={{
                        backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                    }}
                ></div>
            </Link>

            <div className="magazine-block-big-text">
                <div className="magazine-block-big-text-top">
                    {categories[category] ? (
                        <a
                            href={`/magazine/?category=${categories[category].transfer}`}
                            className="magazine-block-big-text-top__category"
                        >
                            {categories[category].title}
                        </a>
                    ) : null}
                </div>
                <Link
                    to={`/magazine/post/${_id}`}
                    className="magazine-block-big-text__title"
                >
                    {title}
                </Link>

                <p
                    className="magazine-block-big-text__description"
                    dangerouslySetInnerHTML={{__html: description}}
                ></p>

                {masterId !== "" && masters[masterId] ? (
                    <Link
                        to={`/master/${masterId}`}
                        className="magazine-block-big-text-auth"
                    >
                        <div
                            className="magazine-block-big-text-auth-avatar"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${masters[masterId].avatar}")`,
                            }}
                        ></div>
                        <span className="magazine-block-big-text-auth__name">
                            <span>Автор</span>
                            {masters[masterId].name} {masters[masterId].surname}
                        </span>
                    </Link>
                ) : (
                    <Link to="/" className="magazine-block-big-text-auth">
                        <img
                            src={Logo}
                            alt=""
                            className="magazine-block-big-text-auth__img"
                        />
                        <span className="magazine-block-big-text-auth__name">
                            <span>Автор</span> Редактор HobJob
                        </span>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default MagazineBlockBig;
