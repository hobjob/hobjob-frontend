import React from "react";

const PassingTopText = ({title, lessons, lessonIndex}) => {
    return (
        <div className="passing-top-text">
            <span className="subtitle__mb passing-top-text__subtitle">
                {title}
            </span>
            <h2 className="passing-top-text__title">
                {lessons[lessonIndex].title} <span>{lessons[lessonIndex].extraLesson && "(Дополнительные материалы)"}</span>
            </h2>
        </div>
    );
};

export default PassingTopText;
