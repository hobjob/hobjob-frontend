import React from "react";
import { useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import Hls from "hls.js";
import screenfull from 'screenfull'

import { useTypedSelector } from '../../../../hooks/useTypedSelector'

import { toggleVideoPlayerVolume, setVideoPlayerVolume, setCloseVideoPlayerMenu, setVideoPlayerMenuState } from '../../../../redux/actions/videoPlayer'

import { VideoPlayerCustomVolume, VideoPlayerCustomMenu } from '../../../'

interface VideoPlayerCustomProps {
	url: string;
	image: string;

	callbackError?: (e: any, data: any, VideoRef: any) => void;
	callbackPause?: () => void;
	callbackDuration?: (duration: any) => void;
}

const VideoPlayerCustom: React.FC<VideoPlayerCustomProps> = React.memo(({
	url,
	image,
	callbackError,
	callbackPause,
}) => {
	const dispatch = useDispatch()

	const { menu: { currentQuality, currentSpeed, ...menu }, volume } = useTypedSelector(({ videoPlayer }) => videoPlayer)

	const [play, setPlay] = React.useState<boolean>(false);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const [currentTime, setCurrentTime] = React.useState<number>(0);
	const [totalTime, setTotalTime] = React.useState<number>(0);
	const [loadTime, setLoadTime] = React.useState<number>(0);

	const [positionLeftBarHovertimePX, setPositionLeftBarHovertimePX] = React.useState<number>(0);
	const [hoverTime, setHoverTime] = React.useState<number>(0);

	const [isFullScreen, setIsFullScreen] = React.useState<boolean>(false);

	const VideoRef = React.useRef<any>();
	const VideoBarRef = React.useRef<any>(null);


	React.useEffect(() => {
		const callbackFullScreen = () => setIsFullScreen(screenfull.isFullscreen);

		document.addEventListener(screenfull.raw.fullscreenchange, callbackFullScreen);

		return () =>
			document.removeEventListener(
				screenfull.raw.fullscreenchange,
				callbackFullScreen
			);
	}, []);

	React.useEffect(() => {
		if (VideoBarRef.current) {
			VideoBarRef.current.addEventListener('mousemove', (e: any) => {
				let x = VideoRef.current.wrapper.getBoundingClientRect().left

				let positionHoverTime = e.pageX - x - VideoBarRef.current?.offsetLeft

				setPositionLeftBarHovertimePX(positionHoverTime);
			}, {
				capture: true
			})
		}
	}, [VideoBarRef.current]);

	React.useEffect(() => {
		setHoverTime((totalTime / 100) * positionLeftBarHovertimePX / VideoBarRef.current?.clientWidth * 100);
	}, [positionLeftBarHovertimePX])

	// hotkeys
	window.onkeydown = (e: any) => {
		if (e.keyCode == 32 || e.keyCode == 75) {
			setPlay(!play)

			e.preventDefault()
		}

		if (e.keyCode === 38) {
			dispatch(setVideoPlayerVolume(volume + 5))

			e.preventDefault()
		}

		if (e.keyCode === 39) {
			add10Sec()

			e.preventDefault()
		}

		if (e.keyCode === 40) {
			dispatch(setVideoPlayerVolume(volume - 5))

			e.preventDefault()
		}

		if (e.keyCode === 37) {
			minus10Sec()

			e.preventDefault()
		}

		if (e.keyCode == 70) {
			openFullScreen()

			e.preventDefault()
		}

		if (e.keyCode == 77) {
			dispatch(toggleVideoPlayerVolume(volume) as any)

			e.preventDefault()
		}
	}

	React.useEffect(() => {
		if (VideoRef.current && VideoRef.current.getInternalPlayer("hls")) {
			const quality: { [key: number]: number } = {
				1080: 3,
				720: 2,
				480: 1,
				360: 0
			}

			VideoRef.current.getInternalPlayer("hls").currentLevel = quality[currentQuality];
		}
	}, [VideoRef.current && VideoRef.current.getInternalPlayer("hls"), currentQuality])

	const minus10Sec = () => {
		VideoRef.current.seekTo(VideoRef.current.getCurrentTime() - 10, 'seconds')

		setCurrentTime(VideoRef.current.getCurrentTime())
	}

	const add10Sec = () => {
		VideoRef.current.seekTo(VideoRef.current.getCurrentTime() + 10, 'seconds')

		setCurrentTime(VideoRef.current.getCurrentTime())
	}

	const setTime = (time: number) => {
		VideoRef.current.seekTo(time, 'seconds')

		setCurrentTime(VideoRef.current.getCurrentTime())
	}

	const handlerPause = () => {
		dispatch(setCloseVideoPlayerMenu() as any)

		setPlay(false);

		if (callbackPause) {
			callbackPause();
		}
	};

	const handlerPlay = () => {
		dispatch(setCloseVideoPlayerMenu() as any)

		setPlay(true);
	};

	const openFullScreen = () => {
		screenfull.toggle(document.querySelector(".video-player") as any)
	};

	const toggleMenu = () => {
		if (menu.state) {
			dispatch(setCloseVideoPlayerMenu() as any)
		} else {
			dispatch(setVideoPlayerMenuState(true))
		}
	};

	const config = {
		file: {
			attributes: {
				poster: image,
			},
		},
	};

	const convertTime = (duration: number) => {
		duration = Math.floor(duration);

		let minutes = Math.floor(duration / 60);
		let seconds = Math.floor(duration - minutes * 60);
		let minutesVal: string = String(minutes);
		let secondsVal: string = String(seconds);

		if (minutes < 10) {
			minutesVal = '0' + minutes;
		}

		if (seconds < 10) {
			secondsVal = '0' + seconds;
		}

		return minutesVal + ':' + secondsVal
	}

	return (
		<div className={`video-player ${isFullScreen ? "fullScreen" : ""} ${play ? "play" : ""}`}>
			<div className={`video-player-content ${play ? "play" : ""}`}>
				<div className="video-player-content-cover-click" onClick={play ? handlerPause : handlerPlay}></div>

				{isLoading && play ? (
					<div className="video-player-content-loader">
						<span className="video-player-content-loader__loader"></span>
					</div>
				) : null}

				<button className={`video-player-content__play ${!play ? "active" : ""}`} onClick={handlerPlay}>
					<svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M85 42.5C85 65.9721 65.9721 85 42.5 85C19.0279 85 0 65.9721 0 42.5C0 19.0279 19.0279 0 42.5 0C65.9721 0 85 19.0279 85 42.5Z" fill="black" fillOpacity="0.5" />
						<path d="M33.9891 29.7297C33.9891 28.8572 34.9335 28.3119 35.6891 28.7482L57.7891 41.5076C58.5447 41.9438 58.5447 43.0344 57.7891 43.4706L35.6891 56.23C34.9335 56.6663 33.9891 56.121 33.9891 55.2485V29.7297Z" fill="white" />
					</svg>
				</button>

				<div className="video-player-content-controls">
					<div className="video-player-content-controls-bar" ref={VideoBarRef} onClick={() => setTime(hoverTime)}>
						<span className="video-player-content-controls-bar__hovertime" style={{ left: `${positionLeftBarHovertimePX}px` }}>
							{convertTime(hoverTime)}
						</span>

						<div className="video-player-content-controls-bar-load" style={{ width: `${loadTime / totalTime * 100}%` }}></div>
						<div className="video-player-content-controls-bar-main" style={{ width: `${currentTime / totalTime * 100}%` }}></div>
					</div>

					<div className="video-player-content-controls-btns">
						<div className="video-player-content-controls-btns-block">
							{play ? (
								<button className="video-player-content-controls-btns-block__btn" onClick={handlerPause}>
									<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 1.32692C0 0.594084 0.610521 0 1.36364 0H4.09091C4.84402 0 5.45455 0.594084 5.45455 1.32692V15.9231C5.45455 16.6559 4.84402 17.25 4.09091 17.25H1.36364C0.610521 17.25 0 16.6559 0 15.9231V1.32692Z" fill="white" />
										<path d="M9.54546 1.32692C9.54546 0.594084 10.156 0 10.9091 0H13.6364C14.3895 0 15 0.594084 15 1.32692V15.9231C15 16.6559 14.3895 17.25 13.6364 17.25H10.9091C10.156 17.25 9.54546 16.6559 9.54546 15.9231V1.32692Z" fill="white" />
									</svg>
								</button>

							) : (
								<button className="video-player-content-controls-btns-block__btn" onClick={handlerPlay} >
									<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 0.698713C-5.66417e-09 0.161643 0.581394 -0.174023 1.04651 0.0945118L14.6512 7.94916C15.1163 8.21769 15.1163 8.88903 14.6512 9.15757L1.04651 17.0122C0.581394 17.2808 5.66417e-09 16.9451 0 16.408V0.698713Z" fill="white" />
									</svg>
								</button>
							)}

							<div className="video-player-content-controls-btns-block-nav">
								<button className="video-player-content-controls-btns-block__btn video-player-content-controls-btns-block-nav__btn" onClick={minus10Sec}>
									<svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.51883 3.06283H16.2335C21.0751 3.06283 25 6.86841 25 11.5628C25 16.2572 21.0751 20.0628 16.2335 20.0628H11.6415" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
										<path d="M10.4635 15.2764V9.25564H10.4388L8.57983 10.5771V9.49233L10.4536 8.16097H11.5433V15.2764H10.4635Z" fill="white" />
										<path d="M17.8599 14.4134C17.3833 15.0775 16.7209 15.4095 15.8727 15.4095C15.0246 15.4095 14.3589 15.0791 13.8757 14.4184C13.3957 13.7543 13.1558 12.852 13.1558 11.7113C13.1558 10.5804 13.3974 9.68464 13.8806 9.02389C14.3639 8.35985 15.0279 8.02783 15.8727 8.02783C16.7176 8.02783 17.38 8.35821 17.8599 9.01896C18.3399 9.67642 18.5798 10.5722 18.5798 11.7063C18.5798 12.847 18.3399 13.7494 17.8599 14.4134ZM14.6942 13.7478C14.9737 14.2376 15.3665 14.4825 15.8727 14.4825C16.379 14.4825 16.7702 14.2376 17.0463 13.7478C17.3257 13.2547 17.4654 12.5758 17.4654 11.7113C17.4654 10.8566 17.3241 10.1843 17.0414 9.6945C16.762 9.2014 16.3724 8.95485 15.8727 8.95485C15.3731 8.95485 14.9819 9.2014 14.6992 9.6945C14.4165 10.1876 14.2751 10.8599 14.2751 11.7113C14.2751 12.5758 14.4148 13.2547 14.6942 13.7478Z" fill="white" />
										<path d="M4.82645 0.0910297C5.28241 -0.166429 5.85519 0.153031 5.85236 0.66321L5.82448 5.68569C5.82168 6.19116 5.25488 6.50532 4.80173 6.25258L0.34092 3.76467C-0.112235 3.51193 -0.113985 2.88068 0.33776 2.6256L4.82645 0.0910297Z" fill="white" />
									</svg>
								</button>

								<button className="video-player-content-controls-btns-block__btn video-player-content-controls-btns-block-nav__btn" onClick={add10Sec}>
									<svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M20.4812 3.06283H9.76653C4.92491 3.06283 1 6.86841 1 11.5628C1 16.2572 4.92491 20.0628 9.76653 20.0628H14.3585" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
										<path d="M9.3038 15.2764V9.25564H9.27914L7.42017 10.5771V9.49233L9.29393 8.16097H10.3837V15.2764H9.3038Z" fill="white" />
										<path d="M16.7002 14.4134C16.2236 15.0775 15.5612 15.4095 14.7131 15.4095C13.8649 15.4095 13.1993 15.0791 12.716 14.4184C12.2361 13.7543 11.9961 12.852 11.9961 11.7113C11.9961 10.5804 12.2377 9.68464 12.721 9.02389C13.2042 8.35985 13.8682 8.02783 14.7131 8.02783C15.5579 8.02783 16.2203 8.35821 16.7002 9.01896C17.1802 9.67642 17.4202 10.5722 17.4202 11.7063C17.4202 12.847 17.1802 13.7494 16.7002 14.4134ZM13.5346 13.7478C13.814 14.2376 14.2068 14.4825 14.7131 14.4825C15.2193 14.4825 15.6105 14.2376 15.8866 13.7478C16.1661 13.2547 16.3058 12.5758 16.3058 11.7113C16.3058 10.8566 16.1644 10.1843 15.8817 9.6945C15.6023 9.2014 15.2127 8.95485 14.7131 8.95485C14.2134 8.95485 13.8222 9.2014 13.5395 9.6945C13.2568 10.1876 13.1154 10.8599 13.1154 11.7113C13.1154 12.5758 13.2551 13.2547 13.5346 13.7478Z" fill="white" />
										<path d="M21.1736 0.0910297C20.7176 -0.166429 20.1448 0.153031 20.1476 0.66321L20.1755 5.68569C20.1783 6.19116 20.7451 6.50532 21.1983 6.25258L25.6591 3.76467C26.1122 3.51193 26.114 2.88068 25.6622 2.6256L21.1736 0.0910297Z" fill="white" />
									</svg>
								</button>
							</div>

							<VideoPlayerCustomVolume />

							<div className="video-player-content-controls-btns-block-time">
								<span className="video-player-content-controls-btns-block-time__text">
									{convertTime(currentTime)}
								</span>
								<span className="video-player-content-controls-btns-block-time__text">
									/
								</span>
								<span className="video-player-content-controls-btns-block-time__text">
									{convertTime(totalTime)}
								</span>
							</div>
						</div>

						<div className="video-player-content-controls-btns-block">
							<button className={`video-player-content-controls-btns-block__btn menu ${menu.state ? "active" : ""}`} onClick={toggleMenu}>
								<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.22322 0.0128156C8.3642 0.0946396 7.63311 0.258288 7.50517 0.394661C7.42293 0.485577 7.25843 1.12199 7.12135 1.86749C6.8472 3.39487 6.7284 3.71308 6.3263 3.95855C5.86937 4.2313 5.47641 4.18584 4.09649 3.6858C2.7714 3.21304 2.59776 3.17668 2.32361 3.32214C2.05859 3.46761 1.12646 4.74952 0.715221 5.54957C0.14863 6.64056 -0.0889728 7.3497 0.0298285 7.57699C0.0846599 7.68609 0.623835 8.18613 1.22698 8.68616C1.83013 9.1862 2.3693 9.68623 2.42413 9.78624C2.55207 10.0317 2.55207 10.7045 2.42413 10.95C2.3693 11.05 1.83013 11.55 1.22698 12.05C0.623835 12.5501 0.0846599 13.0501 0.0298285 13.1592C-0.0889728 13.3865 0.14863 14.0956 0.715221 15.1866C1.12646 15.9867 2.05859 17.2686 2.32361 17.4141C2.59776 17.5595 2.7714 17.5232 4.09649 17.0504C5.47641 16.5504 5.86937 16.5049 6.3263 16.7776C6.7284 17.0231 6.8472 17.3413 7.12135 18.8687C7.25843 19.6051 7.42293 20.2506 7.49604 20.3324C7.9621 20.8416 12.0379 20.8416 12.504 20.3324C12.5771 20.2506 12.7416 19.6051 12.8786 18.8687C13.1528 17.3413 13.2716 17.0231 13.6737 16.7776C14.1306 16.5049 14.5236 16.5504 15.9035 17.0504C17.2286 17.5232 17.4022 17.5595 17.6764 17.4141C17.9414 17.2686 18.8735 15.9867 19.2848 15.1866C19.8514 14.0956 20.089 13.3865 19.9702 13.1592C19.9153 13.0501 19.3762 12.5501 18.773 12.05C18.1699 11.55 17.6307 11.05 17.5759 10.95C17.4479 10.7045 17.4479 10.0317 17.5759 9.78624C17.6307 9.68623 18.1699 9.1862 18.773 8.68616C19.3762 8.18613 19.9153 7.68609 19.9702 7.57699C20.089 7.3497 19.8514 6.64056 19.2848 5.54957C18.8735 4.74952 17.9414 3.46761 17.6764 3.32214C17.4022 3.17668 17.2286 3.21304 15.9035 3.6858C14.5236 4.18584 14.1306 4.2313 13.6737 3.95855C13.2716 3.71308 13.1528 3.39487 12.8786 1.86749C12.7416 1.14017 12.5771 0.485577 12.504 0.403753C12.4309 0.321929 12.1293 0.21283 11.846 0.158281C11.252 0.0491823 9.7624 -0.0326421 9.22322 0.0128156ZM11.2063 7.57699C11.8551 7.85883 12.4948 8.50433 12.7873 9.16801C13.4635 10.659 12.7507 12.4592 11.2063 13.1683C10.594 13.4501 9.40599 13.4501 8.79371 13.1683C8.14487 12.8683 7.50517 12.2319 7.21274 11.5682C6.47252 9.94079 7.3681 8.01338 9.11356 7.44971C9.6436 7.27697 10.6671 7.34061 11.2063 7.57699Z" fill="white" />
								</svg>
							</button>

							<button className="video-player-content-controls-btns-block__btn" onClick={openFullScreen}>
								{isFullScreen ? (
									<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8.36842 1V3.10526C8.36842 6.01203 6.01203 8.36842 3.10526 8.36842H1M13.6316 1V3.10526C13.6316 6.01203 15.988 8.36842 18.8947 8.36842H21M8.36842 21V18.8947C8.36842 15.988 6.01203 13.6316 3.10526 13.6316H1M13.6316 21V18.8947C13.6316 15.988 15.988 13.6316 18.8947 13.6316H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
									</svg>
								) : (
									<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 8.36842V6.26316C1 3.3564 3.3564 1 6.26316 1H8.36842M21 8.36842V6.26316C21 3.3564 18.6436 1 15.7368 1H13.6316M1 13.6316V15.7368C1 18.6436 3.3564 21 6.26316 21H8.36842M21 13.6316V15.7368C21 18.6436 18.6436 21 15.7368 21H13.6316" stroke="white" strokeWidth="2" strokeLinecap="round" />
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<VideoPlayerCustomMenu />

				<ReactPlayer
					playing={play}
					playsinline
					onPause={handlerPause}
					onPlay={handlerPlay}
					onError={(e, data) =>
						callbackError && callbackError(e, data, VideoRef)
					}
					onProgress={({ playedSeconds, loadedSeconds }: { playedSeconds: number, loadedSeconds: number }) => {
						setCurrentTime(playedSeconds)
						setLoadTime(loadedSeconds)
					}}
					onDuration={(duration: number) => setTotalTime(duration)}
					onBuffer={() => setIsLoading(true)}
					onBufferEnd={() => setIsLoading(false)}
					volume={volume / 100}
					playbackRate={currentSpeed}
					ref={VideoRef}
					url={url}
					width="100%"
					height="100%"
					config={config}
				/>
			</div>
		</div>
	);
});

export default VideoPlayerCustom;
