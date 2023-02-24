import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import {
    CoursePageMasterWorksVideo,
    CoursePageMasterWorksImage,
    CoursePageMasterWorksItemVideo,
    CoursePageMasterWorksItemImage,
} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const CoursePageMasterWorks: React.FC = () => {
    const {items} = useTypedSelector(({masters}) => masters);
    const {courseByUrl} = useTypedSelector(({courses}) => courses);

    const SliderRef: any = React.useRef(null);

    const [isOpenVideo, setIsOpenVideo] = React.useState<boolean>(false);
    const [isCloseAnimationVideo, setIsCloseAnimationVideo] =
        React.useState<boolean>(false);
    const [currentUrlVideo, setCurrentUrlVideo] = React.useState<string>("");

    const [isOpenImage, setIsOpenImage] = React.useState<boolean>(false);
    const [isCloseAnimationImage, setIsCloseAnimationImage] =
        React.useState<boolean>(false);
    const [currentUrlImage, setCurrentUrlImage] = React.useState<string>("");

    const configSlider = {
        margin: 15,
        items: 1,
        dots: false,
        autoHeight: true,

        responsive: {
            700: {
                items: 2,
			},
			
            1000: {
                items: 3,
            },

            1200: {
                items: 4,
            },
        },
    };

    const clickPrevSlide = () => {
        SliderRef.current.prev();
    };

    const clickNextSlide = () => {
        SliderRef.current.next();
    };

    const onClickOpenVideo = (url: string) => {
        setCurrentUrlVideo(url);
        setIsOpenVideo(true);
    };

    const onClickCloseVideo = () => {
        setIsCloseAnimationVideo(true);

        setTimeout(() => {
            setCurrentUrlVideo("");

            setIsCloseAnimationVideo(false);
            setIsOpenVideo(false);
        }, 180);
    };

    const onClickOpenImage = (url: string) => {
        setCurrentUrlImage(url);
        setIsOpenImage(true);
    };

    const onClickCloseImage = () => {
        setIsCloseAnimationImage(true);

        setTimeout(() => {
            setCurrentUrlImage("");

            setIsCloseAnimationImage(false);
            setIsOpenImage(false);
        }, 180);
    };

    return (
        <div className="course-page-master-section-works">
            <h2 className="course-page-master-section-works__title">
                Работы мастера
            </h2>

            {isOpenVideo ? (
                <CoursePageMasterWorksVideo
                    currentUrlVideo={currentUrlVideo}
                    isCloseAnimationVideo={isCloseAnimationVideo}
                    onClickCloseVideo={onClickCloseVideo}
                />
            ) : null}

            {isOpenImage ? (
                <CoursePageMasterWorksImage
                    currentUrlImage={currentUrlImage}
                    isCloseAnimationImage={isCloseAnimationImage}
                    onClickCloseImage={onClickCloseImage}
                />
            ) : null}

            <OwlCarousel
                {...configSlider}
                className="course-page-master-section-works-item-wrapper"
                ref={SliderRef}
            >
                {items[courseByUrl.masterId].worksVideo.map((work, index) => (
                    <CoursePageMasterWorksItemVideo
                        {...work}
                        onClickOpenVideo={onClickOpenVideo}
                        key={`course-page-master-section-works-item-video-${index}`}
                    />
                ))}

                {items[courseByUrl.masterId].worksImage.map((work, index) => (
                    <CoursePageMasterWorksItemImage
                        {...work}
                        onClickOpenImage={onClickOpenImage}
                        key={`course-page-master-section-works-item-image-${index}`}
                    />
                ))}
            </OwlCarousel>

            <div className="course-page-master-section-works-arrow-wrapper">
                <div
                    className="course-page-master-section-works-arrow prev"
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
                    className="course-page-master-section-works-arrow next"
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
    );
};

export default CoursePageMasterWorks;
