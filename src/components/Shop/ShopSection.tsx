import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {fetchCoursesSection} from "../../redux/actions/courses";
import {addUserCourse} from "../../redux/actions/user";

import {ShopBlock, Loader} from "../";

import {checkIsAddCourse} from "../../functions/checkIsAddCourse";

interface ShopSectionProps {
    title: string;
    description: string;
    currentCourseId?: string;
}

const ShopSection: React.FC<ShopSectionProps> = ({
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
                    <section className="shop-section">
                        <div className="container">
                            <div className="shop-section-wrapper">
                                <h2 className="title shop-section__title">
                                    {title}
                                </h2>
                                <p className="description shop-section__description">
                                    {description}
                                </p>

                                <div className="shop-section-block-wrapper">
                                    {coursesSection
                                        .map((course, index) => (
                                            <ShopBlock
                                                {...course}
                                                key={`shop-section-block-${index}`}
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
                                        .slice(0, 4)}
                                </div>
                                <div className="shop-section-btn">
                                    <Link
                                        to="/course"
                                        className="btn__gray shop-section__btn"
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

export default ShopSection;
