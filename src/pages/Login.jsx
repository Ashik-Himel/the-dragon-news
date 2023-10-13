import { Helmet } from "react-helmet-async";
import Navbar from "../components/Header/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Get values
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Login Successful !!!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        toast.error(error.message);
      })
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
        <title>Login - The Dragon News</title>
      </Helmet>

      <Navbar />

      <main className="pb-8">
        <div className="container">
          <div className="mt-8 sm:mt-16 max-w-[500px] mx-auto bg-white px-6 py-10 rounded-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Login your account</h2>
            <hr className="text-[#E7E7E7] mb-6" />

            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="block font-semibold mb-2">Email Address</label>
              <input className="input w-full bg-[#F3F3F3] mb-5" type="email" name="email" id="email" placeholder="Enter your email address" required />
              <label htmlFor="password" className="block font-semibold mb-2">Password</label>
              <div className="relative mb-3">
                <input className="input w-full bg-[#F3F3F3]" onChange={handlePassOnChange} type={showPass ? "text": "password"} name="password" id="password" placeholder="Enter your password" required />
                {
                  showEye ? showPass ? <AiFillEyeInvisible className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl cursor-pointer" onClick={() => setShowPass(!showPass)} /> : <AiFillEye className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl cursor-pointer" onClick={() => setShowPass(!showPass)} /> : ''
                }
              </div>
              <p className="text-primary font-semibold mb-5">{errorMsg}</p>
              <button type="submit" className="btn btn-secondary w-full !min-h-[48px] !rounded-md mb-6" disabled={isActive ? "" : "disabled"}>Login</button>
            </form>
            <p className="font-semibold text-center">Don&apos;t have an account? <Link to='/register' className="text-primary" onClick={() => scrollTo(0, 0)}>Register</Link></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;