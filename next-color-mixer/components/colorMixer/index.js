'use client';

import ColorCard from '../colorCard';
import Result from '../result';

import './style.css';

export default function ColorMixer() {
	const colors = ['red', 'green', 'blue'];

	return (
		<section className='color-mixer'>
			<Result />

			{colors.map((color, i) => {
				return <ColorCard color={color} />;
			})}
		</section>
	);
}
