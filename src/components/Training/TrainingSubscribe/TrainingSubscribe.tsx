import React from "react";
import {useDispatch} from "react-redux";

import {hiddenUserCourse} from "../../../redux/actions/user";

import {TrainingSubscribeDisabled, TrainingSubscribeBlock} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {checkDeclension} from "../../../functions/checkDeclension";

const TrainingSubscribe: React.FC = () => {
    const dispatch = useDispatch();

    const {userInfo} = useTypedSelector(({user}) => user);
    const masters = useTypedSelector(({masters}) => masters.items);

    const [isVisibleDisabled, setIsVisibleDisabled] =
        React.useState<boolean>(false);
    const [
        isActiveAnimationVisibleDisabled,
        setIsActiveAnimationVisibleDisabled,
    ] = React.useState<boolean>(false);

    const onClickHiddenUserCourse = (courseId: string) => {
        dispatch(hiddenUserCourse(courseId));
    };

    const onClickVisibleDisabled = () => {
        setIsActiveAnimationVisibleDisabled(true);

        setTimeout(() => {
            setIsVisibleDisabled(true);
            setIsActiveAnimationVisibleDisabled(false);
        }, 180);
    };

    return (
        <div className="training-section-wrapper training-subscribe-section-wrapper">
            {isVisibleDisabled ? (
                <TrainingSubscribeDisabled />
            ) : (
                <div
                    className={`training-section training-subscribe-section ${
                        isActiveAnimationVisibleDisabled ? "close" : ""
                    }`}
                >
                    <h3 className="title__mb training-section__title">
                        Курсы в подписке
                    </h3>

                    {userInfo.courses.subscribe.map((course, index) => (
                        <TrainingSubscribeBlock
                            {...course}
                            onClickVisibleDisabled={onClickVisibleDisabled}
                            isWorkSubscribe={userInfo.subscribe.working}
                            master={masters[course.masterId]}
                            onClickHiddenUserCourse={onClickHiddenUserCourse}
                            completedLessonsTitle1={
                                checkDeclension(
                                    course.completedLessons.length,
                                    ["Пройден", "Пройдено", "Пройдено"]
                                ).text
                            }
                            completedLessonsTitle2={
                                checkDeclension(
                                    course.completedLessons.length,
                                    ["урок", "урока", "уроков"]
                                ).title
                            }
                            key={`training-section-block-${index}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TrainingSubscribe;
