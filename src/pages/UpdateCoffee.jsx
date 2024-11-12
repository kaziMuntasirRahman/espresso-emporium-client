import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import BackToHome from "../component/BackToHome";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, supplier, taste, category, details, photoURL } = useLoaderData();
  const navigate = useNavigate();
  const [newCoffee, setNewCoffee] = useState({
    name,
    chef,
    supplier,
    taste,
    category,
    details,
    photoURL
  })
  const handleUpdateCoffee = async (e) => {
    e.preventDefault();
    const { value: password } = await Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: "30",
        autocapitalize: "off",
        autocorrect: "off"
      }
    });
    if (password !== 'espresso #') {
      await Swal.fire('Wrong Password');
      Swal.fire('You need to enter correct password to update Coffee info.');
      return;
    }
    fetch(`${serverURL}/coffee/${_id}`, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee info has been updated.",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
        }
      })
  }

  return (
    <div className="2xl:px-[300px] lx:px-[200px] lg:px-[100px] px-14">
      <BackToHome className="my-6" />
      <form onSubmit={handleUpdateCoffee} className="px-[112px] py-[70px] bg-[#f4f3f0] grid grid-cols-2 gap-6">
        <h1 className="shaded-text-slate text-5xl col-span-2 mx-auto">Update Coffee</h1>
        <div className="w-10/12 text-center text-[#1a1919]/70 text-lg  font-raleway leading-[30px] col-span-2 my-2 mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Name</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway"
            defaultValue={name}
            placeholder="Enter Coffee Name"
            onChange={(e) => setNewCoffee({ ...newCoffee, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Chef</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway"
            placeholder="Enter coffee chef name"
            defaultValue={chef}
            onChange={(e) => setNewCoffee({ ...newCoffee, chef: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Supplier</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway"
            placeholder="Enter Coffee Supplier Name"
            defaultValue={supplier}
            onChange={(e) => setNewCoffee({ ...newCoffee, supplier: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Taste</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway"
            placeholder="How the coffee taste"
            defaultValue={taste}
            onChange={(e) => setNewCoffee({ ...newCoffee, taste: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Category</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway"
            placeholder="Enter Coffee Category"
            defaultValue={category}
            onChange={(e) => setNewCoffee({ ...newCoffee, category: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1a1919]/80 text-xl font-semibold font-raleway leading-[30px]">Details</h1>
          <input
            type="text"
            className="px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm font-raleway"
            placeholder="Enter Coffee Details"
            defaultValue={details}
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
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;