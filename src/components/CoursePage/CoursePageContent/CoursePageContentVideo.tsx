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
		<>
			<VideoPlayer
				url={`${process.env.REACT_APP_API_DOMEN}/courses/first/${courseId}/video/playlist.m3u8`}
				image={`${process.env.REACT_APP_IMAGE_DOMEN}/${image?.size_1536}`}
			/>
		</>
	);
};

export default CoursePageContentVideo;
