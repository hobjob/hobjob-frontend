import React from "react";
import {VideoPlayer} from "../";

const CoursePageLessonsVideo = ({courseId, image, videoPlaecholder}) => {
    const [play, setPlay] = React.useState(false);
    const [isFirstPlay, setIsFirstPlay] = React.useState(true);

    const VideoRef = React.useRef();

    React.useEffect(() => {
        if (isFirstPlay) {
            setIsFirstPlay(false);
        } else if (videoPlaecholder) {
            setPlay(false);
        } else {
            setPlay(true);
        }
    }, [videoPlaecholder]);

    return (
        <>
            <VideoPlayer
                url={`${process.env.REACT_APP_API_DOMEN}/courses/first/${courseId}/video/playlist.m3u8`}
                image={`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}
                play={play}
                setPlay={setPlay}
                VideoRef={VideoRef}
            />
        </>
    );
};

export default CoursePageLessonsVideo;
