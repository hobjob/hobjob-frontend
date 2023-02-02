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
    completedLessons,
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
                    <h3 className="training-section-block-text__title">
                        {title}
                    </h3>

                    <div className="training-section-block-text-progress">
                        <div className="training-section-block-text-progress-line-wrapper">
                            <div className="training-section-block-text-progress-line">
                                <div
                                    className="training-section-block-text-progress-line-subline"
                                    style={{
                                        width: `${
                                            (completedLessons.length /
                                                totalLessons) *
                                            100
                                        }%`,
                                    }}
                                ></div>
                            </div>
                            {completedLessons.length === totalLessons ? (
                                <div className="training-section-block-text-progress-line-success">
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 8.02633C1.46491 8.67924 2.05664 9.21751 2.55715 9.84238C3.85223 11.4592 4.95187 13.2217 6.11658 14.9309C6.14622 14.9745 6.83351 15.9388 6.88506 15.8489C7.11152 15.4539 7.28847 15.0025 7.4779 14.5887C8.05885 13.3197 8.68633 12.0915 9.39246 10.8861C10.5984 8.82762 11.8003 6.75994 13.1288 4.7775C13.7374 3.86927 14.4532 3.06849 15.1231 2.20911C15.415 1.83458 15.8043 1.43535 16 1"
                                            stroke="#DD9E5E"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                            ) : null}
                        </div>

                        <p className="training-section-block-text-progress__subtitle">
                            {completedLessonsTitle1} {completedLessonsTitle2} из{" "}
                            {totalLessons}
                        </p>
                    </div>
                    <div className="training-section-block-text-auth">
                        {master ? (
                            <p className="training-section-block-text-auth__auth">
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
