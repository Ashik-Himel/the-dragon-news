import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user.png";
import { useContext } from "react";
import { UserContext } from "../../ContextProvider";
import { RiMenu2Line, RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
  const {user} = useContext(UserContext);
  const {leftSidebarShow ,setLeftSidebarShow, rightSidebarShow, setRightSidebarShow} = useContext(UserContext);

  return (
    <nav className="py-4 bg-white sticky top-0 z-20 border-b-2 border-[#E7E7E7]">
      <div className="container">
        <div className="grid grid-cols-3 justify-between items-center gap-6">
          <RiMenu2Line className="md:hidden text-xl me-auto cursor-pointer" onClick={() => setLeftSidebarShow(!leftSidebarShow)} />
          <ul className="md:col-start-2 text-gray flex justify-center items-center gap-4 sm:gap-6">
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
          <div className="flex justify-center sm:justify-end items-center gap-4">
            <img className="w-10 hidden sm:block" src={user ? user?.photoURL : userIcon} alt="User Image" />
            {
              !user ? <Link to='/login' className="btn btn-secondary hidden sm:inline-flex">Login</Link> : <span className="hidden sm:block">user?.displayName</span>
            }
            <RiMenu3Line className="xl:hidden text-xl ms-auto md:ms-4 cursor-pointer" onClick={() => setRightSidebarShow(!rightSidebarShow)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;