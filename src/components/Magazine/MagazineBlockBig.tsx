import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

import {Post} from "../../models/IPost";
import {Category} from "../../models/ICategory";
import {Master} from "../../models/IMaster";

interface MagazineBlockBigProps extends Omit<Post, "category" | "master"> {
    category: Category;
    master: Master;
}

const MagazineBlockBig: React.FC<MagazineBlockBigProps> = ({
    _id,
    image,
    title,
    description,
    category,
    master,
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
                        backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_1536}")`,
                    }}
                ></div>
            </Link>

            <div className="magazine-block-big-text">
                <div className="magazine-block-big-text-top">
                    {category ? (
                        <a
                            href={`/magazine/?category=${category.transfer}`}
                            className="magazine-block-big-text-top__category"
                        >
                            {category.title}
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

                {master ? (
                    <Link
                        to={`/master/${master._id}`}
                        className="magazine-block-big-text-auth"
                    >
                        <div
                            className="magazine-block-big-text-auth-avatar"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar.size_512}")`,
                            }}
                        ></div>
                        <span className="magazine-block-big-text-auth__name">
                            <span>Автор</span>
                            {master.name} {master.surname}
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
