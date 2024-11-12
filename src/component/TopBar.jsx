import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const TopBar = () => {
  const { logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() =>
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You've successfully Logged  Out.",
          showConfirmButton: false,
          timer: 1500
        })
      )
      .catch(err => {
        alert("Logout failed");
      })
  }
  const { user } = useContext(AuthContext);
  return (
    <div className="relative h-[120px]">
      <img
        src="images/more/15.jpg"
        className="absolute w-full h-full object-cover -z-10" />
      <div className="flex justify-between items-center py-4 px-14">
        <div />
        <div className="flex justify-center items-center gap-4">
          <img
            src="images/more/logo1.png"
            className="w-[75px] h-[90px] cursor-pointer"
          />
          <h1 className="text-6xl text-white font-rancho">Espresso Emporium</h1>
        </div>
        {
          user ?
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="rounded-md bg-[#e3b577] shaded-text-slate  text-white font-rancho text-2xl  py-[9px] px-5 border-2 border-[#1a1919]">{user.displayName}</div>
              <ul tabIndex={0} className="dropdown-content menu bg-[#8b540d] rounded w-52 p-2 shadow text-white z-50">
                <div className="p-2" >{user.email}</div>
                <div className="p-2 cursor-pointer" onClick={handleSignOut} >LogOut</div>
              </ul>
            </div> :
            <Link
              to="/signin"
              className="rounded-md bg-[#e3b577] shaded-text-slate  text-white font-rancho text-2xl  py-[9px] px-5 border-2 border-[#1a1919]"
            >Login</Link>
        }
      </div>
    </div >
  );
};

export default TopBar;