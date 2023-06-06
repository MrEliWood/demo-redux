'use client';

import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from './features/colors';

export const store = configureStore({
	reducer: {
		colors: colorsReducer
	}
});
