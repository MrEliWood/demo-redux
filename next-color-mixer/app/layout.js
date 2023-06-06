// import the providers
import { Providers } from '../globalState/provider';

import './globals.css';

export default function RootLayout({ children }) {
	// the provider must wrap any components that will consume global state
	return (
		<html lang='en'>
			<body>
				<header>
					<h1>REDUX</h1>
				</header>

				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
