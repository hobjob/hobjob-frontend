import React from "react";

import {ImageBox} from "../";

const CoursePageAbout = ({image, title, description, path}) => {
    const [stateImage, setStateImage] = React.useState(false);

    const handlerStateImage = () => {
        setStateImage(!stateImage);
    };

    return (
        <>
            <section className="course-page-about">
                <div className="container">
                    <div className="course-page-about-wrapper">
                        <div
                            className="course-page-about-img"
                            style={{
                                backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}')`,
                            }}
                            onClick={handlerStateImage}
                        ></div>
                        <div className="course-page-about-text">
                            <h2 className="course-page__title course-page-about-text__title">
                                {title}
                            </h2>
                            <p className="course-page-about-text__description">
                                {description}
                            </p>
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

export default CoursePageAbout;
