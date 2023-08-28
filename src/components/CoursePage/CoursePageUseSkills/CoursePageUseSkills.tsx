import React from "react";

import { CoursePageUseSkillsItem } from "../../";

import { CourseGoodUseSkill } from "../../../models/Course/ICourseGood";

interface CoursePageUseSkillsProps {
	useSkills: CourseGoodUseSkill[];
}

const CoursePageUseSkills: React.FC<CoursePageUseSkillsProps> = ({
	useSkills,
}) => {
	return (
		<section className="course-page-use-skills">
			<div className="container">
				<div className="course-page-use-skills-wrapper">
					<h2 className="course-page__title mb course-page-use-skills__title">
						По итогу курса вы сможете
					</h2>

					<div className="course-page-use-skills-block-text">
						<div className="course-page-use-skills-block-text-items-wrapper">
							{useSkills.map((useSkill, index) => (
								<CoursePageUseSkillsItem
									{...useSkill}
									key={`course-page-use-skills-block-text-item-${index}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoursePageUseSkills;
