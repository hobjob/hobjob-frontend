import React from "react";
import Hls from "hls.js";

const PassingVideo = ({
    PlayerRef,
    lessons,
    courseId,
    lessonNum,
    lessonIndex,
}) => {
    React.useEffect(() => {
        if (Hls.isSupported()) {
            const video = document.getElementById("video");
            const hls = new Hls({
                xhrSetup: (xhr) => {
                    xhr.setRequestHeader(
                        "Authorization",
                        `Bearer ${localStorage.getItem("accessToken")}`
                    );
                },
            });
            hls.attachMedia(video);

            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                hls.loadSource(
                    `${process.env.REACT_APP_API_DOMEN}/courses/${courseId}/video/${lessonNum}/index.m3u8`
                );
            });
        }
    }, []);
    return (
        <div className="passing-video">
            <video id="video" controls width="100%"></video>
            {/* <ReactHlsPlayer
                src={`${
                    process.env.REACT_APP_API_DOMEN
                }/courses/${courseId}/video/${lessonNum}/${localStorage.getItem(
                    "accessToken"
                )}`}
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
            /> */}
        </div>
    );
};

export default PassingVideo;
