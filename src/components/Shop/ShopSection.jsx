import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {fetchCoursesSection} from "../../redux/actions/courses";
import {addUserCourse} from "../../redux/actions/user";

import {ShopBlock, Loader} from "../";

const ShopSection = ({title, description, url}) => {
    const dispatch = useDispatch();

    const {userInfo, isLoadedUserInfo} = useSelector(({user}) => user);
    const {itemsSection, isLoadedSectionCourses} = useSelector(
        ({courses}) => courses
    );

    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);

    const categories = useSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useSelector(
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

    const onClickAddCourse = (id) => {
        dispatch(addUserCourse(id));
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
                                                category={
                                                    categories[
                                                        itemsSection[key]
                                                            .category
                                                    ]
                                                }
                                                onClickAddCourse={
                                                    onClickAddCourse
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
                                                }
                                            />
                                        ))
                                        .slice(0, 4)}
                                </div>
                                <div className="shop-section-btn">
                                    <Link
                                        to="/shop"
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
