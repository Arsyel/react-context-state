import React, { useState } from "react";
import { FAKE_USER } from "../../api/Api";

const { Provider, Consumer } = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(FAKE_USER);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Provider value={{
      user: currentUser,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }}>
      {children}
    </Provider>
  );
}

export const UserConsumer = Consumer;