import { PassingState, PassingActions, PassingActionTypes } from '../types/passing/passing'

const initialState: PassingState = {
	course: {
		_id: "",
		title: "",
		image: {
			size_512: "",
			size_768: "",
			size_1024: "",
			size_1536: "",
			size_2048: ""
		},
		description: "",
		masterId: "",
		HobJobProduction: false,
		completedLessons: [],

		lessons: []
	},
	isLoadedCourse: false
};

const passing = (state = initialState, action: PassingActions) => {
	if (action.type === PassingActionTypes.SET_PASSING_COURSE) {
		return {
			...state,
			course: action.payload,
			isLoadedCourse: true
		}
	}

	return state
};

export default passing;
