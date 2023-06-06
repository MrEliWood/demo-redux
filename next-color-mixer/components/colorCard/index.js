'use client';

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { incrementRed, decrementRed, incrementGreen, decrementGreen, incrementBlue, decrementBlue, newRed, newGreen, newBlue } from '@/globalState/features/colors.js';

import './style.css';

export default function ColorCard({ color }) {
	const state = useSelector((state) => state.colors);
	const dispatch = useDispatch();

	const [number, setNumber] = useState(state[color]);

	const handleIncrement = () => {
		if (color === 'red') {
			dispatch(incrementRed());
		}

		if (color === 'green') {
			dispatch(incrementGreen());
		}

		if (color === 'blue') {
			dispatch(incrementBlue());
		}
	};

	const handleDecrement = () => {
		if (color === 'red') {
			dispatch(decrementRed());
		}

		if (color === 'green') {
			dispatch(decrementGreen());
		}

		if (color === 'blue') {
			dispatch(decrementBlue());
		}
	};

	const handleInputChange = (e) => {
		setNumber(e.target.value);

		if (color === 'red') {
			dispatch(newRed(e.target.value));
		}

		if (color === 'green') {
			dispatch(newGreen(e.target.value));
		}

		if (color === 'blue') {
			dispatch(newBlue(e.target.value));
		}
	};

	return (
		<section className={'color-card ' + color}>
			<h1 style={{ color }}>{color.toUpperCase()}</h1>

			<div className='button-block'>
				<button onClick={handleDecrement}>-</button>
				<input type='text' value={number} onChange={handleInputChange} />
				<button onClick={handleIncrement}>+</button>
			</div>
		</section>
	);
}
