import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import PropTypes from "prop-types";
import { auth } from "./firebase.config";
import { useEffect } from "react";

export const UserContext = createContext(null);

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  const [leftSidebarShow, setLeftSidebarShow] = useState(false);
  const [rightSidebarShow, setRightSidebarShow] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserLoaded(true);
    });
    return () => unSubscribe();
  }, []);

  const value = {
    user,
    setUser,
    userLoaded,
    leftSidebarShow,
    setLeftSidebarShow,
    rightSidebarShow,
    setRightSidebarShow
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node
}