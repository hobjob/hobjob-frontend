import React from "react";
import { Link as LinkScroll } from "react-scroll";

import { CourseGoodLesson } from "../../../../models/Course/ICourseGood";

interface CoursePageContentLessonsItemProps extends CourseGoodLesson {
	num: number
}

const CoursePageContentLessonsItem: React.FC<
	CoursePageContentLessonsItemProps
> = ({ num, image, title, description, materials }) => {
	return (
		<>
			{/* <LinkScroll
				to={num === 1 ? "" : "price"}
				spy={true}
				smooth={true}
				offset={-25}
				duration={1000}
				className="course-page-content-list-item"
			> */}
			<div className="course-page-content-list-item">
				<div className="course-page-content-list-item-image" style={{
					backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_768}')`,
				}}>
					{/* {num === 1 ? <>
							<div className="course-page-content-list-item-image-icon">
								<svg
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="25" cy="25" r="25" fill="white" />
									<path
										d="M33 24.5L20.25 31.8612V17.1388L33 24.5Z"
										fill="black"
									/>
								</svg>
							</div>

							<div className="course-page-content-list-item-image-plaecholder"></div>
						</> : null} */}
				</div>

				<div className="course-page-content-list-item-text">
					<h4 className="course-page-content-list-item-text__title">
						{title}
					</h4>

					{description !== "" ? (
						<p className="course-page-content-list-item-text__description">
							{description}
						</p>
					) : null}

					{materials.length ? <div className="course-page-content-list-item-text-materials">
						{materials.map((material, index) => (
							<div className="course-page-content-list-item-text-materials-item" key={`course-page-content-list-item-text-materials-item-${index}`}>
								<svg
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M13.2006 9.665L10.625 12.2412V5.625C10.625 5.28 10.345 5 10 5C9.655 5 9.375 5.28 9.375 5.625V12.2412L6.79938 9.66562C6.555 9.42124 6.15938 9.42124 5.91562 9.66562C5.67124 9.91 5.67124 10.3056 5.91562 10.5493L9.45124 14.085C9.60124 14.235 9.80624 14.2812 10.0007 14.2468C10.1944 14.2812 10.4 14.2343 10.55 14.085L14.0857 10.5493C14.33 10.305 14.33 9.90938 14.0857 9.66562C13.8406 9.42124 13.445 9.42124 13.2006 9.665ZM10 0C4.47752 0 0 4.47686 0 10C0 15.5231 4.47752 20 10 20C15.5225 20 20 15.5225 20 10C20 4.47752 15.5231 0 10 0ZM10 18.75C5.16748 18.75 1.25 14.8325 1.25 10C1.25 5.16748 5.16748 1.25 10 1.25C14.8325 1.25 18.75 5.16748 18.75 10C18.75 14.8325 14.8325 18.75 10 18.75Z" />
								</svg>
								<p className="course-page-content-list-item-text-materials-item__title">
									{material}
								</p>
							</div>
						))}
					</div> : null}
				</div>
			</div>
			{/* </LinkScroll> */}
		</>
	);
};

export default CoursePageContentLessonsItem;
