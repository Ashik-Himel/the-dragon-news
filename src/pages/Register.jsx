import { Helmet } from "react-helmet-async";
import Navbar from "../components/Header/Navbar";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { UserContext } from "../ContextProvider";
import toast from "react-hot-toast";

const Register = () => {
  const {createUser, updateUser} = useContext(UserContext);
  const [showPass, setShowPass] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Get values
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    createUser(email, password)
      .then((userCredential) => {
        toast.success("Registration Successful !!!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error.message);
      })

      updateUser({displayName : displayName, photoURL: photoURL})
        .then(() => {
          toast.success("Registration Successful !!!");
          e.target.reset();
        })
        .catch((error) => {
          console.log(error.message);
        })

    setIsActive(false);
  }
  const handlePassOnChange = e => {
    setIsActive(false);
    setErrorMsg("");
    const password = e.target.value;
    if (password) setShowEye(true)
    else setShowEye(false)
    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters!");
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      setErrorMsg("Password should contain at least one uppercase character!");
      return;
    }
    else if (!/[0-9]/.test(password)) {
      setErrorMsg("Password should contain at least one number!");
      return;
    }
    setIsActive(true);
  }

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <Helmet>
        <title>Register - The Dragon News</title>
      </Helmet>

      <Navbar />

      <main className="pb-8">
        <div className="container">
          <div className="mt-8 sm:mt-16 max-w-[500px] mx-auto bg-white px-6 py-10 rounded-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
            <hr className="text-[#E7E7E7] mb-6" />

            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="block font-semibold mb-2">Your Name</label>
              <input className="input w-full bg-[#F3F3F3] mb-5" type="text" name="name" id="name" placeholder="Enter your name" required />

              <label htmlFor="photo" className="block font-semibold mb-2">Photo URL</label>
              <input className="input w-full bg-[#F3F3F3] mb-5" type="text" name="photo" id="photo" placeholder="Enter your photo url" required />

              <label htmlFor="email" className="block font-semibold mb-2">Email</label>
              <input className="input w-full bg-[#F3F3F3] mb-5" type="email" name="email" id="email" placeholder="Enter your email address" required />

              <label htmlFor="password" className="block font-semibold mb-2">Password</label>
              <div className="relative mb-3">
                <input className="input w-full bg-[#F3F3F3]" onChange={handlePassOnChange} type={showPass ? "text": "password"} name="password" id="password" placeholder="Enter your password" required />
                {
                  showEye ? showPass ? <AiFillEyeInvisible className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl cursor-pointer" onClick={() => setShowPass(!showPass)} /> : <AiFillEye className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl cursor-pointer" onClick={() => setShowPass(!showPass)} /> : ''
                }
              </div>
              <p className="text-primary font-semibold mb-5">{errorMsg}</p>

              <div className="flex items-center gap-1 mb-6">
                <input className="cursor-pointer" type="checkbox" name="terms_and_conditions" id="terms_and_conditions" required />
                <label htmlFor="terms_and_conditions" className="text-gray">Accept <Link className="font-semibold">Terms and Conditions</Link></label>
              </div>

              <button type="submit" className="btn btn-secondary w-full !min-h-[48px] !rounded-md mb-6" disabled={isActive ? "" : "disabled"}>Register</button>
            </form>
            <p className="font-semibold text-center">Already have an account? <Link to='/login' className="text-primary">Login</Link></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;