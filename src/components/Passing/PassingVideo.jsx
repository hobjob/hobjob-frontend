import React from "react";
import {useSelector} from "react-redux";
import {animateScroll as scroll} from "react-scroll";

import $api from "../../http/";

const PassingVideo = ({courseId, lessonNum, image}) => {
    const {timecodeSeconds} = useSelector(({passing}) => passing);
    // const VideoRef = React.useRef();

    // React.useEffect(() => {
    //     if (Hls.isSupported()) {
    //         alert(123);
    //         const hls = new Hls({
    // xhrSetup: (xhr) => {
    //     xhr.setRequestHeader(
    //         "Authorization",
    //         `Bearer ${localStorage.getItem("accessToken")}`
    //     );
    // },
    //         });

    //         hls.attachMedia(VideoRef.current);

    //         hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    //             hls.loadSource(
    //                 `${process.env.REACT_APP_API_DOMEN}/courses/${courseId}/video/${lessonNum}/index.m3u8`
    //             );
    //         });

    //         hls.on(Hls.Events.ERROR, function (e, data) {
    //             hls.stopLoad();

    //             if (data.fatal) {
    //                 switch (data.type) {
    //                     case Hls.ErrorTypes.NETWORK_ERROR:
    //                         $api.get(`/refresh`)
    //                             .then(({data}) => {
    //                                 localStorage.setItem(
    //                                     "accessToken",
    //                                     data.accessToken
    //                                 );

    //                                 hls.startLoad();
    //                             })
    //                             .catch(() => {
    //                                 $api.post("/logout").then(() => {
    //                                     localStorage.removeItem("accessToken");
    //                                     window.location.reload();
    //                                 });
    //                             });
    //                         break;
    //                 }
    //             }
    //         });
    //     }
    // }, [courseId, lessonNum]);

    // React.useEffect(() => {
    //     if (timecodeSeconds !== 0) {
    //         VideoRef.current.currentTime = timecodeSeconds;

    //         scroll.scrollToTop({duration: 500});
    //     }
    // }, [timecodeSeconds]);

    return (
        <div className="passing-video">
        </div>
    );
};

export default PassingVideo;
