import React from "react";
import {Link} from "react-router-dom";

const PassingLessonsListItem = ({
    image,
    title,
    extraLesson,
    active,
    courseId,
    num,
}) => {
    return (
        <>
            <Link
                to={`/go/passing/${courseId}/${num}`}
                className={`passing-lessons-list-item ${
                    active ? "active" : ""
                }`}
            >
                <div className="passing-lessons-list-item-cover">
                    <div
                        className="passing-lessons-list-item-cover-img"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                        }}
                    ></div>
                </div>
				<p className="passing-lessons-list-item__title">{title} {extraLesson && "(Дополнительные материалы)"}</p>
            </Link>
        </>
    );
};

export default PassingLessonsListItem;
