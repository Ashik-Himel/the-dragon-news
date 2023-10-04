import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [leftSidebarShow, setLeftSidebarShow] = useState(false);
  const [rightSidebarShow, setRightSidebarShow] = useState(false);


  const value = {
    user,
    setUser,
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