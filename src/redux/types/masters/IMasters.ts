import {Master} from "../../../models/IMaster";

export interface MastersState {
    items: {[key: string]: Master};
    isLoaded: boolean;

    itemById: Master | {};
    isLoadedById: any;
}

export enum MastersActionTypes {
    SET_MASTERS = "SET_MASTERS",
    SET_MASTER_BY_ID = "SET_MASTER_BY_ID",
    SET_LOADED_BY_ID = "SET_LOADED_BY_ID",
}

interface setMastersAction {
    type: MastersActionTypes.SET_MASTERS;
    payload: Master[];
}

interface setMasterByIdAction {
    type: MastersActionTypes.SET_MASTER_BY_ID;
    payload: Master;
}

interface setLoadedByIdAction {
    type: MastersActionTypes.SET_LOADED_BY_ID;
    payload: boolean;
}

export type MastersActions =
    | setMastersAction
    | setMasterByIdAction
    | setLoadedByIdAction;
