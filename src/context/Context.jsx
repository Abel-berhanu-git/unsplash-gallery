import { createContext, useContext, useEffect, useState } from 'react';

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  const storedDarkMode = JSON.parse(localStorage.getItem('darkTheme'))

  return storedDarkMode ?? prefersDarkMode;
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchValue, setSearchValue] = useState('cat');

  // console.log(getInitialDarkMode());
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme',newDarkTheme)
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
