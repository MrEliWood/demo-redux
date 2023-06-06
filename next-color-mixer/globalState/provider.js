// instruct next to render this component client side
'use client';

// import the Provider component from redux
import { Provider } from 'react-redux';

// import state from our store
import { store } from './store';

export function Providers({ children }) {
	// pass the store into the Provider and nest the 'children' prop inside
	//
	// in this case, 'children' is also a prop
	// this tells the provider to expect nested components
	return <Provider store={store}>{children}</Provider>;
}
