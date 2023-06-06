'use client';

import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
	name: 'colors',
	initialState: { red: 125, green: 34, blue: 201 },
	reducers: {
		incrementRed: (state) => {
			state.red += 1;
		},
		decrementRed: (state) => {
			state.red -= 1;
		},
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

export const { incrementRed, decrementRed, incrementGreen, decrementGreen, incrementBlue, decrementBlue, newRed, newGreen, newBlue } = colorSlice.actions;

const colorsReducer = colorSlice.reducer;

export default colorsReducer;
