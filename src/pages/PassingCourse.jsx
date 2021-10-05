import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import NumberFormat from "react-number-format";
import {Helmet} from "react-helmet";
import moment from "moment";
import {animateScroll as scroll} from "react-scroll";

import {fetchUserCourses} from "../redux/actions/user";

import {
    fetchPassingCourseLessonMaterial,
    fetchCertificateCourse,
} from "../redux/actions/passing";

import {
    sendCreateCourseExtraLessonsPayment,
    sendCreateProSubscribePayment,
} from "../redux/actions/payment";

import {
    BtnLoader,
    Loader,
    PassingTopText,
    PassingLessonsList,
    PassingVideo,
    PassingMaterials,
    PassingTimecodes,
    PassingCertificate,
    PassingPro,
    PassingHashtag,
    PassingChat,
} from "../components/";

const PassingCourse = ({
    match: {
        params: {courseId, lessonNum},
    },
}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [hashtag, setHashtag] = React.useState("");

    const {userInfo, courses, isLoadedUserCourses, isLoadedUserInfo} =
        useSelector(({user}) => user);
    const {isSendCourseExtraLessons, isSendProSubscribe} = useSelector(
        ({payment}) => payment
    );

    // Array of lessons starts at zero
    const lessonIndex = lessonNum - 1;

    React.useEffect(() => {
        scroll.scrollToTop({duration: 500});

        if (!Object.keys(courses).length && isLoadedUserInfo) {
            dispatch(fetchUserCourses());
        }

        if (isLoadedUserCourses && courses[courseId]) {
            setHashtag(
                `#${courses[courseId].hashtag}${moment().format("MM.YYYY")}`
            );
        }
    }, [courseId, lessonNum, isLoadedUserCourses, isLoadedUserInfo]);

    const downloadFile = (title, index) => {
        dispatch(
            fetchPassingCourseLessonMaterial(courseId, lessonNum, index, title)
        );
    };

    const getCertificate = () => {
        dispatch(fetchCertificateCourse(courseId));
    };

    const buyExtraLessons = () => {
        dispatch(sendCreateCourseExtraLessonsPayment({courseId}));
    };

    const createPaymentProSubscribe = () => {
        dispatch(sendCreateProSubscribePayment({pro: userInfo.pro}));
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoadedUserCourses && isLoadedUserInfo ? (
                    courses[courseId] &&
                    courses[courseId].lessons[lessonIndex] ? (
                        (courses[courseId].lessons[lessonIndex].extraLesson &&
                            (userInfo.pro ||
                                courses[courseId].extraLessonsBuy)) ||
                        !courses[courseId].lessons[lessonIndex].extraLesson ? (
                            <>
                                <Helmet>
                                    <title>
                                        {
                                            courses[courseId].lessons[
                                                lessonIndex
                                            ].title
                                        }{" "}
                                        - HobJob
                                    </title>
                                </Helmet>
                                <section className="passing">
                                    <div className="container">
                                        <div className="passing-wrapper">
                                            <div className="passing-top">
                                                <PassingTopText
                                                    {...courses[courseId]}
                                                    lessonIndex={lessonIndex}
                                                />
                                            </div>

                                            <PassingVideo
                                                {...courses[courseId]}
                                                courseId={courseId}
                                                lessonNum={lessonNum}
                                            />

                                            <PassingLessonsList
                                                lessons={
                                                    courses[courseId].lessons
                                                }
                                                courseId={courseId}
                                                lessonActive={lessonNum}
                                                {...courses[courseId]}
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

                                                {courses[courseId].lessons[
                                                    lessonIndex
                                                ].materials.length ? (
                                                    <PassingMaterials
                                                        materials={
                                                            courses[courseId]
                                                                .lessons[
                                                                lessonIndex
                                                            ].materials
                                                        }
                                                        downloadFunc={
                                                            downloadFile
                                                        }
                                                    />
                                                ) : null}

                                                <PassingTimecodes
                                                    isMaterials={
                                                        courses[courseId]
                                                            .lessons[
                                                            lessonIndex
                                                        ].materials.length
                                                            ? true
                                                            : false
                                                    }
                                                    timecodes={
                                                        courses[courseId]
                                                            .lessons[
                                                            lessonIndex
                                                        ].timecodes
                                                    }
                                                />
                                            </div>

                                            {!courses[courseId].lessons[
                                                lessonIndex - 1
                                            ] ? (
                                                <div className="passing-bottom-block">
                                                    <PassingChat
                                                        chatUrl={
                                                            courses[courseId]
                                                                .chatUrl
                                                        }
                                                    />
                                                </div>
                                            ) : null}

                                            {!courses[courseId].lessons[
                                                lessonIndex
                                            ].extraLesson &&
                                            (!courses[courseId].lessons[
                                                lessonIndex + 1
                                            ] ||
                                                courses[courseId].lessons[
                                                    lessonIndex + 1
                                                ].extraLesson) ? (
                                                <div className="passing-bottom-block">
                                                    {userInfo.pro ? (
                                                        <PassingCertificate
                                                            title={
                                                                courses[
                                                                    courseId
                                                                ].title
                                                            }
                                                            getCertificate={
                                                                getCertificate
                                                            }
                                                        />
                                                    ) : (
                                                        <PassingPro
                                                            title={
                                                                courses[
                                                                    courseId
                                                                ].title
                                                            }
                                                            isSendProSubscribe={
                                                                isSendProSubscribe
                                                            }
                                                            createPaymentProSubscribe={
                                                                createPaymentProSubscribe
                                                            }
                                                        />
                                                    )}

                                                    <PassingHashtag
                                                        hashtag={hashtag}
                                                    />
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </section>
                            </>
                        ) : (
                            <>
                                <Helmet>
                                    <title>
                                        {
                                            courses[courseId].lessons[
                                                lessonIndex
                                            ].title
                                        }{" "}
                                        - HobJob
                                    </title>
                                </Helmet>
                                <section className="passing">
                                    <div className="container">
                                        <div className="passing-wrapper">
                                            <div className="passing-top">
                                                <PassingTopText
                                                    {...courses[courseId]}
                                                    lessonIndex={lessonIndex}
                                                    lessonNum={lessonNum}
                                                />
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
                                                        backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${courses[courseId].lessons[lessonIndex].image}")`,
                                                    }}
                                                ></div>
                                            </div>

                                            <PassingLessonsList
                                                lessons={
                                                    courses[courseId].lessons
                                                }
                                                courseId={courseId}
                                                lessonActive={lessonNum}
                                            />

                                            <div className="passing-lesson-info">
                                                <div className="passing-lesson-info-block-pro">
                                                    <h3 className="passing-lesson-info-block-pro__title">
                                                        Оформите Pro подписку
                                                    </h3>

                                                    <p className="passing-lesson-info-block-pro__description">
                                                        Что бы, получить доступ
                                                        к дополнительным
                                                        материалам, нужно
                                                        офрмить Pro подписку
                                                    </p>

                                                    <ul className="passing-lesson-info-block-pro-list">
                                                        <li className="passing-lesson-info-block-pro-list__item">
                                                            - Скидка 20% на все
                                                            курсы
                                                        </li>
                                                        <li className="passing-lesson-info-block-pro-list__item">
                                                            - Получение
                                                            сертификата
                                                        </li>
                                                        <li className="passing-lesson-info-block-pro-list__item">
                                                            - Дополнительные
                                                            материалы
                                                        </li>
                                                    </ul>

                                                    {isSendProSubscribe ? (
                                                        <button
                                                            className="btn disabled passing-lesson-info-block-pro__btn"
                                                            disabled
                                                        >
                                                            <BtnLoader />
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="btn passing-lesson-info-block-pro__btn"
                                                            onClick={
                                                                createPaymentProSubscribe
                                                            }
                                                        >
                                                            Оформить Pro
                                                            подписку
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="passing-lesson-info-block-middle">
                                                    <p className="subtitle">
                                                        или
                                                    </p>
                                                </div>
                                                <div className="passing-lesson-info-block-buy-extra-lessons">
                                                    <h3 className="passing-lesson-info-block-buy-extra-lessons__title">
                                                        Купите дополнительные
                                                        материалы за{" "}
                                                        <NumberFormat
                                                            value={
                                                                courses[
                                                                    courseId
                                                                ]
                                                                    .extraLessonsPrice
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                " "
                                                            }
                                                            renderText={(
                                                                value
                                                            ) => value}
                                                        />
                                                        ₽
                                                    </h3>

                                                    {isSendCourseExtraLessons ? (
                                                        <button
                                                            className="btn-regular disabled passing-lesson-info-block-buy-extra-lessons__btn"
                                                            disabled
                                                        >
                                                            <BtnLoader />
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="btn-regular passing-lesson-info-block-buy-extra-lessons__btn"
                                                            onClick={
                                                                buyExtraLessons
                                                            }
                                                        >
                                                            Купить
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
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
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default PassingCourse;
