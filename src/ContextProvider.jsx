import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { auth } from "./firebase.config";
import { useEffect } from "react";

export const UserContext = createContext(null);

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [leftSidebarShow, setLeftSidebarShow] = useState(false);
  const [rightSidebarShow, setRightSidebarShow] = useState(false);

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }
  const githubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  }
  const signOutFunc = () => {
    return signOut(auth);
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unSubscribe();
  }, []);

  const value = {
    user,
    setUser,
    googleSignIn,
    githubSignIn,
    signOutFunc,
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