import React from "react";
import ReactPlayer from "react-player";

const CoursePageLessonsVideo = ({courseId, videoPlaecholder}) => {
    const [play, setPlay] = React.useState(true);
    const [isFirst, setIsFirst] = React.useState(true);

    React.useEffect(() => {
        if (isFirst) {
            setIsFirst(false);
        } else if (videoPlaecholder) {
            setPlay(false);
        } else {
            setPlay(true);
        }
    }, [videoPlaecholder]);

    const VideoRef = React.useRef();

    const handlerError = (e, data) => {

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
