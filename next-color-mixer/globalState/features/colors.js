// import the createSlice tool from the redux toolkit
import { createSlice } from '@reduxjs/toolkit';

// create a new slice of state with the createSlice tool
export const colorSlice = createSlice({
	// the name should match our feature
	name: 'colors',

	// pass in initial state values
	initialState: { red: 125, green: 34, blue: 201 },

	// define actions like methods on the reducers object
	reducers: {
		// actions must take in 'state' and optionally take in 'action'
		incrementRed: (state) => {
			state.red += 1;
		},
		decrementRed: (state) => {
			state.red -= 1;
		},

		// the action payload contains the value of our new state
		newRed: (state, action) => {
			state.red = action.payload;
		},
		incrementGreen: (state) => {
			state.green += 1;
		},
		decrementGreen: (state) => {
			state.green -= 1;
		},
		newGreen: (state, action) => {
			state.green = action.payload;
		},
		incrementBlue: (state) => {
			state.blue += 1;
		},
		decrementBlue: (state) => {
			state.blue -= 1;
		},
		newBlue: (state, action) => {
			state.blue = action.payload;
		}
	}
});

// export all the actions from our slice
export const { incrementRed, decrementRed, incrementGreen, decrementGreen, incrementBlue, decrementBlue, newRed, newGreen, newBlue } = colorSlice.actions;

// create a custom reducer hook from the slice
const colorsReducer = colorSlice.reducer;

// export the custom reducer
export default colorsReducer;
