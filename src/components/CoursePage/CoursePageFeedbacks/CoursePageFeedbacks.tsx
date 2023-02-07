import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const CoursePageFeedbacks: React.FC = () => {
    const {courseByUrl} = useTypedSelector(({courses}) => courses);

    const SliderRef: any = React.useRef(null);

    const configSlider = {
        margin: 25,
        items: 1,
        dots: false,
        autoHeight: true,
    };

    const clickPrevSlide = () => {
        SliderRef.current.prev();
    };

    const clickNextSlide = () => {
        SliderRef.current.next();
    };

    return (
        <section className="course-page-feedbacks">
            <div className="container">
                <div className="course-page-feedbacks-wrapper">
                    <h2 className="title__mb course-page-feedbacks__title">
                        Отзывы о курсе:
                    </h2>

                    <div className="course-page-feedbacks-slider">
                        <OwlCarousel
                            {...configSlider}
                            className="course-page-feedbacks-slider-carousel"
                            ref={SliderRef}
                        >
                            {document.body.clientWidth < 750
                                ? courseByUrl.feedbacks.mediaImages.map(
                                      (image, index) => (
                                          <img
                                              className="course-page-feedbacks-slider-carousel__image"
                                              key={`course-page-feedbacks-slider-carousel__image-${index}`}
                                              alt=""
                                              src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_512}`}
                                          />
                                      )
                                  )
                                : courseByUrl.feedbacks.images.map(
                                      (image, index) => (
                                          <img
                                              className="course-page-feedbacks-slider-carousel__image"
                                              key={`course-page-feedbacks-slider-carousel__image-${index}`}
                                              alt=""
                                              src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_512}`}
                                          />
                                      )
                                  )}
                        </OwlCarousel>

                        <div className="course-page-feedbacks-slider-arrow-wrapper">
                            <div
                                className="course-page-feedbacks-slider-arrow prev"
                                onClick={clickPrevSlide}
                            >
                                <svg
                                    viewBox="0 0 75 75"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M37.5 75C58.2107 75 75 58.2107 75 37.5C75 16.7893 58.2107 0 37.5 0C16.7893 0 0 16.7893 0 37.5C0 58.2107 16.7893 75 37.5 75Z"
                                        fill="#FFF1E3"
                                    />
                                    <path
                                        d="M34.4381 36.1591C33.6859 36.8944 33.6859 38.1049 34.4381 38.8403L43.6285 47.8263C44.3807 48.5616 44.3807 49.7721 43.6285 50.5075L42.9019 51.2179C42.1731 51.9304 41.0089 51.9304 40.2801 51.2179L27.6208 38.8403C26.8686 38.1049 26.8686 36.8944 27.6208 36.1591L40.2801 23.7814C41.0089 23.0689 42.1731 23.0689 42.9019 23.7814L43.6285 24.4919C44.3807 25.2273 44.3807 26.4378 43.6285 27.1731L34.4381 36.1591Z"
                                        fill="#DD9E5E"
                                    />
                                </svg>
                            </div>
                            <div
                                className="course-page-feedbacks-slider-arrow next"
                                onClick={clickNextSlide}
                            >
                                <svg
                                    viewBox="0 0 75 75"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M37.5 0C16.7893 0 0 16.7893 0 37.5C0 58.2107 16.7893 75 37.5 75C58.2107 75 75 58.2107 75 37.5C75 16.7893 58.2107 0 37.5 0Z"
                                        fill="#FFF1E3"
                                    />
                                    <path
                                        d="M40.5611 38.8403C41.3134 38.1049 41.3134 36.8944 40.5611 36.1591L31.3708 27.1731C30.6186 26.4378 30.6186 25.2273 31.3708 24.4919L32.0974 23.7814C32.8262 23.0689 33.9904 23.0689 34.7192 23.7814L47.3785 36.1591C48.1307 36.8944 48.1307 38.1049 47.3785 38.8403L34.7192 51.2179C33.9904 51.9304 32.8262 51.9304 32.0974 51.2179L31.3708 50.5075C30.6186 49.7721 30.6186 48.5616 31.3708 47.8263L40.5611 38.8403Z"
                                        fill="#DD9E5E"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageFeedbacks;
