import React from "react";
import { useDispatch } from "react-redux";

import { updateCountViewingDuration } from "../../../redux/actions/user";

import $api from "../../../http/";

import { VideoPlayer } from "../../";

interface PassingCurrentVideoProps {
	courseId: string;
	lessonNum: number;
	lessonIndex: number;
	image: string;
}

const PassingCurrentVideo: React.FC<PassingCurrentVideoProps> = ({
	courseId,
	lessonNum,
	lessonIndex,
	image,
}) => {
	const dispatch = useDispatch();

	const [duration, setDuration] = React.useState(0);

	const callbackError = (e: any, data: any, VideoRef: any) => {
		const seconds = VideoRef.current && VideoRef.current.getSecondsLoaded();

		if (data && data.type == "networkError") {
			try {
				// setPlay(false);

				$api.get(`/refresh`)
					.then(({ data }) => {
						localStorage.setItem("accessToken", data.accessToken);

						// setPlay(true);

						VideoRef.current.seekTo(seconds, "seconds");
					})
					.catch(() => {
						$api.post("/logout").then(() => {
							localStorage.removeItem("accessToken");
							window.location.reload();
						});
					});
			} catch (e) {
				window.location.reload();
			}
		}
	};

	const callbackPause = () => {
		console.log("PAUSE CALLBACK")
		// dispatch(updateCountViewingDuration(courseId, lessonIndex, duration) as any);

		// setPlay(false);
	};

	const callbackDuration = ({ playedSeconds }: { playedSeconds: number }) => {
		setDuration(Math.floor(playedSeconds));
	};

	React.useEffect(() => {
		// var player = new window.Playerjs({
		// 	id: "player",
		// 	file: `${process.env.REACT_APP_API_DOMEN}/courses/${courseId}/video/${lessonNum}/${localStorage.getItem("accessToken")}/playlist.m3u8`,
		// 	default_quality: "720p",
		// 	poster: `${process.env.REACT_APP_IMAGE_DOMEN}/${image}`
		// });
	}, [courseId, lessonNum])

	return (
		<div className="passing-current-lesson-video">
			{/* <div id="player"></div> */}

			<VideoPlayer
				url={`${process.env.REACT_APP_API_DOMEN
					}/courses/${courseId}/video/${lessonNum}/${localStorage.getItem(
						"accessToken"
					)}/playlist.m3u8`}
				image={`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}
				callbackError={callbackError}
				callbackPause={callbackPause}
				callbackDuration={callbackDuration}
			/>
		</div>
	);
};

export default PassingCurrentVideo;
