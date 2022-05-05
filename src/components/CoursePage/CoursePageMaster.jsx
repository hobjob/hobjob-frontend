import React from "react";
import {Link} from "react-router-dom";

const CoursePageMaster = ({masterId, master}) => {
    return (
        <>
            <section className="course-page-master">
                <div className="container">
                    <div className="course-page-master-wrapper">
                        <div
                            className="course-page-master-img"
                            style={{
                                backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar}')`,
                            }}
                        ></div>
                        <div className="course-page-master-text">
                            <h2 className="course-page-master__title">
                                О мастере
                            </h2>
                            {master ? (
                                <p className="description course-page-master__description">
                                    {master.masterDescription}
                                </p>
                            ) : null}
                            <Link
                                to={`/master/${masterId}`}
                                className="btn course-page-master__btn"
                            >
                                Перейти на страницу мастера
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoursePageMaster;
