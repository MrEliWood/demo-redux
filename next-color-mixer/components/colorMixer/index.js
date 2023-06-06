import ColorCard from '../colorCard';
import Result from '../result';

import './style.css';

export default function ColorMixer() {
	const colors = ['red', 'green', 'blue'];

	return (
		<section className='color-mixer'>
			{colors.map((color, i) => {
				return <ColorCard key={i} color={color} />;
			})}

			<Result />
		</section>
	);
}
