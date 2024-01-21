import React from 'react'

import { CoursePageFeedbackBlock } from '../../';

import { CoursePageFeedbackModel } from './CoursePageFeedbackBlock';

const CoursePageFeedback: React.FC<{ feedbacks: CoursePageFeedbackModel[] }> = ({ feedbacks }) => {
	const [isMore, setIsMore] = React.useState<boolean>(false)

	return (
		<section className='course-page-feedback'>
			<div className="container">
				<div className="course-page-feedback-wrapper">
					<h2 className="course-page__title mb course-page-feedback__title">
						Отзывы учеников
					</h2>

					<div className="course-page-feedback-block-wrapper">
						{feedbacks && feedbacks.map((feedback, index) => (
							isMore ? <CoursePageFeedbackBlock {...feedback} key={`course-page-feedback-block-${index}`} /> : index < 4 ? <CoursePageFeedbackBlock {...feedback} key={`course-page-feedback-block-${index}`} /> : null
						))}
					</div>

					{!isMore ? (
						<div className="course-page-feedback-btn">
							<button className="btn__gray course-page-feedback-btn__btn" onClick={() => setIsMore(true)}>
								Показать еще
							</button>
						</div>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default CoursePageFeedback