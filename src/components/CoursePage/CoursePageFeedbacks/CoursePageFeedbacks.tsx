import React from "react";
import Marquee from "react-fast-marquee";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const CoursePageFeedbacks: React.FC = () => {
    const {courseByUrl} = useTypedSelector(({courses}) => courses);

    return (
        <section className="course-page-feedbacks">
            <div className="course-page-feedbacks-wrapper">
                <h2 className="title__mb course-page-feedbacks__title">
                    Отзывы о курсе
                </h2>

                <div className="course-page-feedbacks-slider">
					<Marquee
						style={{alignItems: "flex-start"}}
                        gradient={false}
                        speed={50}
                        pauseOnHover={true}
                        className="course-page-feedbacks-slider-carousel"
                    >
                        {courseByUrl.feedbacks.images.map((image, index) => (
                            <img
                                className="course-page-feedbacks-slider-carousel__image"
                                key={`course-page-feedbacks-slider-carousel__image-${index}`}
                                alt=""
                                src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_512}`}
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default CoursePageFeedbacks;
