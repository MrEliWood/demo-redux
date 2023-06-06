import { Providers } from '../globalState/provider';

import './globals.css';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<h1>REDUX</h1>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
