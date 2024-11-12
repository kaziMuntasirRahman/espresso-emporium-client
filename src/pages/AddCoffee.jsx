import { useContext, useState } from "react";
import BackToHome from "../component/BackToHome";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const AddCoffee = () => {
  const [newCoffee, setNewCoffee] = useState({
    name: "",
    chef: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photoURL: ""
  })
  const { serverURL } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleAddCoffee = (e) => {
    e.preventDefault();
    // console.log(newCoffee);
    fetch(`${serverURL}/coffee`, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Coffee has been added to our Database.",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
        }
      })
  }

  return (
    <div className="flex relative  flex-col 2xl:px-[300px] lx:px-[200px] lg:px-[100px] px-14">
      <BackToHome className="my-6" />
      <form onSubmit={handleAddCoffee} className="px-[112px] py-[70px] bg-[#f4f3f0] grid grid-cols-1 lg:grid-cols-2 gap-6">
        <h1 className="shaded-text-slate text-5xl col-span-2 mx-auto">Add New Coffee</h1>
        <div className="w-10/12 text-center text-[#1a1919]/70 text-lg  font-raleway leading-[30px] col-span-2 my-2 mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Name</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter Coffee Name"
            onChange={(e) => setNewCoffee({ ...newCoffee, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Chef</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter coffee chef name"
            onChange={(e) => setNewCoffee({ ...newCoffee, chef: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Supplier</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter Coffee Supplier Name"
            onChange={(e) => setNewCoffee({ ...newCoffee, supplier: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Taste</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="How the coffee taste"
            onChange={(e) => setNewCoffee({ ...newCoffee, taste: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Category</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter Coffee Category"
            onChange={(e) => setNewCoffee({ ...newCoffee, category: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Details</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter Coffee Details"
            onChange={(e) => setNewCoffee({ ...newCoffee, details: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4 col-span-2">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Photo</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway" placeholder="Enter Coffee PhotoURL"
            onChange={(e) => setNewCoffee({ ...newCoffee, photoURL: e.target.value })}
          />
        </div>
        <button className="rounded-md bg-[#e3b577] shaded-text-slate  text-white font-rancho text-2xl py-[9px] px-5 border-2 border-[#1a1919] col-span-2 hover:text-[#1a1919] transition-all duration-75 mt-4">
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;