import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../ContextProvider";
import { RiMenu2Line, RiMenu3Line } from 'react-icons/ri';
import { PiUserCircleFill } from 'react-icons/pi';

const Navbar = () => {
  const {pathname} = useLocation();
  const {user} = useContext(UserContext);
  const {leftSidebarShow ,setLeftSidebarShow, rightSidebarShow, setRightSidebarShow} = useContext(UserContext);

  return (
    <nav className="py-4 bg-[inherit] sticky top-0 z-20 border-b-2 border-[#E7E7E7]">
      <div className="container">
        <div className="grid grid-cols-3 justify-between items-center gap-6">
          <RiMenu2Line className="md:hidden text-xl me-auto cursor-pointer" style={pathname.includes('/details') || pathname.includes('/login') || pathname.includes('/register') || pathname.includes('/about') || pathname.includes('/career') ? {visibility: "hidden"} : {}} onClick={() => setLeftSidebarShow(!leftSidebarShow)} />
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
            {
              user ? <img className="w-10 hidden sm:block" src={user?.photoURL} alt="User's Photo" /> : <PiUserCircleFill className="text-[40px] hidden sm:block" />
            }
            {
              !user ? <Link to='/login' className="btn btn-secondary hidden sm:inline-flex">Login</Link> : <span className="hidden sm:block">user?.displayName</span>
            }
            <RiMenu3Line className="xl:hidden text-xl ms-auto md:ms-4 cursor-pointer" style={pathname.includes('/login') || pathname.includes('/register') || pathname.includes('/about') || pathname.includes('/career') ? {display: 'none'} : {}} onClick={() => setRightSidebarShow(!rightSidebarShow)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;