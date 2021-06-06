const initialState = {
	cart: !JSON.parse(localStorage.getItem("cart")) ? {} : JSON.parse(localStorage.getItem("cart")),
}

const cart = (state = initialState, action) => {
	if (action.type === "ADD_COURSE_CART") {
		const newItem = {
			...state.cart,
			[action.payload._id]: {
				...action.payload
			}
		};

		localStorage.setItem("cart", JSON.stringify(newItem));

		return {
			...state,
			cart: newItem,
		};
	}

	if (action.type === "REMOVE_COURSE_CART") {
		const newItem = {
			...state.cart,
		};

		delete newItem[action.payload]

		localStorage.setItem("cart", JSON.stringify(newItem));

		return {
			...state,
			cart: newItem,
		};
	}

	return state;
}

export default cart;