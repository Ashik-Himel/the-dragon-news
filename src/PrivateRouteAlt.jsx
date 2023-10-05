import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./ContextProvider";

const PrivateRouteAlt = ({children}) => {
  const {user, userLoaded} = useContext(UserContext);

  return (
    <>
      {
        userLoaded ? !user ? children : <Navigate to='/' /> : ''
      }
    </>
  );
};

export default PrivateRouteAlt;

PrivateRouteAlt.propTypes = {
  children: PropTypes.node
}