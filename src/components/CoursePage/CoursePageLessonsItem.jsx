import React from "react";

const CoursePageLessonsItem = ({
    index,
    title,
    description,
    hours,
    minutes,
}) => {
    return (
        <div className="course-page-lessons-list-item">
            <div className="course-page-lessons-list-item-top">
                <div className="course-page-lessons-list-item-top-left">
                    {index !== 0 ? (
                        <div
                            className={`course-page-lessons-list-item-top-left-icon  ${
                                index === 0 ? "active" : ""
                            }`}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 38 47"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19 0C12.3633 0 7 5.36328 7 12V17H3C1.35547 17 0 18.3555 0 20V44C0 45.6445 1.35547 47 3 47H35C36.6445 47 38 45.6445 38 44V20C38 18.3555 36.6445 17 35 17H31V12C31 5.36328 25.6367 0 19 0ZM19 2C24.5664 2 29 6.43359 29 12V17H9V12C9 6.43359 13.4336 2 19 2ZM3 19H35C35.5547 19 36 19.4453 36 20V44C36 44.5547 35.5547 45 35 45H3C2.44531 45 2 44.5547 2 44V20C2 19.4453 2.44531 19 3 19ZM19 27C17.3008 27 16 28.3008 16 30C16 30.8984 16.3984 31.6875 17 32.1875V35C17 36.1016 17.8984 37 19 37C20.1016 37 21 36.1016 21 35V32.1875C21.6016 31.6875 22 30.8984 22 30C22 28.3008 20.6992 27 19 27Z" />
                            </svg>
                        </div>
                    ) : null}

                    <h4
                        className={`course-page-lessons-list-item-top-left__title  ${
                            index === 0 ? "active" : ""
                        }`}
                    >
                        <span>{index + 1}.</span>
                        {title}
                    </h4>
                </div>
                <div className="course-page-lessons-list-item-top-right">
                    <p
                        className={`course-page-lessons-list-item-top-right__duration  ${
                            index === 0 ? "active" : ""
                        }`}
                    >
                        {hours.num === 0
                            ? `${minutes.title}`
                            : `${hours.title} ${minutes.title}`}
                    </p>
                </div>
            </div>
            {index === 0 ? (
                <p className="course-page-lessons-list-item__description">
                    {description}
                </p>
            ) : null}
        </div>
    );
};

export default CoursePageLessonsItem;
