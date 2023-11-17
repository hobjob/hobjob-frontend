import React from "react";
import ReactPlayer from "react-player";

import { VideoPlayerCustom } from '../../'

interface VideoPlayerProps {
	url: string;
	image: string;

	callbackError?: (e: any, data: any, VideoRef: any) => void;
	callbackPause?: () => void;
	callbackDuration?: (duration: any) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = React.memo(({
	url,
	image,
	callbackError,
	callbackPause,
}) => {
	const isIOSCheck = () => {
		const userAgent = navigator.userAgent.toLowerCase();
		const isIOS = /mobile|iphone|ipad|ipod\sce|palm/i.test(userAgent);

		if (isIOS) {
			return true;
		}

		return false
	}
	const config = {
		file: {
			attributes: {
				poster: image,
			},
		},
	};

	return (
		<>
			{isIOSCheck() ? (

				<div className={`video-player`}>
					<ReactPlayer
						playsinline
						controls
						url={url}
						width="100%"
						height="100%"
						config={config}
					/>
				</div>
			) : (
				<VideoPlayerCustom callbackPause={callbackPause} callbackError={callbackError} url={url} image={image} />
			)}
		</>

	);
});

export default VideoPlayer;
