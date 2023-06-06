'use client';

import { useSelector } from 'react-redux';

import './style.css';

export default function Result() {
	const state = useSelector((state) => state.colors);

	return (
		<section className='result'>
			<h1>Result</h1>
			<div className='result-color' style={{ background: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
		</section>
	);
}
