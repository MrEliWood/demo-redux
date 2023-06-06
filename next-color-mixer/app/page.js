import ColorMixer from '../components/colorMixer/index.js';

import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<ColorMixer />
		</main>
	);
}
