import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [nextPath, setNextPath] = useState('');

  const navigateWithAnimation = (path) => {
    setNextPath(path);
    setIsExiting(true);
  };

  return (
    <NavigationContext.Provider value={{ isExiting, setIsExiting, nextPath, navigateWithAnimation }}>
      {children}
    </NavigationContext.Provider>
  );
};
