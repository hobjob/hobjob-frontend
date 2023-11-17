import React from 'react'
import { useParams, Link } from "react-router-dom";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { PassingCurrentVideo, PassingCurrentLessonContent } from '../../'

const PassingCurrentLesson: React.FC = () => {
	const { num } = useParams();

	const lessonNum = num ? parseInt(num) : 1;

	// Array of lessons starts at zero
	const lessonIndex = lessonNum - 1;

	const { course } = useTypedSelector(({ passing }) => passing);

	return (
		<div className="passing-current-lesson">
			<Link to="/go/training" className="passing-current-lesson__back">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="20" cy="20" r="20" fill="#F4F4F4" />
					<path d="M25.6001 20.4001L13.6001 20.4001M13.6001 20.4001L19.6001 14.4M13.6001 20.4001L19.6001 26.4" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>

				Мое обучение
			</Link>

			<h2 className="passing-current-lesson__title">
				{course.title}
			</h2>

			<PassingCurrentVideo
				{...course}
				image={
					course.lessons[lessonIndex].image
						.size_2048
				}
				courseId={course._id}
				lessonNum={lessonNum}
				lessonIndex={lessonIndex}
			/>

			<PassingCurrentLessonContent {...course.lessons[lessonIndex]} lessonNum={lessonNum} />
		</div>
	)
}

export default PassingCurrentLesson