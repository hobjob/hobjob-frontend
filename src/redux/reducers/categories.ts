import {
    CategoriesState,
    CategoriesActions,
    CategoriesActionTypes,
} from "../types/categories/ICategories";

import {Category} from "../../models/ICategory";

const initialState: CategoriesState = {
    isLoadedAllCategories: false,
    items: {},
};

const categories = (
    state = initialState,
    action: CategoriesActions
): CategoriesState => {
    if (action.type === CategoriesActionTypes.SET_CATEGORIES) {
        const newObj: {[key: string]: Category} = {};

        action.payload.map((item) => {
            newObj[item.transfer] = item;
        });

        return {
            ...state,
            isLoadedAllCategories: true,
            items: newObj,
        };
    }

    return state;
};

export default categories;
