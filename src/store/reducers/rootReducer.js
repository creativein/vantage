const initState = {
	dataHasLoaded: false,
}

const rootReducer = (state=initState, action) => {
	switch(action.type) {
		case "LOAD_DATASET":
			return {
				...state,
				dataHasLoaded: true,
				dataset: action.dataset
			}
		default:
		  return state;
	}
}

export default rootReducer;
