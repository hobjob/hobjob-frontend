import React from "react";
import {Link} from 'react-router-dom';

const PassingLessonsListItem = ({image, title, active, courseId, num}) => {
    return (
        <Link
            to={`/go/passing/${courseId}/${num}`}
            className={`passing-lessons-list-item ${active ? "active" : ""}`}
        >
            <div
                className="passing-lessons-list-item-cover"
                style={{
                    backgroundImage: `url("${process.env.REACT_APP_DOMEN}/${image}")`,
                }}
            ></div>
            <p className="passing-lessons-list-item__title">{title}</p>
        </Link>
    );
};

export default PassingLessonsListItem;
