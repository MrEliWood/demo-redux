// import the reducer hook from react
import { useReducer } from 'react';

// import actions
import { INCREMENT_RED, DECREMENT_RED, INCREMENT_GREEN, DECREMENT_GREEN, INCREMENT_BLUE, DECREMENT_BLUE } from './actions';

// create a reducer function to receive and handle dispatched actions
const reducer = (state, action) => {
	// it's common practice to use a switch case to handle the incoming action
	// however an if else block would also work
	switch (action.type) {
		case INCREMENT_RED:
			// this is a pure function so we return a new object without altering the current state
			return {
				// the spread operater 'spreads' all of the current data into our new object
				...state,

				// then we're updating one of the values
				red: state.red + 1
			};

		case DECREMENT_RED:
			return {
				...state,
				red: state.red - 1
			};

		case INCREMENT_GREEN:
			return {
				...state,
				green: state.green + 1
			};

		case DECREMENT_GREEN:
			return {
				...state,
				green: state.green - 1
			};

		case INCREMENT_BLUE:
			return {
				...state,
				blue: state.blue + 1
			};

		case DECREMENT_BLUE:
			return {
				...state,
				blue: state.blue - 1
			};

		// switch cases must include a default case
		default:
			return state;
	}
};

// create a custom hook for our reducer with the useReducer hook
const useColorReducer = (initialState) => {
	return useReducer(reducer, initialState);
};

// export the reducer and the custom reducer hook
export { reducer, useColorReducer };
