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
        }
    };

    return (
        <div className="passing-video">
            <ReactPlayer
                playing={play}
                config={{
                    file: {
                        attributes: {
                            poster: `${process.env.REACT_APP_IMAGE_DOMEN}/${image}`,
                        },
                    },
                }}
                onError={handlerError}
                ref={VideoRef}
                url={`${
                    process.env.REACT_APP_API_DOMEN
                }/courses/${courseId}/video/${lessonNum}/${localStorage.getItem(
                    "accessToken"
                )}/index.m3u8`}
                playsinline
                controls
                width="100%"
                height="auto"
            />
        </div>
    );
};

export default PassingVideo;
