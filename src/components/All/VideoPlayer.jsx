import React from "react";
import ReactPlayer from "react-player";
import * as Hls from "hls.js";

const VideoPlayer = ({
    url,
    image,
    play,
    setPlay,
    VideoRef,
    callbackError,
    callbackPause,
    callbackDuration,
}) => {
    const [stateSelectQuality, setStateSelectQuality] = React.useState(false);
    const [
        stateSelectQualityAnimationClose,
        setStateSelectQualityAnimationClose,
    ] = React.useState(false);
    const [levels, setLevels] = React.useState([]);
    const [currentIndexLevels, setCurrentIndexLevels] = React.useState(0);

    const SelectQualityRef = React.useRef();

    React.useEffect(() => {
        document.body.addEventListener("click", handlerSelectQuality);
    }, []);

    React.useEffect(() => {
        if (VideoRef.current && VideoRef.current.getInternalPlayer("hls")) {
            setCurrentIndexLevels(
                VideoRef.current.getInternalPlayer("hls").maxAutoLevel
            );
        }
    }, [
        VideoRef.current &&
            VideoRef.current.getInternalPlayer("hls") &&
            VideoRef.current.getInternalPlayer("hls").maxAutoLevel,
    ]);

    const handlerPause = () => {
        setPlay(false);

        if (callbackPause) {
            callbackPause();
        }
    };

    const handlerPlay = () => {
        setPlay(true);
    };

    const openSelectQuality = () => {
        setTimeout(() => {
            setStateSelectQuality(true);
        }, 1);
    };

    const closeSelectQuality = () => {
        setStateSelectQualityAnimationClose(true);

        setTimeout(() => {
            setStateSelectQualityAnimationClose(false);
            setStateSelectQuality(false);
        }, 180);
    };

    const handlerSelectQuality = (e) => {
        if (
            SelectQualityRef.current &&
            !e.composedPath().includes(SelectQualityRef.current)
        ) {
            closeSelectQuality();
        }
    };

    const handlerReady = (player) => {
        const hls = player.getInternalPlayer("hls");
        setLevels(hls.levels);
    };

    const onClickSetCurrentIndexLevels = (index) => () => {
        closeSelectQuality();
        setCurrentIndexLevels(index);
        VideoRef.current.getInternalPlayer("hls").currentLevel = index;
    };

    const config = {
        file: {
            attributes: {
                poster: image,
            },
        },
    };

    return (
        <div className="video-player">
            <div className={`video-player-content ${play ? "play" : ""}`}>
                {Hls.isSupported() ? (
                    <>
                        <div
                            className="video-player-content-quality"
                            onClick={openSelectQuality}
                        >
                            <p className="video-player-content-quality__title">
                                {levels[currentIndexLevels] &&
                                    levels[currentIndexLevels].height}
                                {levels[currentIndexLevels] &&
                                levels[currentIndexLevels].height == 1080 ? (
                                    <span>HD</span>
                                ) : null}
                            </p>
                        </div>
                        {stateSelectQuality ? (
                            <div
                                className={`video-player-content-quality-select ${
                                    stateSelectQualityAnimationClose
                                        ? "close"
                                        : ""
                                }`}
                                ref={SelectQualityRef}
                            >
                                {levels.map((quality, index) =>
                                    index !== currentIndexLevels ? (
                                        <div
                                            className="video-player-content-quality-select-item"
                                            key={`video-player-content-quality-select-item-${index}`}
                                        >
                                            <p
                                                className="video-player-content-quality-select-item__title"
                                                onClick={onClickSetCurrentIndexLevels(
                                                    index
                                                )}
                                            >
                                                {quality.height}p
                                                {quality.height == 1080 ? (
                                                    <span>HD</span>
                                                ) : null}
                                            </p>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        ) : null}
                    </>
				) : null}
				
                <ReactPlayer
                    playing={play}
                    controls
                    playsinline
                    onPause={handlerPause}
                    onPlay={handlerPlay}
                    onError={callbackError}
                    onProgress={callbackDuration}
                    ref={VideoRef}
                    onReady={handlerReady}
                    url={url}
                    width="100%"
                    height="100%"
                    config={config}
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
