import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { format } from 'date-fns';

const Header = () => {
  return (
    <header className="mt-6 mb-5 text-center">
      <div className="container">
        <Link to='/'><img className="w-[280px] sm:w-[350px] mx-auto mb-3" src={logo} alt="Logo" /></Link>
        <p className="mb-1 text-gray">Journalism Without Fear or Favour</p>
        <p className="text-[18px] font-medium">{format(new Date(), "EEEE,")} <span className="text-gray">{format(new Date(), "MMMM dd, yyyy")}</span></p>
      </div>
    </header>
  );
};

export default Header;