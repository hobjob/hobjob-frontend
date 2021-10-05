import React from "react";
import {useSelector} from "react-redux";
import {animateScroll as scroll} from "react-scroll";
import ReactPlayer from "react-player";

import $api from "../../http/";

const PassingVideo = ({courseId, lessonNum, image}) => {
    const {timecodeSeconds} = useSelector(({passing}) => passing);

    const [play, setPlay] = React.useState(true);

    const VideoRef = React.useRef();

    React.useEffect(() => {
        if (timecodeSeconds !== 0) {
            VideoRef.current.seekTo(timecodeSeconds, "seconds");

            scroll.scrollToTop({duration: 500});
        }
    }, [timecodeSeconds]);

    const handlerError = (e, data) => {
        setPlay(false);

        const seconds = VideoRef.current.getSecondsLoaded();

        if (data && data.type == "networkError") {
            try {
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
        setPlay(false);
    };

    const handlerPlay = () => {
        setPlay(true);
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
                ref={VideoRef}
                url={`${
                    process.env.REACT_APP_API_DOMEN
                }/courses/${courseId}/video/${lessonNum}/${localStorage.getItem(
                    "accessToken"
                )}/index.m3u8`}
                width="100%"
                height="auto"
                style={{
                    borderRadius: "25px",
                    overflow: "hidden",
                }}
            />
        </div>
    );
};

export default PassingVideo;
