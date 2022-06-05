import { useState, useEffect, createContext } from "react";

import { onAuthStateChangedListener } from "../firebase";

const UserContext = createContext();

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
