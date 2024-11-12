import { useContext, useState } from "react";
import BackToHome from "../component/BackToHome";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { createUser, serverURL } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password } = userInfo;
    console.log(name, email, password);
    const result = await createUser(name, email, password);
    const userRecord = {
      uid: result.uid,
      email: result.email,
      emailVerified: result.emailVerified,
      displayName: result.displayName,
      isAnonymous: result.isAnonymous,
      providerId: result.providerId,
      createdAt: result.metadata.createdAt,
      lastLoginAt: result.metadata.lastLoginAt,
      photoURL: 'https://img.favpng.com/17/24/10/computer-icons-user-profile-male-avatar-png-favpng-jhVtWQQbMdbcNCahLZztCF5wk.jpg',
      password
    };
    try {
      console.log(userRecord);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `User account created named ${result.displayName}`,
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/');
      await fetch(`${serverURL}/users`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userRecord)
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
    catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "User creation failed.",
        showConfirmButton: true,
        timer: 3000
      });
      console.log(err.message);
    }
  }

  return (
    <div className="flex relative  flex-col 2xl:px-[300px] lx:px-[200px] lg:px-[100px] px-14">
      <BackToHome className="my-6" />
      <form
        onSubmit={handleSignUp}
        className="px-[112px] py-[70px] bg-[#f4f3f0] grid grid-cols-1 lg:grid-cols-2 gap-6">
        <h1 className="shaded-text-slate text-5xl col-span-2 mx-auto mb-10">Create an account for extra perks!</h1>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Name</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter Your Name"
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Email</h1>
          <input
            type="email"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter Your Email"
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4 col-span-2">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Password</h1>
          <input
            type="password"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter Password"
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          />
        </div>
        <button className="rounded-md bg-[#e3b577] shaded-text-slate  text-white font-rancho text-2xl py-[9px] px-5 border-2 border-[#1a1919] col-span-2 hover:text-[#1a1919] transition-all duration-75 mt-4">
          Sign Up
        </button>
        <Link to="/signin" className="text-[#8f5305] mt-2 block text-center hover:underline col-span-2">
          Already have an account? Sign in now.
        </Link>
      </form>
    </div>
  );
};

export default SignUp;