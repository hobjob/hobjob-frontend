import React from "react";

import { CoursePageSkillsItem } from "../../";

import { CourseGoodSkill } from "../../../models/Course/ICourseGood";

interface CoursePageSkillsProps {
	items: string[];
}

const CoursePageSkills: React.FC<CoursePageSkillsProps> = ({ items }) => {
	return (
		<section className="course-page-skills">
			<div className="container">
				<div className="course-page-skills-wrapper">
					<h2 className="course-page__title mb course-page-skills__title">
						На курсе вы
					</h2>

					<div className="course-page-skills-block-wrapper">
						{items.map((item, index) => (
							<div className="course-page-skills-block" key={`course-page-skills-block-${index}`}>
								<p className="course-page-skills-block__num">{index + 1}</p>

								<h3 className="course-page-skills-block__title">
									{item}
								</h3>
							</div>
						))}
					</div>

					{/* <div className="course-page-skills-items-wrapper">
						{skills.map((skill, index) => (
							<CoursePageSkillsItem
								{...skill}
								key={`course-page-skills-item-${index}`}
							/>
						))}
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default CoursePageSkills;
