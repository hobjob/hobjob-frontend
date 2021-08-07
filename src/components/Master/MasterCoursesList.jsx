import React from "react";
import {useSelector} from "react-redux";

import {MasterCoursesListItem} from "../";

const MasterCoursesList = () => {
    const {masterCourses} = useSelector(({user}) => user);

    //склонение ["копия", "копии", "копий"]
    const checkDeclension = (num, title) => {
        let result;

        if (num % 100 >= 5 && num % 100 <= 20) {
            result = num + " " + title[2];
        } else {
            if (num % 10 === 1) {
                result = num + " " + title[0];
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                result = num + " " + title[1];
            } else {
                result = num + " " + title[2];
            }
        }

        return result;
    };

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
                        buyCount={checkDeclension(item.buyCount, [
                            "копия",
                            "копии",
                            "копий",
                        ])}
                    />
                ))}
            </div>
        </div>
    );
};

export default MasterCoursesList;
