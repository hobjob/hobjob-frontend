import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import NumberFormat from "react-number-format";

import {
    fetchPassingCourseLessonMaterial,
    fetchCertificateCourse,
} from "../redux/actions/passing";

import {sendCreateCourseExtraLessonsPayment} from "../redux/actions/payment";

import {
    Loader,
    PassingTopText,
    PassingLessonsList,
    PassingVideo,
    PassingMaterials,
    PassingTimecodes,
} from "../components/";

import Err404 from "./Err404";

const PassingCourse = ({
    match: {
        params: {courseId, lessonNum},
    },
}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {user, courses, isLoaded} = useSelector(({user}) => user);

    const PlayerRef = React.useRef();

    // Array of lessons starts at zero
    const lessonIndex = lessonNum - 1;

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [courseId, lessonNum, isLoaded]);

    const setTime = (seconds) => {
        PlayerRef.current.store.dispatch({
            type: "UPDATE_ASKED_TIME",
            payload: {askedTime: seconds},
        });
    };

    const downloadFile = (title, index) => {
        dispatch(
            fetchPassingCourseLessonMaterial(courseId, lessonNum, index, title)
        );
    };

    const getCertificate = () => {
        dispatch(
            fetchCertificateCourse(
                courseId,
                "Сертификат «Шитьё мишек изо льна»"
            )
        );
    };

    const buyExtraLessons = () => {
        dispatch(sendCreateCourseExtraLessonsPayment({courseId}));
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoaded ? (
                    courses[courseId] ? (
                        (courses[courseId].lessons[lessonIndex].extraLesson &&
                            (user.pro || courses[courseId].extraLessonsBuy)) ||
                        !courses[courseId].lessons[lessonIndex].extraLesson ? (
                            <section className="passing">
                                <div className="container">
                                    <div className="passing-wrapper">
                                        <div className="passing-top">
                                            <PassingTopText
                                                {...courses[courseId]}
                                                lessonIndex={lessonIndex}
                                                lessonNum={lessonNum}
                                            />

                                            {courses[courseId].lessons[
                                                lessonIndex + 1
                                            ] ? (
                                                <Link
                                                    to={`/go/passing/${courseId}/${
                                                        lessonIndex + 2
                                                    }`}
                                                    className="passing-top-next"
                                                >
                                                    К следующему уроку →
                                                </Link>
                                            ) : null}
                                        </div>

                                        <PassingVideo
                                            {...courses[courseId]}
                                            courseId={courseId}
                                            PlayerRef={PlayerRef}
                                            lessonNum={lessonNum}
                                            lessonIndex={lessonIndex}
                                        />

                                        <PassingLessonsList
                                            lessons={courses[courseId].lessons}
                                            courseId={courseId}
                                            lessonActive={lessonNum}
                                        />

                                        <div className="passing-lesson-info">
                                            <div className="passing-lesson-info-block-text">
                                                <h4 className="passing-lesson-info-block-text__title">
                                                    Описание
                                                </h4>
                                                <p className="passing-lesson-info-block-text__description">
                                                    {
                                                        courses[courseId]
                                                            .lessons[
                                                            lessonIndex
                                                        ].description
                                                    }
                                                </p>
                                            </div>

                                            <PassingMaterials
                                                materials={
                                                    courses[courseId].lessons[
                                                        lessonIndex
                                                    ].materials
                                                }
                                                downloadFunc={downloadFile}
                                            />

                                            <PassingTimecodes
                                                setTime={setTime}
                                                timecodes={
                                                    courses[courseId].lessons[
                                                        lessonIndex
                                                    ].timecodes
                                                }
                                            />
                                        </div>

                                        {user.pro &&
                                        !courses[courseId].lessons[
                                            lessonIndex + 1
                                        ] ? (
                                            <div className="passing-certificate">
                                                <p className="subtitle passing-certificate__subtitle">
                                                    Сертификат
                                                </p>
                                                <h4 className="passing-certificate__title">
                                                    Вы успешно прошли курс «
                                                    {courses[courseId].title}»
                                                </h4>

                                                <button
                                                    className="btn passing-certificate__btn"
                                                    onClick={getCertificate}
                                                >
                                                    Получить сертификат
                                                </button>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <section className="passing">
                                <div className="container">
                                    <div className="passing-wrapper">
                                        <div className="passing-top">
                                            <PassingTopText
                                                {...courses[courseId]}
                                                lessonIndex={lessonIndex}
                                                lessonNum={lessonNum}
                                            />

                                            {courses[courseId].lessons[
                                                lessonIndex + 1
                                            ] ? (
                                                <Link
                                                    to={`/go/passing/${courseId}/${
                                                        lessonIndex + 2
                                                    }`}
                                                    className="passing-top-next"
                                                >
                                                    К следующему уроку →
                                                </Link>
                                            ) : null}
                                        </div>

                                        <div className="passing-cover">
                                            <svg
                                                width="50"
                                                height="67"
                                                viewBox="0 0 50 67"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="passing-cover-icon"
                                            >
                                                <path
                                                    d="M43.75 66.6667H6.25C2.80558 66.6667 0 63.8641 0 60.4167V31.25C0 27.8025 2.80558 25 6.25 25H43.75C47.1944 25 50 27.8025 50 31.25V60.4167C50 63.8641 47.1944 66.6667 43.75 66.6667ZM6.25 29.1667C5.10254 29.1667 4.16667 30.1 4.16667 31.25V60.4167C4.16667 61.5667 5.10254 62.5 6.25 62.5H43.75C44.8975 62.5 45.8333 61.5667 45.8333 60.4167V31.25C45.8333 30.1 44.8975 29.1667 43.75 29.1667H6.25Z"
                                                    fill="#fff"
                                                />
                                                <path
                                                    d="M39.5833 29.1667C38.4333 29.1667 37.5 28.2333 37.5 27.0833V16.6667C37.5 9.77478 31.8919 4.16667 25 4.16667C18.1081 4.16667 12.5 9.77478 12.5 16.6667V27.0833C12.5 28.2333 11.5667 29.1667 10.4166 29.1667C9.26664 29.1667 8.33331 28.2333 8.33331 27.0833V16.6667C8.33331 7.47477 15.8081 0 25 0C34.1919 0 41.6666 7.47477 41.6666 16.6667V27.0833C41.6666 28.2333 40.7333 29.1667 39.5833 29.1667Z"
                                                    fill="#fff"
                                                />
                                            </svg>

                                            <div className="passing-cover-plaecholder"></div>

                                            <div
                                                className="passing-cover-img"
                                                style={{
                                                    backgroundImage: `url('${process.env.REACT_APP_DOMEN}/${courses[courseId].lessons[lessonIndex].image}')`,
                                                }}
                                            ></div>
                                        </div>

                                        <PassingLessonsList
                                            lessons={courses[courseId].lessons}
                                            courseId={courseId}
                                            lessonActive={lessonNum}
                                        />

                                        <div className="passing-lesson-info">
                                            <div className="passing-lesson-info-block-pro">
                                                <h3 className="passing-lesson-info-block-pro__title">
                                                    Оформите Pro подписку
                                                </h3>

                                                <p className="passing-lesson-info-block-pro__description">
                                                    Что бы, получить доступ к
                                                    дополнительным материалам,
                                                    нужно офрмить Pro подписку
                                                </p>

                                                <ul className="passing-lesson-info-block-pro-list">
                                                    <li className="passing-lesson-info-block-pro-list__item">
                                                        - Скидка 20% на все
                                                        курсы
                                                    </li>
                                                    <li className="passing-lesson-info-block-pro-list__item">
                                                        - Получение сертификата
                                                    </li>
                                                    <li className="passing-lesson-info-block-pro-list__item">
                                                        - Дополнительные
                                                        материалы
                                                    </li>
                                                </ul>

                                                <button className="btn passing-lesson-info-block-pro__btn">
                                                    Оформить Pro подписку
                                                </button>
                                            </div>
                                            <div className="passing-lesson-info-block-middle">
                                                <p className="subtitle">или</p>
                                            </div>
                                            <div className="passing-lesson-info-block-buy-extra-lessons">
                                                <h3 className="passing-lesson-info-block-buy-extra-lessons__title">
                                                    Купите дополнительные
                                                    материалы за{" "}
                                                    <NumberFormat
                                                        value={
                                                            courses[courseId]
                                                                .extraLessonsPrice
                                                        }
                                                        displayType={"text"}
                                                        thousandSeparator={" "}
                                                        renderText={(value) =>
                                                            value
                                                        }
                                                    />
                                                    ₽
                                                </h3>

                                                <button
                                                    className="btn-regular passing-lesson-info-block-buy-extra-lessons__btn"
                                                    onClick={buyExtraLessons}
                                                >
                                                    Купить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    ) : (
                        history.push("/go/training")
                    )
                ) : (
                    <div className="loader-wrapper">
                        <Loader />
                    </div>
                )
            ) : (
                <Err404 />
            )}
        </>
    );
};

export default PassingCourse;
