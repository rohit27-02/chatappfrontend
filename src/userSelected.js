import React, { createContext, useContext, useState } from 'react';

export const UserSelectedContext = createContext();

export function useUserSelected() {
  return useContext(UserSelectedContext);
}

export function UserSelectedProvider({ children }) {
  const [userSelected, setUserSelected] = useState('');

  return (
    <UserSelectedContext.Provider value={{ userSelected, setUserSelected }}>
      {children}
    </UserSelectedContext.Provider>
  );
}
