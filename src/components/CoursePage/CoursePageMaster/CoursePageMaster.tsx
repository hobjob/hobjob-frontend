import React from "react";

import { Master } from "../../../models/IMaster";

import {
	Dzen,
	Vk,
	Youtube,
	Instagram,
	Telegram,
	Tiktok,
	CoursePageMasterWorks,
} from "../../";

interface CoursePageMasterProps {
	master: Master;
}

const CoursePageMaster: React.FC<CoursePageMasterProps> = ({ master }) => {
	return (
		<>
			<section className="course-page-master">
				<div className="container">
					<div className="course-page-master-wrapper">
						<h2 className="course-page__title mb course-page-master__title">
							Кто вас будет обучать
						</h2>

						<div className="course-page-master-top">
							<div className="course-page-master-top-title">
								<div
									className="course-page-master-top-title-avatar"
									style={{
										backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar.size_768}')`,
									}}
								></div>
								<span>{master.name} {master.surname}</span>
							</div>

							<div className="course-page-master-top-description">
								<p className="course-page-master-top-description__text">
									{master.masterDescription}
								</p>
							</div>
						</div>

						{master.worksImage.length ||
							master.worksVideo.length ? (
							<CoursePageMasterWorks />
						) : null}
					</div>
				</div>
			</section>
		</>
	);
};

export default CoursePageMaster;
