import {
    MastersState,
    MastersActions,
    MastersActionTypes,
} from "../types/masters/IMasters";
import {Master} from "../../models/IMaster";

const initialState: MastersState = {
    items: {},
    isLoaded: false,

    itemById: {
        _id: "",
        name: "",
        surname: "",
        masterDescription: "",
		avatar: "",
		courses: [],
		posts: []
    },
    isLoadedById: false,
};

const masters = (
    state = initialState,
    action: MastersActions
): MastersState => {
    if (action.type === MastersActionTypes.SET_MASTERS) {
        const newObj: {[key: string]: Master} = {};

        action.payload.map((item) => {
            newObj[item._id] = item;
        });

        return {
            ...state,
            items: newObj,
            isLoaded: true,
        };
    }

    if (action.type === MastersActionTypes.SET_MASTER_BY_ID) {
        return {
            ...state,
            itemById: action.payload,
            isLoadedById: true,
        };
    }

    if (action.type === MastersActionTypes.SET_LOADED_BY_ID) {
        return {
            ...state,
            isLoadedById: action.payload,
        };
    }

    return state;
};

export default masters;
