import {
	VideoPlayerMenuSection,
	VideoPlayerState,
	VideoPlayerActions,
	VideoPlayerActionTypes
} from "../types/videoPlayer/IVideoPlayer";

export const initialState: VideoPlayerState = {
	volume: localStorage.getItem("video-player-volume") ? parseInt(localStorage.getItem("video-player-volume") as string) : 100,

	menu: {
		state: false,
		isChangeContentAnimation: false,
		section: VideoPlayerMenuSection.MAIN,

		currentQuality: 1080,
		currentSpeed: 1
	}
};

const videoPlayer = (state = initialState, action: VideoPlayerActions) => {
	if (action.type === VideoPlayerActionTypes.SET_VIDEO_PLAYER_VOLUME) {
		if (action.payload > 100) {
			return {
				...state,
				volume: 100
			};
		}

		if (action.payload < 1) {
			return {
				...state,
				volume: 0
			};
		}

		return {
			...state,
			volume: action.payload
		};
	}

	if (action.type === VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_STATE) {
		return {
			...state,
			menu: {
				...state.menu,
				state: action.payload
			},
		};
	}

	if (action.type === VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_IS_CHANGE_CONTENT_ANIMATION) {
		return {
			...state,
			menu: {
				...state.menu,
				isChangeContentAnimation: action.payload
			},
		};
	}

	if (action.type === VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_SECTION) {
		return {
			...state,
			menu: {
				...state.menu,
				section: action.payload
			},
		};
	}

	if (action.type === VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_CURRENT_QUALITY) {
		return {
			...state,
			menu: {
				...state.menu,
				currentQuality: action.payload
			},
		};
	}

	if (action.type === VideoPlayerActionTypes.SET_VIDEO_PLAYER_MENU_CURRENT_SPEED) {
		return {
			...state,
			menu: {
				...state.menu,
				currentSpeed: action.payload
			},
		};
	}

	return state;
};

export default videoPlayer;
