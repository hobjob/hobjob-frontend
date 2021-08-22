import React from 'react'
import ReactWebMediaPlayer from "react-web-media-player";

const PassingVideo = ({
    PlayerRef,
    lessons,
    courseId,
    lessonNum,
    lessonIndex,
}) => {
    return (
        <div className="passing-video">
            <ReactWebMediaPlayer
                ref={PlayerRef}
                title={lessons[lessonIndex].title}
                color="#dd9e5e"
                video={`${
                    process.env.REACT_APP_API_DOMEN
                }/courses/${courseId}/video/${lessonNum}/${localStorage.getItem(
                    "accessToken"
                )}`}
                height={document.documentElement.clientWidth > 900 ? 500 : 350}
                width="100%"
                thumbnail={`${process.env.REACT_APP_DOMEN}/${lessons[lessonIndex].image}`}
            />
        </div>
    );
};

export default PassingVideo
