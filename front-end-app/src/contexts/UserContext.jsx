import React, { useMemo, useState, createContext } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const localStorageUser = localStorage.getItem('userInfo');
  const [userInfo, setUserInfo] = useState(localStorageUser ? JSON.parse(localStorageUser) : undefined);
  const value = useMemo(() => ({
    userInfo,
    setUserInfo,
  }), [userInfo]);

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
