import React from "react";
import {Link} from "react-router-dom";

import {UserInfoCourseBuy} from "../../../models/User/IUserInfo";
import {Master} from "../../../models/IMaster";

interface TrainingBlockProps extends UserInfoCourseBuy {
    completedLessonsTitle1: string;
    completedLessonsTitle2: string;
    master: Master;

    onClickHiddenUserCourse: (_id: string) => void;
}

const TrainingBlock: React.FC<TrainingBlockProps> = ({
    courseId,
    image,
    title,
    totalLessons,
    completedLessonsTitle1,
    completedLessonsTitle2,
    master,
}) => {
    return (
        <div className="training-section-block">
            <Link
                to={`/go/passing/${courseId}/1`}
                className="training-section-block-left"
            >
                <div className="training-section-block-cover">
                    <div className="training-section-block-cover-placeholder"></div>
                    <div className="training-section-block-cover-icon">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="25" cy="25" r="25" fill="white" />
                            <path
                                d="M33 24.5L20.25 31.8612V17.1388L33 24.5Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <div
                        className="training-section-block-cover-img"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_768}")`,
                        }}
                    ></div>
                </div>
                <div className="training-section-block-text">
                    <div className="training-section-block-text-top">
                        <h3 className="training-section-block-text__title">
                            {title}
                        </h3>
                        <p className="subtitle training-section-block-text__subtitle">
                            {completedLessonsTitle1} {completedLessonsTitle2} из{" "}
                            {totalLessons}
                        </p>
                    </div>
                    <div className="training-section-block-text-bottom">
                        {master ? (
                            <p className="training-section-block-text__auth">
                                {master.name} {master.surname}
                            </p>
                        ) : null}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TrainingBlock;
