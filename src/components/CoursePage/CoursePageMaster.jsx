import React from "react";
import {Link} from "react-router-dom";

const CoursePageMaster = ({masterId, masters, image, path}) => {
    return (
        <section className="course-page-master">
            <div className="container">
                <div className="course-page-master-wrapper">
                    <div className="course-page-master-text">
                        <h2 className="course-page__title course-page-master__title">
                            О мастере
                        </h2>
                        <p className="course-page-master__description">
                            {masters[masterId].masterDescription}
                        </p>
                        <Link
                            to={`/master/${masterId}`}
                            className="btn course-page-master__btn"
                        >
                            Перейти на страницу мастера
                        </Link>
                    </div>
                    <div
                        className="course-page-master-img"
                        style={{
                            backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}')`,
                        }}
                    ></div>
                    <Link
                        to={`/master/${masterId}`}
                        className="btn course-page-master-media__btn"
                    >
                        Перейти на страницу мастера
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoursePageMaster;
