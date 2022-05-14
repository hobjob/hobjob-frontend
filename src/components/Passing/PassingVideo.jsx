import React from "react";
import {useDispatch} from "react-redux";

import {updateCountViewingDuration} from "../../redux/actions/user";

import $api from "../../http/";

import {VideoPlayer} from '../';

const PassingVideo = ({courseId, lessonNum, lessonIndex, image}) => {
    const dispatch = useDispatch();

    const [play, setPlay] = React.useState(false);
    const [duration, setDuration] = React.useState(0);

    const VideoRef = React.useRef();

    const callbackError = (e, data) => {
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

    const callbackPause = () => {
        dispatch(updateCountViewingDuration(courseId, lessonIndex, duration));

        setPlay(false);
    };

    const callbackDuration = ({playedSeconds}) => {
        setDuration(Math.floor(playedSeconds));
    };

    return (
        <div className="passing-video">
            <VideoPlayer
                url={`${
                    process.env.REACT_APP_API_DOMEN
                }/courses/${courseId}/video/${lessonNum}/${localStorage.getItem(
                    "accessToken"
                )}/playlist.m3u8`}
                image={`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}
                play={play}
                setPlay={setPlay}
                VideoRef={VideoRef}
                callbackError={callbackError}
                callbackPause={callbackPause}
                callbackDuration={callbackDuration}
            />
        </div>
    );
};

export default PassingVideo;
