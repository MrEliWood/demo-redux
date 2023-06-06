// import the configureStore tool from the redux toolkit
import { configureStore } from '@reduxjs/toolkit';

// import our reducer
import colorsReducer from './features/colors';

// create and export a new store, passing in our reducer
export const store = configureStore({
	reducer: {
		colors: colorsReducer
	}
});
