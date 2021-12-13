import React from "react";
import ReactPlayer from "react-player";

const CoursePageLessonsVideo = ({ courseId, image, }) => {
	const [play, setPlay] = React.useState(true);

	const VideoRef = React.useRef();

	const handlerError = (e, data) => {
		setPlay(false);

		const seconds = VideoRef.current && VideoRef.current.getSecondsLoaded();
	};

	const handlerPause = () => {
		setPlay(false);
	};

	const handlerPlay = () => {
		setPlay(true);
	};
	
	return (
		<ReactPlayer
			playing={play}
			controls
			playsinline
			onError={handlerError}
			onPause={handlerPause}
			onPlay={handlerPlay}
			ref={VideoRef}
			url={`${process.env.REACT_APP_API_DOMEN}/courses/first/${courseId}/video/index.m3u8`}
			width="100%"
			height="100%"
        />
    );
};

export default CoursePageLessonsVideo;
