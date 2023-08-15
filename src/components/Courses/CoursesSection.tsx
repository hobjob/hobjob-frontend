import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {fetchCoursesSection} from "../../redux/actions/courses";
import {addUserCourse} from "../../redux/actions/user";

import {CoursesBlock, Loader} from "../";

import {checkIsAddCourse} from "../../functions/checkIsAddCourse";

interface CoursesSectionProps {
    title: string;
    description: string;
    currentCourseId?: string;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({
    title,
    description,
    currentCourseId,
}) => {
    const dispatch = useDispatch();

    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);
    const {coursesSection, isLoadedSectionCourses} = useTypedSelector(
        ({courses}) => courses
    );

    const masters = useTypedSelector(({masters}) => masters.items);
    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);

    const categories = useTypedSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useTypedSelector(
        ({categories}) => categories.isLoadedAllCategories
    );

    React.useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            if (isLoadedUserInfo) {
                const excludeCoursesId = [
                    ...userInfo.courses.buy.map((course) => course.courseId),
                    ...userInfo.courses.subscribe.map(
                        (course) => course.courseId
                    ),
				];

                if (currentCourseId) excludeCoursesId.push(currentCourseId);

                dispatch(fetchCoursesSection(excludeCoursesId));
            }
        } else {
            const excludeCoursesId = [];

            if (currentCourseId) excludeCoursesId.push(currentCourseId);

            dispatch(fetchCoursesSection(excludeCoursesId));
        }
    }, [isLoadedUserInfo]);

    const onClickAddCourse = (_id: string) => {
        dispatch(addUserCourse(_id));
    };

    return (
        <>
            {isLoadedSectionCourses &&
            isLoadedMasters &&
            isLoadedAllCategories ? (
                coursesSection.length ? (
                    <section className="courses-section">
                        <div className="container">
                            <div className="courses-section-wrapper">
                                <h2 className="title courses-section__title">
                                    {title}
                                </h2>
                                <p className="description courses-section__description">
                                    {description}
                                </p>

                                <div className="courses-section-block-wrapper">
                                    {coursesSection
                                        .map((course, index) => (
                                            <CoursesBlock
                                                {...course}
                                                key={`courses-section-block-${index}`}
                                                master={
                                                    masters[course.masterId]
                                                }
                                                categoryItem={
                                                    categories[course.category]
                                                }
                                                onClickAddCourse={
                                                    onClickAddCourse
                                                }
                                                isLogin={
                                                    localStorage.getItem(
                                                        "accessToken"
                                                    ) && isLoadedUserInfo
                                                        ? true
                                                        : false
                                                }
                                                isAdd={checkIsAddCourse(
                                                    userInfo.courses,
                                                    course._id
                                                )}
                                                isSubscribe={
                                                    userInfo.subscribe.working
                                                }
                                            />
                                        ))
                                        .slice(0, 6)}
                                </div>
                                <div className="courses-section-btn">
                                    <Link
                                        to="/course"
                                        className="btn__gray courses-section__btn"
                                    >
                                        Показать еще
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CoursesSection;
