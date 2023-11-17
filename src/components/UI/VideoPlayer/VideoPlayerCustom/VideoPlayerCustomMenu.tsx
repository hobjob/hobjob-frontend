import React from 'react'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '../../../../hooks/useTypedSelector'

import { setCloseVideoPlayerMenu, setVideoPlayerMenuSection, setVideoPlayerMenuCurrentQuality, setVideoPlayerMenuCurrentSpeed } from '../../../../redux/actions/videoPlayer'

import { VideoPlayerMenuSection } from '../../../../redux/types/videoPlayer/IVideoPlayer'

const VideoPlayerCustomMenu: React.FC = React.memo(() => {
	const dispatch = useDispatch()

	const { menu: { state, isChangeContentAnimation, section, currentQuality, currentSpeed } } = useTypedSelector(({ videoPlayer }) => videoPlayer)

	const qualitys = [1080, 720, 480, 360]
	const speeds = [0.5, 0.75, 1, 1.25, 1.50, 1.75, 2]

	React.useEffect(() => {
		setTimeout(() => {
			dispatch(setCloseVideoPlayerMenu() as any)
		}, 200)
	}, [currentQuality, currentSpeed])

	return (
		<div className={`video-player-content-menu ${state ? isChangeContentAnimation ? "" : "active" : ""}`}>
			<div className="video-player-content-menu-media-title">
				<p className="video-player-content-menu-media-title__title">
					Настройки
				</p>

				<div className="video-player-content-menu-media-title-close" onClick={() => dispatch(setCloseVideoPlayerMenu() as any)}>
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.194521 1.52276C-0.06484 1.2634 -0.0648404 0.842889 0.19452 0.583528C0.453881 0.324168 0.874388 0.324168 1.13375 0.583528L14.2829 13.7327C14.5423 13.9921 14.5423 14.4126 14.2829 14.6719C14.0236 14.9313 13.6031 14.9313 13.3437 14.6719L0.194521 1.52276Z" fill="black" />
						<path d="M13.8663 0.194521C14.1256 -0.06484 14.5461 -0.0648404 14.8055 0.19452C15.0648 0.453881 15.0648 0.874388 14.8055 1.13375L1.65629 14.2829C1.39693 14.5423 0.97642 14.5423 0.717059 14.2829C0.457699 14.0236 0.457699 13.6031 0.717059 13.3437L13.8663 0.194521Z" fill="black" />
					</svg>
				</div>
			</div>

			{section === VideoPlayerMenuSection.MAIN ? (
				<>
					<div className="video-player-content-menu-item" onClick={() => dispatch(setVideoPlayerMenuSection(VideoPlayerMenuSection.QUALITY) as any)}>
						<span className="video-player-content-menu-item__title">
							Качество
						</span>

						<span className="video-player-content-menu-item__value">
							{currentQuality}p {currentQuality === 1080 ? <span>HD</span> : null}
						</span>
					</div>

					<div className="video-player-content-menu-item" onClick={() => dispatch(setVideoPlayerMenuSection(VideoPlayerMenuSection.SPEED) as any)}>
						<span className="video-player-content-menu-item__title">
							Скорость
						</span>

						<span className="video-player-content-menu-item__value">
							{currentSpeed}x
						</span>
					</div>
				</>
			) : (
				null
			)}

			{section === VideoPlayerMenuSection.QUALITY ? (
				<>
					<div className="video-player-content-menu-item" onClick={() => dispatch(setVideoPlayerMenuSection(VideoPlayerMenuSection.MAIN) as any)}>
						<span className="video-player-content-menu-item__title">
							<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.5 1L0.702976 4.73102C0.600027 4.81109 0.600027 4.96669 0.702976 5.04676L5.5 8.77778" stroke="black" strokeLinecap="round" />
							</svg>

							Качество
						</span>
					</div>

					{qualitys.map((quality, index) => (
						<div
							className={`video-player-content-menu-item ${quality === currentQuality ? "active" : ""}`}
							key={`video-player-content-menu-item-quality-${quality}-${index}`}
							onClick={() => dispatch(setVideoPlayerMenuCurrentQuality(quality))}
						>
							<span className="video-player-content-menu-item__value">
								{quality}p {quality === 1080 ? <span>HD</span> : null}
							</span>
						</div>
					))}
				</>
			) : (
				null
			)}

			{section === VideoPlayerMenuSection.SPEED ? (
				<>
					<div className="video-player-content-menu-item" onClick={() => dispatch(setVideoPlayerMenuSection(VideoPlayerMenuSection.MAIN) as any)}>
						<span className="video-player-content-menu-item__title">
							<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.5 1L0.702976 4.73102C0.600027 4.81109 0.600027 4.96669 0.702976 5.04676L5.5 8.77778" stroke="black" strokeLinecap="round" />
							</svg>

							Скорость
						</span>
					</div>

					{speeds.map((speed, index) => (
						<div
							className={`video-player-content-menu-item ${speed === currentSpeed ? "active" : ""}`}
							key={`video-player-content-menu-item-speed-${speed}-${index}`}
							onClick={() => dispatch(setVideoPlayerMenuCurrentSpeed(speed))}
						>
							<span className="video-player-content-menu-item__value">
								{speed}x
							</span>
						</div>
					))}
				</>
			) : (
				null
			)}
		</div>
	)
})

export default VideoPlayerCustomMenu