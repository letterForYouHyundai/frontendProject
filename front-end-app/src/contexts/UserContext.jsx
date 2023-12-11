import React, { useMemo, useState, createContext } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();
  const value = useMemo(() => ({
    userInfo,
    setUserInfo,
  }), [userInfo]);

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
