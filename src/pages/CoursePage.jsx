import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchCourseByUrl} from "../redux/actions/courses";
import {addUserCourse} from "../redux/actions/user";

import {
    CoursePageMain,
    CoursePageLessons,
    CoursePageMaster,
    ShopSection,
    Loader,
} from "../components";

const CoursePage = ({
    match: {
        params: {url},
    },
}) => {
    const dispatch = useDispatch();

    const {itemByUrl, isLoadedCourseByUrl} = useSelector(
        ({courses}) => courses
    );
    const categories = useSelector(({categories}) => categories.items);
    const isLoadedCategories = useSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);
    const {userInfo, isLoadedUserInfo} = useSelector(({user}) => user);

    const [visibleButton, setVisibleButton] = React.useState(false);

    const [isLogin, setIsLogin] = React.useState(false);
    const [isAdd, setIsAdd] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        window.addEventListener("scroll", () => {
            if (Math.floor(window.pageYOffset) > 200) {
                setVisibleButton(true);
            } else {
                setVisibleButton(false);
            }
        });
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchCourseByUrl(url));
    }, [url]);

    React.useEffect(() => {
        if (
            localStorage.getItem("accessToken") &&
            isLoadedUserInfo &&
            isLoadedCourseByUrl
        ) {
            setIsLogin(true);

            if (userInfo.courses && userInfo.courses[itemByUrl._id]) {
                setIsAdd(true);
            }
        }
    }, [url, isLoadedUserInfo, isLoadedCourseByUrl]);

    const onClickAddCourse = (redirect) => {
        dispatch(addUserCourse(itemByUrl._id, redirect));
    };

    return (
        <>
            {isLoadedCourseByUrl && isLoadedMasters && isLoadedCategories ? (
                Object.keys(itemByUrl).length ? (
                    <>
                        <Helmet>
                            <title>{itemByUrl.title} - HobJob</title>
                        </Helmet>

                        {isLogin ? (
                            isAdd ? (
                                <button
                                    className={`btn-small-round disabled course-page__btn ${
                                        visibleButton ? "active" : ""
                                    }`}
                                >
                                    Добавлен
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
                            <a
                                href="/go/register"
                                className={`btn-small-round course-page__btn ${
                                    visibleButton ? "active" : ""
                                }`}
                            >
                                Открыть все уроки за 1 ₽
                            </a>
                        )}

                        <CoursePageMain
                            {...itemByUrl}
                            isLogin={isLogin}
                            isAdd={isAdd}
                            master={masters[itemByUrl.masterId]}
                            categories={categories}
                            onClickAddCourse={onClickAddCourse}
                        />

                        <CoursePageLessons
                            {...itemByUrl}
                            isLogin={isLogin}
                            onClickAddCourse={onClickAddCourse}
                            isAdd={isAdd}
                        />

                        <CoursePageMaster
                            {...itemByUrl}
                            master={masters[itemByUrl.masterId]}
                        />

                        <ShopSection
                            title="Вам может понравиться"
                            description="Новые курсы добавляются каждый месяц"
                            url={url}
                        />
                    </>
                ) : (
                    (window.location.href = "/")
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CoursePage;
