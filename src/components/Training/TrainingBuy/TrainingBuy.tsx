import React from "react";
import {useDispatch} from "react-redux";

import {hiddenUserCourse} from "../../../redux/actions/user";

import {TrainingBuyBlock} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {checkDeclension} from "../../../functions/checkDeclension";

const TrainingSubscribe: React.FC = () => {
    const dispatch = useDispatch();

    const {userInfo} = useTypedSelector(({user}) => user);
    const masters = useTypedSelector(({masters}) => masters.items);

    const onClickHiddenUserCourse = (courseId: string) => {
        dispatch(hiddenUserCourse(courseId));
    };

    return (
        <div className="training-section">
            <h3 className="title__mb training-section__title">
                Курсы купленные навсегда
            </h3>

            {userInfo.courses.buy.map((course, index) => (
                <TrainingBuyBlock
                    {...course}
                    master={masters[course.masterId]}
                    onClickHiddenUserCourse={onClickHiddenUserCourse}
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
    );
};

export default TrainingSubscribe;
