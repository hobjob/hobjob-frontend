import {Dispatch} from "redux";

import $api from "../../http/";

import {PostsActions, PostsActionTypes} from "../types/posts/IPosts";

import {Post} from "../../models/IPost";

export const fetchPosts = (query?: string, page?: number) => {
    return async (dispatch: Dispatch<PostsActions>) => {
        dispatch({
            type: PostsActionTypes.SET_LOADED_POSTS_ALL_FIRST,
            payload: false,
        });

        dispatch({
            type: PostsActionTypes.SET_IS_FETCH_ALL_POSTS,
            payload: true,
        });

        const response = await $api.get<Post[]>(
            `/posts?limit=8&page=${page}&${query !== null ? query : ""}`
        );

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

export const fetchAddPaginationPosts = (query?: string, page?: number) => {
    return async (dispatch: Dispatch<PostsActions>) => {
        dispatch({
            type: PostsActionTypes.SET_LOADED_POSTS_ALL,
            payload: false,
        });

        dispatch({
            type: PostsActionTypes.SET_IS_FETCH_ALL_POSTS,
            payload: true,
        });

        const response = await $api.get<Post[]>(
            `/posts?limit=8&page=${page}&${query !== null ? query : ""}`
        );

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

export const setPostsFiltersCategories = (category: string) => ({
    type: PostsActionTypes.SET_POSTS_FILTERS_CATEGORIES,
    payload: category,
});

export const setLoadedPostById = (status: boolean) => ({
    type: PostsActionTypes.SET_LOADED_POST_BY_ID,
    payload: status,
});
