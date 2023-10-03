import PropTypes from "prop-types";

const LoginWithButton = ({method, image, event}) => {
  return (
    <button className="border-2 border-gray rounded-full px-6 py-2 flex justify-center items-center gap-2 font-medium w-full mb-2" onClick={event}><img className="w-6" src={image} alt="Icon" /> Log in with {method}</button>
  );
};

export default LoginWithButton;

LoginWithButton.propTypes = {
  method: PropTypes.string,
  image: PropTypes.string,
  event: PropTypes.func
}