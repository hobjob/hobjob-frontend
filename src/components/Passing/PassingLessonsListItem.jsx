import React from "react";
import {Link} from "react-router-dom";

const PassingLessonsListItem = ({
    blocked,
    image,
    title,
    extraLesson,
    active,
    courseId,
    num,
}) => {
    return (
        <>
            {blocked && extraLesson ? (
                <div
                    className={`passing-lessons-list-blocked-item ${
                        active ? "active" : ""
                    }`}
                >
                    <div className="passing-lessons-list-blocked-item-cover">
                        {blocked ? (
                            <svg
                                width="20"
                                height="27"
                                viewBox="0 0 20 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="passing-lessons-list-blocked-item-cover-icon"
                            >
                                <path
                                    d="M17.5 26.6667H2.5C1.12223 26.6667 0 25.5457 0 24.1667V12.5C0 11.121 1.12223 10 2.5 10H17.5C18.8778 10 20 11.121 20 12.5V24.1667C20 25.5457 18.8778 26.6667 17.5 26.6667ZM2.5 11.6667C2.04102 11.6667 1.66667 12.04 1.66667 12.5V24.1667C1.66667 24.6267 2.04102 25 2.5 25H17.5C17.959 25 18.3333 24.6267 18.3333 24.1667V12.5C18.3333 12.04 17.959 11.6667 17.5 11.6667H2.5Z"
                                    fill="#fff"
                                />
                                <path
                                    d="M15.8333 11.6667C15.3733 11.6667 15 11.2933 15 10.8333V6.66667C15 3.90991 12.7568 1.66667 10 1.66667C7.24326 1.66667 5.00001 3.90991 5.00001 6.66667V10.8333C5.00001 11.2933 4.62668 11.6667 4.16668 11.6667C3.70668 11.6667 3.33334 11.2933 3.33334 10.8333V6.66667C3.33334 2.98991 6.32325 0 10 0C13.6768 0 16.6667 2.98991 16.6667 6.66667V10.8333C16.6667 11.2933 16.2933 11.6667 15.8333 11.6667Z"
                                    fill="#fff"
                                />
                            </svg>
                        ) : null}
                        <div className="passing-lessons-list-blocked-item-cover-plaecholder"></div>
                        <div
                            className="passing-lessons-list-blocked-item-cover-img"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_DOMEN}/${image}")`,
                            }}
                        ></div>
                    </div>
                    <p className="passing-lessons-list-blocked-item__title">
                        {title}
                    </p>
                </div>
            ) : (
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
                                backgroundImage: `url("${process.env.REACT_APP_DOMEN}/${image}")`,
                            }}
                        ></div>
                    </div>
                    <p className="passing-lessons-list-item__title">{title}</p>
                </Link>
            )}
        </>
    );
};

export default PassingLessonsListItem;
