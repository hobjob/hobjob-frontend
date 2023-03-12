import { Dispatch } from "redux";

import { CabinetSubscribeDisableSection, CabinetSubscribeDisableActions, CabinetSubscribeDisableActionTypes } from "../types/cabinetSubscribeDisable/ICabinetSubscribeDisable";


export const changeCabinetSubscribeDisableCurrentSection = (section: CabinetSubscribeDisableSection) => (dispatch: Dispatch<CabinetSubscribeDisableActions>) => {
	dispatch({
		type: CabinetSubscribeDisableActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION,
		payload: true
	});

	setTimeout(() => {
		dispatch({
			type: CabinetSubscribeDisableActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_CURRENT_SECTION,
			payload: section
		});

		dispatch({
			type: CabinetSubscribeDisableActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION,
			payload: false
		});
	}, 180);
};