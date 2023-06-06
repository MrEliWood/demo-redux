// import our custom context hook
import { useColorContext } from '../../utils/GlobalState';

// import any necessary actions
import { INCREMENT_RED, DECREMENT_RED, INCREMENT_GREEN, DECREMENT_GREEN, INCREMENT_BLUE, DECREMENT_BLUE } from '../../utils/actions';

import './style.css';

export default function ColorCard({ color }) {
	// pluck out our global state and the connection (dispatch) to the reducer
	const [state, dispatch] = useColorContext();

	const handleIncrement = () => {
		if (color === 'red') {
			// request an action from the recucer by dispatching the action type
			dispatch({
				type: INCREMENT_RED
			});
		}

		if (color === 'green') {
			dispatch({
				type: INCREMENT_GREEN
			});
		}

		if (color === 'blue') {
			dispatch({
				type: INCREMENT_BLUE
			});
		}
	};

	const handleDecrement = () => {
		if (color === 'red') {
			dispatch({
				type: DECREMENT_RED
			});
		}

		if (color === 'green') {
			dispatch({
				type: DECREMENT_GREEN
			});
		}

		if (color === 'blue') {
			dispatch({
				type: DECREMENT_BLUE
			});
		}
	};

	// state is an object containing all of our global values
	//
	// state: {
	//     red: num,
	//     green: num,
	//     blue: num
	// }

	return (
		<section className={'color-card ' + color}>
			<h1 style={{ color }}>{color.toUpperCase()}</h1>

			<div className='button-block'>
				<button onClick={handleDecrement}>-</button>

				{/* using bracket notation allows us to access keys on our state object with the color variable */}
				{/* state.red === state['red'] */}
				<h2>{state[color]}</h2>
				<button onClick={handleIncrement}>+</button>
			</div>
		</section>
	);
}
