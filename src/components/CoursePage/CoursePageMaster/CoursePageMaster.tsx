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
							<span>Здравствуйте! Я </span>
							<div
								className="course-page-master-title-avatar"
								style={{
									backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar.size_768}')`,
								}}
							></div>
							<span>{master.name} {master.surname}</span>
						</div>

						<div className="course-page-master-description">
							<p className="course-page-master-description__text">
								{master.masterDescription}
							</p>
						</div>

						<CoursePageMasterWorks />

						{/* <h2 className="course-page-master__title title__mb">
                            Мастер
                        </h2>

                        <div className="course-page-master-section">
                            <div className="course-page-master-section-about">
                                <div
                                    className="course-page-master-section-about-img"
                                    style={{
                                        backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar.size_768}')`,
                                    }}
                                ></div>
                                <div className="course-page-master-section-about-text">
                                    <h2 className="course-page-master-section-about-text__title">
                                        {master.name} {master.surname}
                                    </h2>

                                    {master ? (
                                        <p className="description course-page-master-section-about-text__description">
                                            {master.masterDescription}
                                        </p>
                                    ) : null}

                                    <div className="course-page-master-section-about-text-socials">
                                        {master.socials.dzen ? (
                                            <a
                                                href={master.socials.dzen}
                                                className="course-page-master-section-about-text-socials__link"
                                            >
                                                <Dzen />
                                            </a>
                                        ) : null}

                                        {master.socials.vk ? (
                                            <a
                                                href={master.socials.vk}
                                                className="course-page-master-section-about-text-socials__link"
                                            >
                                                <Vk />
                                            </a>
                                        ) : null}

                                        {master.socials.youtube ? (
                                            <a
                                                href={master.socials.youtube}
                                                className="course-page-master-section-about-text-socials__link"
                                            >
                                                <Youtube />
                                            </a>
                                        ) : null}

                                        {master.socials.inst ? (
                                            <a
                                                href={master.socials.inst}
                                                className="course-page-master-section-about-text-socials__link"
                                            >
                                                <Instagram />
                                            </a>
                                        ) : null}

                                        {master.socials.telegram ? (
                                            <a
                                                href={master.socials.telegram}
                                                className="course-page-master-section-about-text-socials__link"
                                            >
                                                <Telegram />
                                            </a>
                                        ) : null}

                                        {master.socials.tiktok ? (
                                            <a
                                                href={master.socials.tiktok}
                                                className="course-page-master-section-about-text-socials__link"
                                            >
                                                <Tiktok />
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </div>

                            {master.worksImage.length ||
                            master.worksVideo.length ? (
                                <CoursePageMasterWorks />
                            ) : null}
                        </div> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default CoursePageMaster;
