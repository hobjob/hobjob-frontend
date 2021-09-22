import React from "react";
import {useDispatch} from "react-redux";

import {setTimecodeSeconds} from "../../redux/actions/passing";

import {PassingTimecodesItem} from "../";

const PassingTimecodes = ({timecodes, setTime, isMaterials}) => {
    const dispatch = useDispatch();

    const onClickTimecode = (timecode) => {
        const splitTimecode = timecode.split(":");

        dispatch(
            setTimecodeSeconds(
                parseInt(splitTimecode[0]) * 60 + parseInt(splitTimecode[1])
            )
        );
    };

    return (
        <div
            className={`passing-lesson-info-block-timecodes ${
                isMaterials ? "" : "long"
            }`}
        >
            <h4 className="passing-lesson-info-block-timecodes__title">
                Таймкоды
            </h4>
            <div className="passing-lesson-info-block-timecodes-items-wrapper">
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
