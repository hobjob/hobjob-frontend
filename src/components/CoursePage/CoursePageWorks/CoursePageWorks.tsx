import React from 'react'
import Slider from "react-slick";

interface CoursePageWorksProps {
	title: string
	images: string[]
}

const CoursePageWorks: React.FC<CoursePageWorksProps> = ({ title, images }) => {
	const SliderRef = React.useRef<any>(null)

	const [currentSlide, setCurrentSlide] = React.useState<number>(1)

	let settings = {
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	const onClickPrev = () => {
		SliderRef.current?.slickPrev()
	}

	const onClickNext = () => {
		SliderRef.current?.slickNext()
	}

	return (
		<section className="course-page-works">
			<div className="container">
				<div className="course-page-works-wrapper">
					<h2 className="course-page__title mb course-page-works__title">
						{title}
					</h2>

					<div className="course-page-works-slider-wrapper">
						<Slider {...settings} ref={SliderRef} className='course-page-works-slider' beforeChange={(_, currentSlideIndex) => setCurrentSlide(currentSlideIndex + 1)}>
							{images.map((image, index) => (
								<img src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`} alt="" className='course-page-works-slider__image' key={`course-page-works-slider__image-${index}`} />
							))}
						</Slider>

						<div className="course-page-works-slider-nav">
							<button className="course-page-works-slider-nav__btn prev" onClick={onClickPrev}>
								<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="25" cy="25" r="25" transform="rotate(180 25 25)" fill="#F4F4F4" />
									<path d="M34.7403 26.6582C35.2782 26.6582 35.7143 26.2222 35.7143 25.6842C35.7143 25.1462 35.2782 24.7102 34.7403 24.7102V26.6582ZM14.571 24.9954C14.1906 25.3758 14.1906 25.9925 14.571 26.373L20.7697 32.5715C21.15 32.9521 21.7668 32.9521 22.1471 32.5715C22.5276 32.1912 22.5276 31.5745 22.1471 31.1941L16.6372 25.6842L22.1471 20.1743C22.5276 19.794 22.5276 19.1773 22.1471 18.7969C21.7668 18.4164 21.15 18.4164 20.7697 18.7969L14.571 24.9954ZM34.7403 24.7102H15.2598V26.6582L34.7403 26.6582V24.7102Z" fill="black" />
								</svg>
							</button>

							<p className="course-page-works-slider-nav__count">
								{currentSlide} / {images.length}
							</p>

							<button className="course-page-works-slider-nav__btn next" onClick={onClickNext}>
								<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="25" cy="25" r="25" fill="#F4F4F4" />
									<path d="M15.2597 23.3418C14.7218 23.3418 14.2857 23.7778 14.2857 24.3158C14.2857 24.8538 14.7218 25.2898 15.2597 25.2898V23.3418ZM35.429 25.0046C35.8094 24.6242 35.8094 24.0075 35.429 23.627L29.2303 17.4285C28.85 17.0479 28.2332 17.0479 27.8529 17.4285C27.4724 17.8088 27.4724 18.4255 27.8529 18.8059L33.3628 24.3158L27.8529 29.8257C27.4724 30.206 27.4724 30.8227 27.8529 31.2031C28.2332 31.5836 28.85 31.5836 29.2303 31.2031L35.429 25.0046ZM15.2597 25.2898H34.7402V23.3418H15.2597V25.2898Z" fill="black" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CoursePageWorks