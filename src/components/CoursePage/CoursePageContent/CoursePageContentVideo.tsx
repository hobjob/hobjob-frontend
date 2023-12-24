import React from "react";
import { VideoPlayer } from "../../";

import { Image } from "../../../models/IImage";

interface CoursePageContentVideoProps {
	courseId: string;
	image?: Image;
}

const CoursePageContentVideo: React.FC<CoursePageContentVideoProps> = ({
	courseId,
	image,
}) => {
	return (
		<div className="course-page-content-video">
			<h2 className="title__mb course-page-content-video__title">
				Пример урока из курса
			</h2>

			<VideoPlayer
				url={`${process.env.REACT_APP_API_DOMEN}/courses/first/${courseId}/video/playlist.m3u8`}
				image={`${process.env.REACT_APP_IMAGE_DOMEN}/${image?.size_1536}`}
			/>
		</div>
	);
};

export default CoursePageContentVideo;
