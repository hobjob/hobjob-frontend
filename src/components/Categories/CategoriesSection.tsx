import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {checkDeclension} from "../../Functions/checkDeclension";

import {fetchCourses} from "../../redux/actions/courses";

import {Loader, CategoriesItem} from "../";

const CategoriesSection: React.FC = () => {
    const dispatch = useDispatch();

    const {items, isLoadedAllCategories} = useTypedSelector(
        ({categories}) => categories
    );
    const courses = useTypedSelector(({courses}) => courses.items);

    React.useEffect(() => {
        if (!courses.length) {
            dispatch(fetchCourses());
        }
    }, []);

    return (
        <section className="categories">
            <div className="container">
                <div className="categories-wrapper">
                    <h2 className="title__mb categories__title">Направления</h2>

                    <div className="categories-items-wrapper">
                        {isLoadedAllCategories ? (
                            Object.keys(items).map((key, index) => (
                                <CategoriesItem
                                    {...items[key]}
                                    key={`categories-items-${index}`}
                                    subtitle={
                                        checkDeclension(
                                            courses.filter(
                                                (keyGoods) =>
                                                    keyGoods.category ===
                                                    items[key].transfer
                                            ).length,
                                            ["курс", "курса", "курсов"]
                                        ).title
                                    }
                                />
                            ))
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
