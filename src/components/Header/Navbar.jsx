import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user.png";
import { useContext } from "react";
import { UserContext } from "../../ContextProvider";

const Navbar = () => {
  const {user} = useContext(UserContext);

  return (
    <nav className="my-5 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ul className="sm:col-start-2 text-gray flex justify-center items-center gap-6">
            <li>
              <NavLink to='/' className={({isActive}) => isActive && 'text-secondary font-semibold underline underline-offset-2'}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive}) => isActive && 'text-secondary font-semibold underline underline-offset-2'}>About</NavLink>
            </li>
            <li>
              <NavLink to='/career' className={({isActive}) => isActive && 'text-secondary font-semibold underline underline-offset-2'}>Career</NavLink>
            </li>
          </ul>
          <div className="sm:col-start-3 flex justify-center sm:justify-end items-center gap-4">
            <img className="w-10" src={user ? user?.photoURL : userIcon} alt="User Image" />
            {
              !user ? <Link to='/login' className="btn btn-secondary">Login</Link> : user?.displayName
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;