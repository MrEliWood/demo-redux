// import the context hooks from react
import { createContext, useContext } from 'react';

// import our reducer
import { useColorReducer } from './reducers';

// use the createContext hook to define our custom context
const ColorContext = createContext();

// pluck the Provider from our custom context object (ColorContext.Provider)
const { Provider } = ColorContext;

// create a react functional component with the Provider
const ColorProvider = (props) => {
	const initialState = { red: 125, green: 34, blue: 201 };

	// establish the initial values of our global state
	const [state, dispatch] = useColorReducer(initialState);

	// pass the initial state values into the provider with support for additional props
	return <Provider value={[state, dispatch]} {...props} />;
};

// create a custom hook for our context with the useContext hook
const useColorContext = () => useContext(ColorContext);

// export the provider functional component and the custom context hook
export { ColorProvider, useColorContext };
