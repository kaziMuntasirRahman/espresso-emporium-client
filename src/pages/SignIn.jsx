import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BackToHome from "../component/BackToHome";
import { AuthContext } from "../provider/AuthProvider";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const { signInUser, serverURL } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    const result = await signInUser(email, password);
    try {
      const updatedUserRecord = { email, lastLoginAt: result.user.metadata.lastLoginAt };
      console.log(updatedUserRecord);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Signed in as ${result.user.displayName}`,
        showConfirmButton: false,
        timer: 1500
      });
      await fetch(`${serverURL}/users`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUserRecord)
      })
        .then(res => res.json())
        .then(data => console.log(data))
      navigate('/');
    }
    catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="flex relative  flex-col 2xl:px-[300px] lx:px-[200px] lg:px-[100px] px-14">
      <BackToHome className="my-6" />
      <form
        onSubmit={handleSignIn}
        className="px-[112px] py-[70px] bg-[#f4f3f0] grid grid-cols-1 lg:grid-cols-2 gap-6">
        <h1 className="shaded-text-slate text-5xl col-span-2 mx-auto mb-10">Sign In for extra perks!</h1>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Email</h1>
          <input
            type="email"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter Your Email"
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Password</h1>
          <input
            type="password"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter Password"
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          />
        </div>
        <button className="rounded-md bg-[#e3b577] shaded-text-slate  text-white font-rancho text-2xl py-[9px] px-5 border-2 border-[#1a1919] col-span-2 hover:text-[#1a1919] transition-all duration-75 mt-4">
          Sign In
        </button>
        <Link to="/signup" className="text-[#8f5305] mt-2 block text-center hover:underline col-span-2">
          Don't have an account? Sign up here.
        </Link>
      </form>
    </div>
  );
};

export default SignIn;