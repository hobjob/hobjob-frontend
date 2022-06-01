import {Category} from "../../../models/ICategory";

export interface CategoriesState {
    isLoadedAllCategories: boolean;
    items: {[key: string]: Category};
}

export enum CategoriesActionTypes {
    SET_CATEGORIES = "SET_CATEGORIES",
}

interface setCategoriesAction {
    type: CategoriesActionTypes.SET_CATEGORIES;
    payload: Category[];
}

export type CategoriesActions = setCategoriesAction;