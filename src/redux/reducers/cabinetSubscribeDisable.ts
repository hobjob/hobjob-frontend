import {
	CabinetSubscribeDisableSection,
	CabinetSubscribeDisableState,
	CabinetSubscribeDisableActionTypes,
	CabinetSubscribeDisableActions
} from "../types/cabinetSubscribeDisable/ICabinetSubscribeDisable";

const initialState: CabinetSubscribeDisableState = {
	isCloseAnimation: false,
	currentSection: CabinetSubscribeDisableSection.FEEDBACK,
	// currentSection: CabinetSubscribeDisableSection.MAIN,
}

const cabinetSubscribeDisable = (state = initialState, action: CabinetSubscribeDisableActions) => {
	if (action.type === CabinetSubscribeDisableActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION) {
		return {
			...state,
			isCloseAnimation: action.payload
		}
	}

	if (action.type === CabinetSubscribeDisableActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_CURRENT_SECTION) {
		return {
			...state,
			currentSection: action.payload
		}
	}

	return state;
}

export default cabinetSubscribeDisable