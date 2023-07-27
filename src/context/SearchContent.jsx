import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
	// Set the search state context
	const [value, setValue] = useState("");

	const contextValue = { value, setValue };

	return (
		<SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
	);
};

export default SearchProvider;