import React, {
  useMemo, useState, createContext, useEffect,
} from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const sessionStorageUser = sessionStorage.getItem('userInfo');
  const [userInfo, setUserInfo] = useState(sessionStorageUser ? JSON.parse(sessionStorageUser) : undefined);
  const value = useMemo(() => ({
    userInfo,
    setUserInfo,
  }), [userInfo]);

  useEffect(() => {
    axios.get('/api/common/checkLoginYn')
      .then((response) => {
        if (response.data.result != null) {
          setUserInfo(response.data.result);
        } else {
          setUserInfo(null);
        }
      })
      .catch((error) => {
        console.error('Error checking login status:', error);
      });
  }, []);

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
