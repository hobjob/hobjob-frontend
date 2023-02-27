import {
	CabinetSubscribeDisabledSection,
	CabinetSubscribeDisabledState,
	CabinetSubscribeDisabledActionTypes,
	CabinetSubscribeDisabledActions
} from "../types/cabinetSubscribeDisabled/ICabinetSubscribeDisabled";

const initialState: CabinetSubscribeDisabledState = {
	currentSection: CabinetSubscribeDisabledSection.MAIN,
	isCloseAnimation: false,
}

const cabinetSubscribeDisabled = (state = initialState, action: CabinetSubscribeDisabledActions) => {
	if (action.type === CabinetSubscribeDisabledActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_CURRENT_SECTION) {
		return {
			...state,
			currentSection: action.payload
		}
	}

	if (action.type === CabinetSubscribeDisabledActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION) {
		return {
			...state,
			isCloseAnimation: action.payload
		}
	}

	return state;
}

export default cabinetSubscribeDisabled