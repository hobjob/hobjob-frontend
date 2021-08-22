import React from "react";

const PassingTopText = ({title, lessons, lessonNum, lessonIndex}) => {
    return (
        <div className="passing-top-text">
            <span className="subtitle__mb passing-top-text__subtitle">
                {title} ({lessonNum} урок)
            </span>
            <h2 className="passing-top-text__title">
                {lessons[lessonIndex].title}
            </h2>
        </div>
    );
};

export default PassingTopText;
