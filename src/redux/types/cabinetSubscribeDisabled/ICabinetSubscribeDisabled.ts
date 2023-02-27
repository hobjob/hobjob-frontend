export enum CabinetSubscribeDisabledSection {
	MAIN = "MAIN",
	SALE_SUBSCRIBE = "SALE_SUBSCRIBE",
	FREE_MONTH_SUBSCRIBE = "FREE_MONTH_SUBSCRIBE",
}

export interface CabinetSubscribeDisabledState {
	currentSection: CabinetSubscribeDisabledSection
	isCloseAnimation: boolean
}

export enum CabinetSubscribeDisabledActionTypes {
	SET_CABINET_DISABLE_SUBSCRIBE_CURRENT_SECTION = "SET_CABINET_DISABLE_SUBSCRIBE_CURRENT_SECTION",
	SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION = "SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION",
}

interface setCabinetSubscribeDisableCurrentSection {
	type: CabinetSubscribeDisabledActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_CURRENT_SECTION,
	payload: CabinetSubscribeDisabledSection
}

interface setCabinetSubscribeDisableIsCloseAnimation {
	type: CabinetSubscribeDisabledActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION,
	payload: boolean
}

export type CabinetSubscribeDisabledActions = setCabinetSubscribeDisableCurrentSection | setCabinetSubscribeDisableIsCloseAnimation