// import our custom context hook
import { useColorContext } from '../../utils/GlobalState';

import './style.css';

export default function Result() {
	// pluck out our global state and the connection (dispatch) to the reducer
	const [state, dispatch] = useColorContext();

	// state is an object containing all of our global values
	//
	// state: {
	//     red: num,
	//     green: num,
	//     blue: num
	// }

	return (
		<section className='result'>
			<h1>Result</h1>
			<div className='result-color' style={{ background: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
		</section>
	);
}
