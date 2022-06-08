import {Post} from "../../../models/IPost";

interface PostsStateFilters {
    categories: {[key: string]: string};
}

export interface PostsState {
    isLoadedAllPostsFirst: boolean;
    isLoadedAllPosts: boolean;
    isFetchAllPosts: boolean;

    items: Post[];

    totalCount: number;
    page: number;

    isLoadedByIdPosts: boolean;
    itemById: Post;

    filters: PostsStateFilters;
}

export enum PostsActionTypes {
    SET_POSTS = "SET_POSTS",
    SET_ADD_PAGINATION_POSTS = "SET_ADD_PAGINATION_POSTS",
    SET_POST_BY_ID = "SET_POST_BY_ID",
    SET_LOADED_POST_BY_ID = "SET_LOADED_POST_BY_ID",
    SET_POSTS_FILTERS_CATEGORIES = "SET_POSTS_FILTERS_CATEGORIES",
    SET_LOADED_POSTS_ALL_FIRST = "SET_LOADED_POSTS_ALL_FIRST",
    SET_LOADED_POSTS_ALL = "SET_LOADED_POSTS_ALL",
    SET_IS_FETCH_ALL_POSTS = "SET_IS_FETCH_ALL_POSTS",
}

interface setPosts {
    type: PostsActionTypes.SET_POSTS;
    payload: {
        data: Post[];
        headers: any;
    };
}

interface setAddPaginationPosts {
    type: PostsActionTypes.SET_ADD_PAGINATION_POSTS;
    payload: Post[];
}

interface setPostById {
    type: PostsActionTypes.SET_POST_BY_ID;
    payload: Post;
}

interface setLoadedPostById {
    type: PostsActionTypes.SET_LOADED_POST_BY_ID;
    payload: boolean;
}

interface setPostsFiltersCategories {
    type: PostsActionTypes.SET_POSTS_FILTERS_CATEGORIES;
    payload: string;
}

interface setLoadedPostsAllFirst {
    type: PostsActionTypes.SET_LOADED_POSTS_ALL_FIRST;
    payload: boolean;
}

interface setLoadedPostsAll {
    type: PostsActionTypes.SET_LOADED_POSTS_ALL;
    payload: boolean;
}

interface setIsFetchAllPosts {
    type: PostsActionTypes.SET_IS_FETCH_ALL_POSTS;
    payload: boolean;
}

export type PostsActions =
    | setPosts
    | setAddPaginationPosts
    | setPostById
    | setLoadedPostById
    | setPostsFiltersCategories
    | setLoadedPostsAllFirst
    | setLoadedPostsAll
    | setIsFetchAllPosts;
