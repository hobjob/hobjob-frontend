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
						<div className="course-page-master-title">
							<div
								className="course-page-master-title-avatar"
								style={{
									backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar.size_768}')`,
								}}
							></div>
							<span>{master.name} {master.surname}</span>

							<div className="course-page-master-title-socials">
								{master.socials.dzen ? (
									<a
										href={master.socials.dzen}
										className="course-page-master-title-socials__link"
									>
										<Dzen />
									</a>
								) : null}

								{master.socials.vk ? (
									<a
										href={master.socials.vk}
										className="course-page-master-title-socials__link"
									>
										<Vk />
									</a>
								) : null}

								{master.socials.youtube ? (
									<a
										href={master.socials.youtube}
										className="course-page-master-title-socials__link"
									>
										<Youtube />
									</a>
								) : null}

								{master.socials.inst ? (
									<a
										href={master.socials.inst}
										className="course-page-master-title-socials__link"
									>
										<Instagram />
									</a>
								) : null}

								{master.socials.telegram ? (
									<a
										href={master.socials.telegram}
										className="course-page-master-title-socials__link"
									>
										<Telegram />
									</a>
								) : null}

								{master.socials.tiktok ? (
									<a
										href={master.socials.tiktok}
										className="course-page-master-title-socials__link"
									>
										<Tiktok />
									</a>
								) : null}
							</div>
						</div>

						<div className="course-page-master-description">
							<p className="course-page-master-description__text">
								{master.masterDescription}
							</p>
						</div>
					</div>
				</div>

				{master.worksImage.length ||
					master.worksVideo.length ? (
					<CoursePageMasterWorks />
				) : null}
			</section>
		</>
	);
};

export default CoursePageMaster;
