import React from "react";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import {
	CoursePageContentVideo,
	CoursePageContentLessons,
} from "../../";

const CoursePageContent: React.FC = () => {
	const {
		courseByUrl: { _id, lessons }
	} = useTypedSelector(({ courses }) => courses);

	return (
		<section
			className={`course-page-content ${lessons[0].video.vertical ? "vertical" : ""
				}`}
		>
			<div className="container">
				<div className="course-page-content-wrapper">
					<div className="course-page-content-list">
						<CoursePageContentLessons lessons={lessons} />
					</div>

					<div className="course-page-content-video">
						<CoursePageContentVideo
							courseId={_id}
							image={lessons[0].image}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoursePageContent;
