import React, { useEffect, useState } from "react";
import { getEmails } from "../../api/Api";

const { Provider, Consumer } = React.createContext();

export const EmailProvider = ({ children }) => {
  const [emailState, setEmailState] = useState({
    loading: false,
    error: null,
  });
  const [data, setData] = useState({
    emails: [],
    currentEmail: null,
  });

  const handleSelectEmail = (email) => {
    setData({
      ...data,
      currentEmail: email
    });
  };
  
  useEffect(() => {
    setEmailState({ loading: true, error: null });
    getEmails()
      .then((emails) => {
        setData({
          ...data,
          emails
        });
        setEmailState({ ...emailState, loading: false });
      })
      .catch((error) => {
        setEmailState({ loading: false, error });
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider
      value={{
        ...emailState,
        ...data,
        onSelectEmail: handleSelectEmail
      }}
    >
      {children}
    </Provider>
  );
}

export const EmailConsumer = Consumer;