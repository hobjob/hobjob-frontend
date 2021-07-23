import React from "react";

const PassingTimecodesItem = ({timecode, title, onClickTimecode}) => {
    return (
        <div className="passing-lesson-info-block-timecodes-item">
            <p className="passing-lesson-info-block-timecodes-item__title">
                <span onClick={() => onClickTimecode(timecode)}>
                    {timecode}
                </span>{" "}
                - {title}
            </p>
        </div>
    );
};

export default PassingTimecodesItem;
