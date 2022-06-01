import React from "react";

const PassingTopText = ({lessons, lessonIndex}) => {
    return (
        <div className="passing-top-text">
            <h2 className="passing-top-text__title">
                {lessons[lessonIndex].title}
            </h2>
        </div>
    );
};

export default PassingTopText;
