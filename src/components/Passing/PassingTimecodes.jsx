import React from "react";
import {useDispatch} from "react-redux";

import {setPassingTimecode} from "../../redux/actions/passing";

import {PassingTimecodesItem} from "../";

const PassingTimecodes = ({timecodes}) => {
    const dispatch = useDispatch();

    const onClickTimecode = (timecode) => {
        dispatch(setPassingTimecode(timecode));
    };

    return (
        <div className="passing-lesson-info-block-timecodes">
            <h4 className="passing-lesson-info-block-timecodes__title">
                Таймкоды
            </h4>
            <div className="passing-lesson-info-block-timecodes-item-wrapper">
                {timecodes.map((item, index) => (
                    <PassingTimecodesItem
                        {...item}
                        onClickTimecode={onClickTimecode}
                        key={`passing-lesson-info-block-timecodes-item-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PassingTimecodes;
