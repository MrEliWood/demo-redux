// instruct next to render this component client side
'use client';

// import the selector hook from redux
import { useSelector } from 'react-redux';

import './style.css';

export default function Result() {
	// request state with the useSelector hook
	const state = useSelector((state) => state.colors);

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
