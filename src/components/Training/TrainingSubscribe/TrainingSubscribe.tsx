import React from "react";
import {useDispatch} from "react-redux";
import {animateScroll as scroll} from "react-scroll";

import {hiddenUserCourse} from "../../../redux/actions/user";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {checkDeclension} from "../../../functions/checkDeclension";

import {TrainingSubscribeDisabled, TrainingSubscribeBlock} from "../../";

import {rates} from "../../../subscribeRates";

const TrainingSubscribe: React.FC = () => {
    const dispatch = useDispatch();

    const {userInfo} = useTypedSelector(({user}) => user);
    const masters = useTypedSelector(({masters}) => masters.items);

    const [isAnimationShake, setIsAnimationShake] =
        React.useState<boolean>(false);

    // const onClickHiddenUserCourse = (courseId: string) => {
    //     dispatch(hiddenUserCourse(courseId));
    // };

    const onClickVisibleDisabled = () => {
        if (document.body.clientWidth < 1300) {
            scroll.scrollToTop({duration: 500});
        }

        setIsAnimationShake(true);

        setTimeout(() => {
            setIsAnimationShake(false);
        }, 600);
    };

    return (
        <div className="training-section-wrapper training-subscribe-section-wrapper">
            {userInfo.subscribe.type !== "" ? (
                <>
                    {userInfo.subscribe.working ? null : userInfo.subscribe
                          .isPassingTesting ? (
                        <TrainingSubscribeDisabled
                            subtitle={`${
                                rates[userInfo.subscribe.type].subtitle
                            } за ${rates[userInfo.subscribe.type].fullPrice}₽`}
                            title="Ваша подписка истекла"
                            btnText="Продлить"
                            type={userInfo.subscribe.type}
                            isAnimationShake={isAnimationShake}
                        />
                    ) : (
                        <TrainingSubscribeDisabled
                            subtitle="У вас еще нет подписки"
                            title="Попробуйте 30 дней за 1₽"
                            price="далее 499₽ в месяц"
                            btnText="Попробовать"
                            type="test"
                            isAnimationShake={isAnimationShake}
                        />
                    )}
                </>
            ) : null}

            <div className="training-section training-subscribe-section">
                <h3 className="training-section__title">Курсы в подписке</h3>

                {userInfo.courses.subscribe.map((course, index) => (
                    <TrainingSubscribeBlock
                        {...course}
                        onClickVisibleDisabled={onClickVisibleDisabled}
                        isWorkSubscribe={userInfo.subscribe.working}
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
