import React from "react";
import {useDispatch} from "react-redux";
import ReactPlayer from "react-player";

import {updateCountViewingDuration} from "../../redux/actions/user";

import $api from "../../http/";

const PassingVideo = ({courseId, lessonNum, lessonIndex}) => {
    const dispatch = useDispatch();

    const [play, setPlay] = React.useState(true);
    const [duration, setDuration] = React.useState(0);

    const VideoRef = React.useRef();

    const handlerError = (e, data) => {
        const seconds = VideoRef.current && VideoRef.current.getSecondsLoaded();

        if (data && data.type == "networkError") {
            try {
				setPlay(false);
				
                $api.get(`/refresh`)
                    .then(({data}) => {
                        localStorage.setItem("accessToken", data.accessToken);

                        setPlay(true);

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

    const handlerPause = () => {
        dispatch(updateCountViewingDuration(courseId, lessonIndex, duration));

        setPlay(false);
    };

    const handlerPlay = () => {
        setPlay(true);
    };

    const handlerDuration = ({playedSeconds}) => {
        setDuration(Math.floor(playedSeconds));
    };

    return (
        <div className="passing-video">
            <ReactPlayer
                playing={play}
                controls
                playsinline
                onError={handlerError}
                onPause={handlerPause}
                onPlay={handlerPlay}
                onProgress={handlerDuration}
                ref={VideoRef}
                url={`${
                    process.env.REACT_APP_API_DOMEN
                }/courses/${courseId}/video/${lessonNum}/${localStorage.getItem(
                    "accessToken"
                )}/index.m3u8`}
                width="100%"
                height="auto"
            />
        </div>
    );
};

export default PassingVideo;
