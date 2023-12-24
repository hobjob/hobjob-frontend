import React from "react";
import { useDispatch } from "react-redux";

import {
	CoursePageMasterWorksVideo,
	CoursePageMasterWorksImage,
	CoursePageMasterWorksItemVideo,
	CoursePageMasterWorksItemImage,
} from "../../../";

import {
	openWorksVideo,
	openWorksImage,
} from "../../../../redux/actions/coursePage";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const CoursePageMasterWorks: React.FC = () => {
	const dispatch = useDispatch();

	const {
		works: { isOpenVideo, isOpenImage },
	} = useTypedSelector(({ coursePage }) => coursePage);

	const { items } = useTypedSelector(({ masters }) => masters);
	const { courseByUrl } = useTypedSelector(({ courses }) => courses);

	return (
		<div className="course-page-master-works">
			<h3 className="course-page-master-works__title">
				Работы мастера
			</h3>


			<CoursePageMasterWorksVideo />

			<CoursePageMasterWorksImage />

			<div className="course-page-master-works-items-wrapper">
				{items[courseByUrl.masterId].worksVideo.map((work, index) => (
					<CoursePageMasterWorksItemVideo
						{...work}
						onClickOpenVideo={() =>
							dispatch(openWorksVideo(work.url) as any)
						}
						key={`course-page-master-works-item-video-${index}`}
					/>
				))}

				{items[courseByUrl.masterId].worksImage.map((work, index) => (
					<CoursePageMasterWorksItemImage
						{...work}
						onClickOpenImage={() =>
							dispatch(openWorksImage(work.size_2048) as any)
						}
						key={`course-page-master-works-item-image-${index}`}
					/>
				))}
			</div>
		</div>
	);
};

export default CoursePageMasterWorks;
