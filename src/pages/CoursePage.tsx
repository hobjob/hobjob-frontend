import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {Link, Navigate, useSearchParams, useParams} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchCourseByUrl} from "../redux/actions/courses";
import {addUserCourse, hiddenUserCourse} from "../redux/actions/user";

import {
    CoursePageMain,
    CoursePageLessons,
    CoursePageMaterials,
    CoursePageSkills,
    CoursePageUseSkills,
    CoursePagePrice,
    CoursePageComparisonCourses,
    HobJobGood,
    CoursePagePassing,
    CoursePageTools,
    CoursePageMaster,
    CoursePageFaq,
    ShopSection,
    Loader,
} from "../components";

const CoursePage: React.FC = () => {
    const [search] = useSearchParams();
    const {url} = useParams();

    const dispatch = useDispatch();

    const {courseByUrl, isLoadedCourseByUrl} = useTypedSelector(
        ({courses}) => courses
    );
    const categories = useTypedSelector(({categories}) => categories.items);
    const isLoadedCategories = useTypedSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const masters = useTypedSelector(({masters}) => masters.items);
    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);
    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);

    const [visibleButton, setVisibleButton] = React.useState(false);

    const [isLogin, setIsLogin] = React.useState(false);
    const [isAdd, setIsAdd] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", handlerScroll);

        const ref = search.get("ref");

        if (ref) {
            localStorage.setItem("ref", ref);
        }
    }, []);

    React.useEffect(() => {
        return () => {
            window.removeEventListener("scroll", handlerScroll);
        };
    }, []);

    React.useEffect(() => {
        dispatch(fetchCourseByUrl(url ? url : ""));
    }, [url]);

    React.useEffect(() => {
        if (
            localStorage.getItem("accessToken") &&
            isLoadedUserInfo &&
            isLoadedCourseByUrl
        ) {
            setIsLogin(true);

            // if (userInfo.courses && userInfo.courses[courseByUrl._id]) {
            //     setIsAdd(true);
            // }
        }
    }, [url, isLoadedUserInfo, isLoadedCourseByUrl]);

    const handlerScroll = () => {
        if (Math.floor(window.pageYOffset) > 200) {
            setVisibleButton(true);
        } else {
            setVisibleButton(false);
        }
    };

    const onClickAddCourse = () => {
        dispatch(addUserCourse(courseByUrl._id, "/go/training"));
    };

    const onClickHiddenCourse = () => {
        dispatch(hiddenUserCourse(courseByUrl._id));
    };

    return (
        <>
            {isLoadedCourseByUrl && isLoadedMasters && isLoadedCategories ? (
                courseByUrl._id !== "" ? (
                    <>
                        <Helmet>
                            <title>{courseByUrl.title} - HobJob</title>
                        </Helmet>

                        {isLogin ? (
                            isAdd ? (
                                <button
                                    className={`btn-small-round-delete course-page__btn ${
                                        visibleButton ? "active" : ""
                                    }`}
                                    onClick={onClickHiddenCourse}
                                >
                                    Удалить из моего обучения
                                </button>
                            ) : (
                                <button
                                    className={`btn-small-round course-page__btn ${
                                        visibleButton ? "active" : ""
                                    }`}
                                    onClick={onClickAddCourse}
                                >
                                    Добавить в мое обучение
                                </button>
                            )
                        ) : (
                            <LinkScroll
                                to="price"
                                spy={true}
                                smooth={true}
                                offset={-25}
                                duration={1000}
                            >
                                <button
                                    className={`btn-small-round course-page__btn ${
                                        visibleButton ? "active" : ""
                                    }`}
                                >
                                    Начать обучение
                                </button>
                            </LinkScroll>
                        )}

                        <CoursePageMain
                            {...courseByUrl}
                            isLogin={isLogin}
                            isAdd={isAdd}
                            master={masters[courseByUrl.masterId]}
                            categories={categories}
                            onClickAddCourse={onClickAddCourse}
                            onClickHiddenCourse={onClickHiddenCourse}
                        />

                        <CoursePageLessons
                            {...courseByUrl}
                            onClickAddCourse={onClickAddCourse}
                            isLogin={isLogin}
                            isAdd={isAdd}
                        />

                        {courseByUrl.materials.length ? (
                            <CoursePageMaterials
                                {...courseByUrl}
                                onClickAddCourse={onClickAddCourse}
                                isLogin={isLogin}
                                isAdd={isAdd}
                            />
                        ) : null}

                        <CoursePageSkills {...courseByUrl} />

                        <CoursePageUseSkills {...courseByUrl} />

                        {userInfo.subscribe.working ? null : (
                            <CoursePagePrice />
                        )}

                        <CoursePageComparisonCourses />

                        <HobJobGood />

                        <CoursePagePassing />

                        <CoursePageTools {...courseByUrl} />

                        <CoursePageMaster
                            master={masters[courseByUrl.masterId]}
                        />

                        <CoursePageFaq />

                        <ShopSection
                            title="Вам может понравиться"
                            description="Новые курсы добавляются каждый месяц"
                            url={url}
                        />
                    </>
                ) : (
                    <Navigate to="/course" />
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CoursePage;
