import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {fetchCoursesSection} from "../../redux/actions/courses";
import {addUserCourse, hiddenUserCourse} from "../../redux/actions/user";

import {ShopBlock, Loader} from "../";

interface ShopSectionProps {
    title: string;
    description: string;
    url: string;
}

const ShopSection: React.FC<ShopSectionProps> = ({title, description, url}) => {
    const dispatch = useDispatch();

    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);
    const {itemsSection, isLoadedSectionCourses} = useTypedSelector(
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
                dispatch(fetchCoursesSection(userInfo, url));
            }
        } else {
            dispatch(fetchCoursesSection(null, url));
        }
    }, [isLoadedUserInfo]);

    const onClickAddCourse = (_id: string) => {
        dispatch(addUserCourse(_id, null));
    };

    const onClickHiddenCourse = (_id: string) => {
        dispatch(hiddenUserCourse(_id));
    };

    return (
        <>
            {isLoadedSectionCourses &&
            isLoadedMasters &&
            isLoadedAllCategories ? (
                Object.keys(itemsSection).length ? (
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
                                    {Object.keys(itemsSection)
                                        .map((key, index) => (
                                            <ShopBlock
                                                {...itemsSection[key]}
                                                key={`shop-section-block-${index}`}
                                                master={
                                                    masters[
                                                        itemsSection[key]
                                                            .masterId
                                                    ]
                                                }
                                                categoryItem={
                                                    categories[
                                                        itemsSection[key]
                                                            .category
                                                    ]
                                                }
                                                onClickAddCourse={
                                                    onClickAddCourse
                                                }
                                                onClickHiddenCourse={
                                                    onClickHiddenCourse
                                                }
                                                isAdd={
                                                    userInfo.courses &&
                                                    userInfo.courses[
                                                        itemsSection[key]._id
                                                    ]
                                                        ? true
                                                        : false
                                                }
                                                isLogin={
                                                    localStorage.getItem(
                                                        "accessToken"
                                                    ) && isLoadedUserInfo
                                                        ? true
                                                        : false
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
