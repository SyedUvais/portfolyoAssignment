import React, { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState({});

  const getUserCompleteDetails = async () =>
  {
      const api_url = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';

      try
      {
          const response = await fetch (api_url, {
              method: 'GET',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
          });

          const result = await response.json();

          console.log("complete user details api success response", result);

          if (result.success === true)
          {
              console.log("complete user details api success true response", result.user);

              setUserInfo(result.user)
          }
          else
          {
              console.log("complete user details api success false response", result);
          }
      }
      catch (error)
      {
          console.log("complete user details api error", error);
      }
  }

  useEffect(() =>
  {
      getUserCompleteDetails();
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
    return useContext(UserContext);
  };