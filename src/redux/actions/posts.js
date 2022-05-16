import $api from '../../http/';

export const fetchPosts = (query = null, page) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_POSTS_ALL_FIRST",
		payload: false,
	})

	dispatch({
		type: "SET_IS_FETCH_ALL_POSTS",
		payload: true,
	})

	$api.get(`/posts?limit=8&page=${page}&${query !== null ? query : ""}`).then((response) => {
		dispatch(setPosts(response))

		dispatch({
			type: "SET_IS_FETCH_ALL_POSTS",
			payload: false,
		})
	})
}

export const fetchAddPaginationPosts = (query = null, page) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_POSTS_ALL",
		payload: false,
	})

	dispatch({
		type: "SET_IS_FETCH_ALL_POSTS",
		payload: true,
	})

	$api.get(`/posts?limit=8&page=${page}&${query !== null ? query : ""}`).then((response) => {
		dispatch(setAddPaginationPosts(response))

		dispatch({
			type: "SET_IS_FETCH_ALL_POSTS",
			payload: false,
		})
	})
}

export const fetchPostsById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_POSTS_BY_ID",
		payload: false,
	})

	$api.get(`/posts/${id}`).then(({ data }) => {
		dispatch(setPostsById(data))
	}).catch(() => {
		dispatch(setPostsById({}))
	})
}

const setPosts = (items) => ({
	type: "SET_POSTS",
	payload: items,
})

const setAddPaginationPosts = (items) => ({
	type: "SET_ADD_PAGINATION_POSTS",
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