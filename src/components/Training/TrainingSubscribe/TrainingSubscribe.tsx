import React from "react";
import {useDispatch} from "react-redux";

import {hiddenUserCourse} from "../../../redux/actions/user";

import {TrainingSubscribeBlock} from "../../";

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
                Курсы в подписке
            </h3>

            {userInfo.courses.subscribe.map((course, index) => (
                <TrainingSubscribeBlock
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
