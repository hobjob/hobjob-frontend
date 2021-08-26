import React from "react";
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";

import moment from "moment";
import "moment/locale/ru";

const MagazineBlock = ({
    _id,
    image,
    date,
    title,
    description,
    masterId,
    views,
    category,
    categories,
    masters,
}) => {
    return (
        <div className="magazine-block">
            <Link
                to={`/magazine/post/${_id}`}
                className="magazine-block-cover"
                style={{
                    backgroundImage: `url(${process.env.REACT_APP_IMAGE_DOMEN}/${image})`,
                }}
            ></Link>

            <div className="magazine-block-text">
                <div className="magazine-block-text-top">
                    <span className="magazine-block-text-top__date">
                        {moment(date, "DD.MM.YYYY")
                            .locale("ru")
                            .format("DD MMMM YYYY")}
                    </span>

                    <div className="magazine-block-text-top-views">
                        <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.99997 4.09094C8.49542 4.09094 7.27271 5.31365 7.27271 6.81821C7.27271 8.32277 8.49542 9.54548 9.99997 9.54548C11.5045 9.54548 12.7272 8.32277 12.7272 6.81821C12.7272 5.31365 11.5045 4.09094 9.99997 4.09094Z"
                                fill="#b8b7b7"
                            />
                            <path
                                d="M10 0C5.45454 0 1.57274 2.82724 0 6.81817C1.57274 10.8091 5.45454 13.6363 10 13.6363C14.55 13.6363 18.4273 10.8091 20 6.81817C18.4273 2.82724 14.55 0 10 0ZM10 11.3636C7.49091 11.3636 5.45454 9.32722 5.45454 6.81813C5.45454 4.30904 7.49091 2.27271 10 2.27271C12.5091 2.27271 14.5455 4.30908 14.5455 6.81817C14.5455 9.32726 12.5091 11.3636 10 11.3636Z"
                                fill="#b8b7b7"
                            />
                        </svg>

                        <span className="magazine-block-text-top-views__number">
                            <NumberFormat
                                value={views}
                                displayType={"text"}
                                thousandSeparator={" "}
                                renderText={(value) => value}
                            />
                        </span>
                    </div>

                    {categories[category] ? (
                        <a
                            href={`/magazine/?category=${categories[category].transfer}`}
                            className="magazine-block-text-top__category"
                        >
                            {categories[category].title}
                        </a>
                    ) : null}
                </div>
                <Link
                    to={`/magazine/post/${_id}`}
                    className="magazine-block-text__title"
                >
                    {title}
                </Link>
                <p
                    className="magazine-block-text__description"
                    dangerouslySetInnerHTML={{__html: description}}
                ></p>
                <Link
                    to={`/master/${masterId}`}
                    className="magazine-block-text-auth"
                >
                    <div
                        className="magazine-block-text-auth-avatar"
                        style={{
                            backgroundImage: `url(${process.env.REACT_APP_IMAGE_DOMEN}/${masters[masterId].avatar})`,
                        }}
                    ></div>
                    <span className="magazine-block-text-auth__name">
                        {masters[masterId].name} {masters[masterId].surname}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default MagazineBlock;
