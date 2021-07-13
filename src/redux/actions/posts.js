import axios from 'axios';

export const fetchPosts = (query = null) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_POSTS_ALL",
		payload: false,
	})

	axios.get(`${process.env.REACT_APP_API_DOMEN}/posts?${query !== null ? query : ""}`).then(({ data }) => {
		dispatch(setPosts(data))
	})
}

export const fetchPostsById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_POSTS_BY_ID",
		payload: false,
	})

	dispatch({
		type: "SET_LOADED_POSTS_BY_ID",
		payload: false,
	})

	axios.get(`${process.env.REACT_APP_API_DOMEN}/posts/${id}`).then(({ data }) => {
		dispatch(setPostsById(data))
	})
}

const setPosts = (items) => ({
	type: "SET_POSTS",
	payload: items,
})

const setPostsById = (item) => ({
	type: "SET_POSTS_BY_ID",
	payload: item,
})

export const setPostsFiltersCategories = (category) => ({
	type: "SET_POSTS_FILTERS_CATEGORIES",
	payload: category
})

export const setPostsFilters = (filters) => ({
	type: "SET_POSTS_FILTERS",
	payload: filters
})