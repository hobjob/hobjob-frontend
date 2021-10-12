import React from "react";

import { ImageBox } from "../";

const CoursePageWork = ({images, path}) => {
    const [stateImage, setStateImage] = React.useState(false);
    const [imageSrc, setImageSrc] = React.useState("");

    const handlerStateImage = (image) => {
        setImageSrc(image);
        setStateImage(!stateImage);
	};
	
    return (
        <>
            <section className="course-page-work">
                <div className="container">
                    <div className="course-page-work-wrapper">
                        <h2 className="course-page__title__mb course-page-work__title">
                            Работы учеников
                        </h2>
                        <div className="course-page-work-cols-wrapper">
                            <div className="course-page-work-col">
                                {images.map((image, index) =>
                                    index % 2 === 0 ? (
                                        <div
                                            className="course-page-work-img"
                                            key={`course-page-work-img-${index}`}
                                            style={{
                                                backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}')`,
                                            }}
                                            onClick={() =>
                                                handlerStateImage(
                                                    `${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}`
                                                )
                                            }
                                        ></div>
                                    ) : null
                                )}
                            </div>
                            <div className="course-page-work-col">
                                {images.map((image, index) =>
                                    index % 2 !== 0 ? (
                                        <div
                                            className="course-page-work-img"
                                            key={`course-page-work-img-${index}`}
                                            style={{
                                                backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}')`,
                                            }}
                                            onClick={() =>
                                                handlerStateImage(
                                                    `${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}`
                                                )
                                            }
                                        ></div>
                                    ) : null
                                )}
                            </div>
                        </div>

                        <div className="course-page-work-media-wrapper">
                            {images.map((image, index) => (
                                <div
                                    className="course-page-work-media-img"
                                    key={`course-page-work-img-${index}`}
                                    style={{
                                        backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}')`,
                                    }}
                                    onClick={() =>
                                        handlerStateImage(
                                            `${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}`
                                        )
                                    }
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {stateImage ? (
                <ImageBox
                    image={imageSrc}
                    closeFunc={() => handlerStateImage(imageSrc)}
                />
            ) : null}
        </>
    );
};

export default CoursePageWork;
