import React from "react";

import CoursePagePassingBlockTrainingImage from "../../../assets/images/course-page-passing-block-training-image.jpg";
import CoursePagePassingBlockPassingImage from "../../../assets/images/course-page-passing-block-passing-image.png";

interface CoursePagePassingProps {
	title: string
}

const CoursePagePassing: React.FC<CoursePagePassingProps> = ({ title }) => {
	return (
		<section className="course-page-passing">
			<div className="container">
				<div className="course-page-passing-wrapper">
					<div className="course-page-passing-title">
						<h2 className="course-page__title course-page-passing-title__title">
							Что будет после покупки?
						</h2>

						<p className="course-page-passing-title__subtitle">
							Это пример, у вас будет <br /> «{title}»
						</p>
					</div>


					<div className="course-page-passing-block-wrapper">
						<div className="course-page-passing-block hover-scale course-page-passing-block-training">
							<h3 className="course-page-passing-block__title">
								Вам откроется доступ к курсу
							</h3>

							<img src={CoursePagePassingBlockTrainingImage} alt="" className="course-page-passing-block__image" />
						</div>

						<div className="course-page-passing-block hover-scale course-page-passing-block-passing">
							<h3 className="course-page-passing-block__title">
								Получаете новый навык
							</h3>

							<img src={CoursePagePassingBlockPassingImage} alt="" className="course-page-passing-block__image" />
						</div>
					</div>

					{/*

                <picture>
                    <source
                        media="(max-width: 750px)"
                        srcSet={CoursePagePassingImageMedia}
                    />

                    <img
                        className="course-page-passing__img"
                        alt=""
                        src={CoursePagePassingImage}
                    />
                </picture> */}
				</div>
			</div>
		</section>
	);
};

export default CoursePagePassing;
