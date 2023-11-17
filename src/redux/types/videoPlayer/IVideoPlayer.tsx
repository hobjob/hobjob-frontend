export enum VideoPlayerMenuSection {
	MAIN = "MAIN",
	QUALITY = "QUALITY",
	SPEED = "SPEED",
}

export interface VideoPlayerState {
	volume: number,

	menu: {
		state: boolean,
		isChangeContentAnimation: boolean,
		section: VideoPlayerMenuSection,

		currentQuality: number,
		currentSpeed: number,
	}
}

export enum VideoPlayerActionTypes {
	SET_VIDEO_PLAYER_VOLUME = "SET_VIDEO_PLAYER_VOLUME",
	SET_VIDEO_PLAYER_MENU_STATE = "SET_VIDEO_PLAYER_MENU_STATE",
	SET_VIDEO_PLAYER_MENU_IS_CHANGE_CONTENT_ANIMATION = "SET_VIDEO_PLAYER_MENU_IS_CHANGE_CONTENT_ANIMATION",
	SET_VIDEO_PLAYER_MENU_SECTION = "SET_VIDEO_PLAYER_MENU_SECTION",
	SET_VIDEO_PLAYER_MENU_CURRENT_QUALITY = "SET_VIDEO_PLAYER_MENU_CURRENT_QUALITY",
	SET_VIDEO_PLAYER_MENU_CURRENT_SPEED = "SET_VIDEO_PLAYER_MENU_CURRENT_SPEED",
}

interface setVideoPlayerVolume {
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_VOLUME,
	payload: number
}

interface setVideoPlayerMenuState {
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_STATE,
	payload: boolean
}

interface setVideoPlayerMenuState {
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_STATE,
	payload: boolean
}

interface setVideoPlayerMenuIsChangeContentAnimation {
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_IS_CHANGE_CONTENT_ANIMATION,
	payload: boolean
}

interface setVideoPlayerMenuSection {
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_SECTION,
	payload: VideoPlayerMenuSection
}

interface setVideoPlayerMenuCurrentQuality {
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_CURRENT_QUALITY,
	payload: number
}

interface setVideoPlayerMenuCurrentSpeed {
	type: VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_CURRENT_SPEED,
	payload: number
}

export type VideoPlayerActions = setVideoPlayerVolume | setVideoPlayerMenuState | setVideoPlayerMenuIsChangeContentAnimation | setVideoPlayerMenuSection | setVideoPlayerMenuCurrentQuality | setVideoPlayerMenuCurrentSpeed