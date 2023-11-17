import { Dispatch } from 'redux'

import { VideoPlayerActions, VideoPlayerActionTypes, VideoPlayerMenuSection } from '../types/videoPlayer/IVideoPlayer'

export const setVideoPlayerVolume = (percent: number) => ({
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_VOLUME,
	payload: percent
})

export const toggleVideoPlayerVolume = (volume: number) => (dispatch: Dispatch<VideoPlayerActions>) => {
	if (volume) {
		localStorage.setItem("video-player-volume", String(volume))

		dispatch({
			type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_VOLUME,
			payload: 0
		})
	} else {
		dispatch({
			type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_VOLUME,
			payload: parseInt(localStorage.getItem("video-player-volume") as string)
		})
	}
}

export const setVideoPlayerMenuState = (state: boolean) => ({
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_STATE,
	payload: state
})

export const setVideoPlayerMenuCurrentQuality = (quality: number) => ({
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_CURRENT_QUALITY,
	payload: quality
})

export const setVideoPlayerMenuCurrentSpeed = (speed: number) => ({
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_CURRENT_SPEED,
	payload: speed
})

export const setVideoPlayerMenuSection = (section: VideoPlayerMenuSection) => (dispatch: Dispatch<VideoPlayerActions>) => {
	dispatch({
		type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_IS_CHANGE_CONTENT_ANIMATION,
		payload: true
	})

	setTimeout(() => {
		dispatch({
			type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_SECTION,
			payload: section
		})

		dispatch({
			type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_IS_CHANGE_CONTENT_ANIMATION,
			payload: false
		})
	}, 200)
}

export const setCloseVideoPlayerMenu = () => (dispatch: Dispatch<VideoPlayerActions>) => {
	dispatch({
		type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_STATE,
		payload: false
	})

	setTimeout(() => {
		dispatch({
			type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_SECTION,
			payload: VideoPlayerMenuSection.MAIN
		})
	}, 200)
}