import ColorMixer from './components/ColorMixer';

// import the provider
import { ColorProvider } from './utils/GlobalState';

import './App.css';

function App() {
	// the provider must wrap any components that will consume global state
	return (
		<ColorProvider>
			<header>
				<h1>REACT HOOKS (NOT REDUX)</h1>
			</header>
			<main className='App'>
				<ColorMixer />
			</main>
		</ColorProvider>
	);
}

export default App;
