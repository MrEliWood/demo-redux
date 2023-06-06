import ColorCard from '../ColorCard';
import Result from '../Result';

import './style.css';

export default function ColorMixer() {
	const colors = ['red', 'green', 'blue'];

	return (
		<section className='color-mixer'>
			{colors.map((color, i) => {
				return <ColorCard color={color} />;
			})}

			<Result />
		</section>
	);
}
