import {Dispatch} from "redux";

import $api from "../../http/";

import {
    PostsStateFilters,
    PostsActions,
    PostsActionTypes,
} from "../types/posts/IPosts";

import {Post} from "../../models/IPost";

export const fetchPosts = (params?: {
    page?: number;
    limit?: number;
    categories?: string[];
}) => {
    return async (dispatch: Dispatch<PostsActions>) => {
        dispatch({
            type: PostsActionTypes.SET_LOADED_POSTS_ALL_FIRST,
            payload: false,
        });

        dispatch({
            type: PostsActionTypes.SET_IS_FETCH_ALL_POSTS,
            payload: true,
        });

        const response = await $api.get<Post[]>("/posts", {
            params,
        });

        dispatch({
            type: PostsActionTypes.SET_POSTS,
            payload: response,
        });

        dispatch({
            type: PostsActionTypes.SET_IS_FETCH_ALL_POSTS,
            payload: false,
        });
    };
};

export const fetchAddPaginationPosts = (params?: {
    page?: number;
    limit?: number;
    categories?: string[];
}) => {
    return async (dispatch: Dispatch<PostsActions>) => {
        dispatch({
            type: PostsActionTypes.SET_LOADED_POSTS_ALL,
            payload: false,
        });

        dispatch({
            type: PostsActionTypes.SET_IS_FETCH_ALL_POSTS,
            payload: true,
        });

        const response = await $api.get<Post[]>("/posts", {params});

        dispatch({
            type: PostsActionTypes.SET_ADD_PAGINATION_POSTS,
            payload: response.data,
        });

        dispatch({
            type: PostsActionTypes.SET_IS_FETCH_ALL_POSTS,
            payload: false,
        });
    };
};

export const fetchPostsById = (id: string) => {
    return async (dispatch: Dispatch<PostsActions>) => {
        dispatch({
            type: PostsActionTypes.SET_LOADED_POST_BY_ID,
            payload: false,
        });

        try {
            const response = await $api.get<Post>(`/posts/${id}`);

            dispatch({
                type: PostsActionTypes.SET_POST_BY_ID,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: PostsActionTypes.SET_LOADED_POST_BY_ID,
                payload: true,
            });
        }
    };
};

export const setPostsFilters = (filters: PostsStateFilters) => ({
    type: PostsActionTypes.SET_POSTS_FILTERS,
    payload: filters,
});

export const setPostsFiltersCategories = (category: string) => ({
    type: PostsActionTypes.SET_POSTS_FILTERS_CATEGORIES,
    payload: category,
});

export const setLoadedPostById = (status: boolean) => ({
    type: PostsActionTypes.SET_LOADED_POST_BY_ID,
    payload: status,
});
