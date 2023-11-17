import React from 'react'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '../../../../../hooks/useTypedSelector'

import { PassingCourseLessonMaterial } from '../../../../../models/Passing/IPassing'

import { fetchPassingCourseLessonMaterial } from "../../../../../redux/actions/passing";

import { PassingCurrentLessonContentMaterialsItem } from '../../../..'

interface PassingCurrentLessonContentMaterialsProps {
	materials: PassingCourseLessonMaterial[]
}

const PassingCurrentLessonContentMaterials: React.FC<PassingCurrentLessonContentMaterialsProps> = ({ materials }) => {
	const dispatch = useDispatch()

	const { course, currentLessonIndex } = useTypedSelector(({ passing }) => passing)

	const download = async (index: number) => {
		await fetchPassingCourseLessonMaterial(course._id, currentLessonIndex + 1, index + 1, materials[index].title)
	};

	return (
		<div className='passing-current-lesson-content-materials'>
			{materials.map((material, index) => (
				<PassingCurrentLessonContentMaterialsItem  {...material} download={download} index={index} key={`passing-current-lesson-content-materials-item-${index}`} />
			))}
		</div>
	)
}

export default PassingCurrentLessonContentMaterials