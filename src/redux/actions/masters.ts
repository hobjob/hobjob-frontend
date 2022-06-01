import {Dispatch} from "redux";

import $api from "../../http/";

import {MastersActions, MastersActionTypes} from "../types/masters/IMasters";
import {Master} from "../../models/IMaster";

export const fetchMasters = () => {
    return async (dispatch: Dispatch<MastersActions>) => {
        const response = await $api.get<Master[]>(`/masters`);

        dispatch({
            type: MastersActionTypes.SET_MASTERS,
            payload: response.data,
        });
    };
};

export const fetchMasterById = (id: string) => {
    return async (dispatch: Dispatch<MastersActions>) => {
        dispatch({
            type: MastersActionTypes.SET_LOADED_BY_ID,
            payload: false,
        });

        const response = await $api.get<Master>(`/masters/${id}`);

        dispatch({
			type: MastersActionTypes.SET_MASTER_BY_ID,
            payload: response.data,
        });
    };
};