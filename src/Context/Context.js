import React, { useState, useContext } from "react";
import useFetchOsmData from "../Hooks/useFetchOsmData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState(null);
  const { isLoading, error, data, setError } = useFetchOsmData(query);

  return (
    <AppContext.Provider
      value={{ isLoading, error, data, query, setQuery, setError }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
