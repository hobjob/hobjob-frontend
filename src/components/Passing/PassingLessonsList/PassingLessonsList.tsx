import React from "react";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { PassingLessonsListItem } from "../../";

const PassingCoursesList: React.FC = () => {
	const { course, currentLessonIndex } = useTypedSelector(({ passing }) => passing);

	return (
		<div className="passing-lessons-list">
			{course.lessons.map((lesson, index) => (
				<PassingLessonsListItem
					{...lesson}
					courseId={course._id}
					active={currentLessonIndex === index ? true : false}
					num={index + 1}
					key={`passing-lessons-list-item-${index}`}
				/>
			))}
		</div>
	);
};

export default PassingCoursesList;
