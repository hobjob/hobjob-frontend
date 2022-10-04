import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

import {Post} from "../../models/IPost";
import {Category} from "../../models/ICategory";
import {Master} from "../../models/IMaster";

interface MagazineBlockProps extends Omit<Post, "category" | "master"> {
    category: Category;
    master: Master;
}

const MagazineBlock: React.FC<MagazineBlockProps> = ({
    _id,
    image,
    title,
    description,
    category,
    master,
}) => {
    return (
        <div className="magazine-block">
            <div className="magazine-block-top">
                <Link
                    to={`/magazine/post/${_id}`}
                    className="magazine-block-top-cover"
                >
                    <div
                        className="magazine-block-top-cover-image"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_768}")`,
                        }}
                    ></div>
                </Link>

                <div className="magazine-block-top-text">
                    <div className="magazine-block-top-text-top">
                        {category ? (
                            <a
                                href={`/magazine/?category=${category.transfer}`}
                                className="magazine-block-top-text-top__category"
                            >
                                {category.title}
                            </a>
                        ) : null}
                    </div>
                    <Link
                        to={`/magazine/post/${_id}`}
                        className="magazine-block-top-text__title"
                    >
                        {title}
                    </Link>
                    <p
                        className="magazine-block-top-text__description"
                        dangerouslySetInnerHTML={{__html: description}}
                    ></p>
                </div>
            </div>

            <div className="magazine-block-bottom">
                {master ? (
                    <Link
                        to={`/master/${master._id}`}
                        className="magazine-block-bottom-text-auth"
                    >
                        <div
                            className="magazine-block-bottom-text-auth-avatar"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar.size_512}")`,
                            }}
                        ></div>
                        <span className="magazine-block-bottom-text-auth__name">
                            <span>Автор</span> {master.name} {master.surname}
                        </span>
                    </Link>
                ) : (
                    <Link to="/" className="magazine-block-bottom-text-auth">
                        <img
                            src={Logo}
                            alt=""
                            className="magazine-block-bottom-text-auth__img"
                        />
                        <span className="magazine-block-bottom-text-auth__name">
                            <span>Автор</span> Редактор HobJob
                        </span>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default MagazineBlock;
