import React from 'react'

import { PassingCourseLesson } from '../../../../models/Passing/IPassing'

import { PassingCurrentLessonContentMaterials } from '../../../'

interface PassingCurrentLessonContentProps extends PassingCourseLesson {
	lessonNum: number
}

const PassingCurrentLessonContent: React.FC<PassingCurrentLessonContentProps> = ({ lessonNum, title, description, materials }) => {
	return (
		<div className='passing-current-lesson-content'>
			<p className="passing-current-lesson-content__subtitle">
				Урок {lessonNum}
			</p>

			<h3 className="passing-current-lesson-content__title">
				{title}
			</h3>

			<p className="passing-current-lesson-content__description">
				{description}
			</p>

			{materials.length ? <PassingCurrentLessonContentMaterials materials={materials} /> : null}
		</div>
	)
}

export default PassingCurrentLessonContent