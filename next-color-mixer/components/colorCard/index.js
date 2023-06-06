// instruct next to render this component client side
'use client';

// import the selector and dispatch hooks from redux
import { useSelector, useDispatch } from 'react-redux';

// import any necessary actions
import { incrementRed, decrementRed, incrementGreen, decrementGreen, incrementBlue, decrementBlue, newRed, newGreen, newBlue } from '@/globalState/features/colors.js';

import './style.css';

export default function ColorCard({ color }) {
	// request state with the useSelector hook
	const state = useSelector((state) => state.colors);

	// state is an object containing all of our global values
	//
	// state: {
	//     red: num,
	//     green: num,
	//     blue: num
	// }

	// create a new dispatcher with the useDispatch hook
	const dispatch = useDispatch();

	const handleIncrement = () => {
		if (color === 'red') {
			// request an action from the recucer by dispatching the action
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
		if (color === 'red') {
			// pass the input's value into the action as the 'action.payload'
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

				{/* using bracket notation allows us to access keys on our state object with the color variable */}
				{/* state.red === state['red'] */}
				<input type='text' value={state[color]} onChange={handleInputChange} />
				<button onClick={handleIncrement}>+</button>
			</div>
		</section>
	);
}
