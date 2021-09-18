import React from "react";
import {useSelector} from "react-redux";
import NumberFormat from "react-number-format";

import {checkDeclension} from "../../Functions/checkDeclension";

import {MasterCoursesListItem} from "../";

const MasterCoursesList = () => {
    const {masterCourses} = useSelector(({user}) => user);

    return (
        <div className="master-info-list-courses">
            <div className="master-info-list-courses-subinfo">
                <div className="master-info-list-courses-col">
                    <span className="master-info-list-courses-subinfo__title">
                        Курс
                    </span>
                </div>
                <div className="master-info-list-courses-col">
                    <span className="master-info-list-courses-subinfo__title">
                        Всего проданно
                    </span>
                </div>
            </div>
            <div className="master-info-list-courses-items-wrapper">
                {masterCourses.map((item, index) => (
                    <MasterCoursesListItem
                        {...item}
                        key={`master-info-list-courses-item-${index}`}
                        buyCount={
                            <>
                                <NumberFormat
                                    value={item.buyCount}
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(value) => value}
                                />{" "}
                                {
                                    checkDeclension(item.buyCount, [
                                        "копия",
                                        "копии",
                                        "копий",
                                    ]).text
                                }
                            </>
                        }
                        buyCountExtraLessons={
                            <>
                                <NumberFormat
                                    value={item.buyCountExtraLessons}
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(value) => value}
                                />{" "}
                                {"доп. мат."}
                            </>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default MasterCoursesList;
