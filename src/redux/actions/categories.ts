import {Dispatch} from "redux";

import $api from "../../http/";

import {
    CategoriesActions,
    CategoriesActionTypes,
} from "../types/categories/ICategories";
import {Category} from "../../models/ICategory";

export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoriesActions>) => {
        const response = await $api.get<Category[]>(`/categories`);

        dispatch({
            type: CategoriesActionTypes.SET_CATEGORIES,
            payload: response.data,
        });
    };
};
