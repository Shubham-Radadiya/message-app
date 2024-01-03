import React, {createContext} from 'react';

const ThemeContext = createContext<any>(null);

const ThemeProvider = ({children}: any) => {
  const value = {};

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
