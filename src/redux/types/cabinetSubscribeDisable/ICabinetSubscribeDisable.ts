export enum CabinetSubscribeDisableSection {
	MAIN = "MAIN",
	SALE_SUBSCRIBE = "SALE_SUBSCRIBE",
	FREE_MONTH_SUBSCRIBE = "FREE_MONTH_SUBSCRIBE",

	SUCCESS_SALE_SUBSCRIBE = "SUCCESS_SALE_SUBSCRIBE",
	SUCCESS_FREE_MONTH_SUBSCRIBE = "SUCCESS_FREE_MONTH_SUBSCRIBE",
	SUCCESS_DISABLED = "SUCCESS_DISABLED",
}

export interface CabinetSubscribeDisableState {
	isCloseAnimation: boolean
	currentSection: CabinetSubscribeDisableSection
}

export enum CabinetSubscribeDisableActionTypes {
	SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION = "SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION",
	SET_CABINET_DISABLE_SUBSCRIBE_CURRENT_SECTION = "SET_CABINET_DISABLE_SUBSCRIBE_CURRENT_SECTION",
}

interface setCabinetSubscribeDisableIsCloseAnimation {
	type: CabinetSubscribeDisableActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_IS_CLOSE_ANIMATION,
	payload: boolean
}

interface setCabinetSubscribeDisableCurrentSection {
	type: CabinetSubscribeDisableActionTypes.SET_CABINET_DISABLE_SUBSCRIBE_CURRENT_SECTION,
	payload: CabinetSubscribeDisableSection
}


export type CabinetSubscribeDisableActions = setCabinetSubscribeDisableIsCloseAnimation | setCabinetSubscribeDisableCurrentSection