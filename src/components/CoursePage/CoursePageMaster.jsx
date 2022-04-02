import React from "react";
import {Link} from "react-router-dom";

import {ImageBox} from "../";

const CoursePageMaster = ({masterId, master, image, path}) => {
    const [stateImage, setStateImage] = React.useState(false);

    const handlerStateImage = () => {
        setStateImage(!stateImage);
    };

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
                            onClick={handlerStateImage}
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
            {stateImage ? (
                <ImageBox
                    image={`${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}`}
                    closeFunc={handlerStateImage}
                />
            ) : null}
        </>
    );
};

export default CoursePageMaster;
