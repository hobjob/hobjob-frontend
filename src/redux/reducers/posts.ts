import queryString from "query-string";

import {
	PostsState,
	PostsActions,
	PostsActionTypes,
} from "../types/posts/IPosts";

const parseQuery = queryString.parse(window.location.search.replace("?", "?"), {
	arrayFormat: "comma",
});

const initialState: PostsState = {
	isLoadedAllPostsFirst: false,
	isLoadedAllPosts: false,
	isFetchAllPosts: false,

	items: [],

	totalCount: 0,
	page: 1,

	isLoadedByIdPosts: false,

	itemById: {
		_id: "",
		title: "",
		image: {
			size_512: "",
			size_768: "",
			size_1024: "",
			size_1536: "",
			size_2048: "",
		},
		masterId: "",
		category: "",
		content: [],
		next: {
			_id: "",
			title: "",
		},
	},

	filters: {
		isParse: false,
		categories: {},
	},
};

if (
	document.location.pathname === "/magazine/" ||
	document.location.pathname === "/magazine"
) {
	if (parseQuery.category) {
		if (typeof parseQuery.category === "object") {
			parseQuery.category.map(
				(item: any) => (initialState.filters.categories[item] = item)
			);
		} else {
			initialState.filters.categories[parseQuery.category] =
				parseQuery.category;
		}
	}
}

const posts = (state = initialState, action: PostsActions) => {
	if (action.type === PostsActionTypes.SET_POSTS) {
		return {
			...state,
			items: action.payload.data,
			totalCount: action.payload.headers["x-total-count"],
			isLoadedAllPostsFirst: true,
			page: 1,
		};
	}

	if (action.type === PostsActionTypes.SET_ADD_PAGINATION_POSTS) {
		return {
			...state,
			items: [...state.items, ...action.payload],
			isLoadedAllPosts: true,
			page: state.page + 1,
		};
	}

	if (action.type === PostsActionTypes.SET_POST_BY_ID) {
		return {
			...state,
			itemById: action.payload,
			isLoadedByIdPosts: true,
		};
	}

	if (action.type === PostsActionTypes.SET_LOADED_POST_BY_ID) {
		return {
			...state,
			isLoadedByIdPosts: action.payload,
		};
	}

	if (action.type === PostsActionTypes.SET_POSTS_FILTERS) {
		return {
			...state,
			filters: action.payload,
		};
	}

	if (action.type === PostsActionTypes.SET_POSTS_FILTERS_CATEGORIES) {
		if (action.payload === "all") {
			return {
				...state,
				filters: {
					...state.filters,
					categories: {},
				},
			};
		}

		if (state.filters.categories[action.payload]) {
			delete state.filters.categories[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				categories: {
					...state.filters.categories,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === PostsActionTypes.SET_LOADED_POSTS_ALL_FIRST) {
		return {
			...state,
			isLoadedAllPostsFirst: action.payload,
		};
	}

	if (action.type === PostsActionTypes.SET_LOADED_POSTS_ALL) {
		return {
			...state,
			isLoadedAllPosts: action.payload,
		};
	}

	if (action.type === PostsActionTypes.SET_IS_FETCH_ALL_POSTS) {
		return {
			...state,
			isFetchAllPosts: action.payload,
		};
	}

	return state;
};

export default posts;
