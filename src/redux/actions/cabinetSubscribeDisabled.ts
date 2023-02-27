import { Dispatch } from "redux";

import { CabinetSubscribeDisabledSection, CabinetSubscribeDisabledActions, CabinetSubscribeDisabledActionTypes } from "../types/cabinetSubscribeDisabled/ICabinetSubscribeDisabled";

export const changeCabinetSubscribeDisabledCurrentSection = (section: CabinetSubscribeDisabledSection) => (dispatch: Dispatch<CabinetSubscribeDisabledActions>) => {
	dispatch({
		type: CabinetSubscribeDisabledActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION,
		payload: true
	});

	setTimeout(() => {
		dispatch({
			type: CabinetSubscribeDisabledActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_CURRENT_SECTION,
			payload: section
		});

		dispatch({
			type: CabinetSubscribeDisabledActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION,
			payload: false
		});
	}, 180);
};