import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { auth } from "./firebase.config";
import { useEffect } from "react";

export const UserContext = createContext(null);

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  const [leftSidebarShow, setLeftSidebarShow] = useState(false);
  const [rightSidebarShow, setRightSidebarShow] = useState(false);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const updateUser = (info) => {
    return updateProfile(auth.currentUser, info);
  }
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(email, password);
  }
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
      setUserLoaded(true);
    });
    return () => unSubscribe();
  }, []);

  const value = {
    user,
    setUser,
    createUser,
    updateUser,
    signInUser,
    googleSignIn,
    githubSignIn,
    signOutFunc,
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