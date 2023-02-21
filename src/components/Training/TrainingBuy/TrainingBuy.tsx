import React from "react";

import {TrainingBuyBlock} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {checkDeclension} from "../../../functions/checkDeclension";

const TrainingSubscribe: React.FC = () => {
    const {userInfo} = useTypedSelector(({user}) => user);
    const masters = useTypedSelector(({masters}) => masters.items);

    return (
        <div className="training-section-wrapper">
            <div className="training-section">
                <h3 className="title__mb training-section__title">
                    Курсы купленные навсегда
                </h3>

                {userInfo.courses.buy.map((course, index) => (
                    <TrainingBuyBlock
                        {...course}
                        master={masters[course.masterId]}
                        completedLessonsTitle1={
                            checkDeclension(course.completedLessons.length, [
                                "Пройден",
                                "Пройдено",
                                "Пройдено",
                            ]).text
                        }
                        completedLessonsTitle2={
                            checkDeclension(course.completedLessons.length, [
                                "урок",
                                "урока",
                                "уроков",
                            ]).title
                        }
                        key={`training-section-block-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TrainingSubscribe;
