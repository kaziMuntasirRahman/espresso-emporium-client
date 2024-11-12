import { useContext, useState } from "react";
import { RiCupLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PopularCoffeeCart from "./PopularCoffeeCart";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const PopularProducts = ({ coffees }) => {
  const [uiCoffees, setUiCoffees] = useState(coffees);
  const { serverURL } = useContext(AuthContext);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "তুই সত্যিই আমাকে ডিলিট করে দিবি?🥺",
      text: "আমার টেস্ট কিন্তু ইউনিক।😎",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        //password confirmation
        const { value: password } = await Swal.fire({
          title: "Enter your password to confirm delete",
          input: "password",
          inputLabel: "Password",
          inputPlaceholder: "password",
          inputAttributes: {
            maxlength: "10",
            autocapitalize: "off",
            autocorrect: "off"
          }
        });
        if (password !== "espresso #") {
          Swal.fire("Wrong Password.");
          return;
        }

        fetch(`${serverURL}/coffees/${id}`, { method: 'delete' })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "মনে রাখিস, আমার টেস্ট তুই ভুলতে পারবি না।😓",
                icon: "success"
              });
              const updatedCoffees = uiCoffees.filter(coffee => coffee._id !== id);
              setUiCoffees(updatedCoffees);
            }
          })
      }
    });
  }

  return (
    <div className="flex flex-col items-center 2xl:px-[300px] lx:px-[200px] lg:px-[100px] px-14 mt-[120px] gap-2">
      <p className="text-center text-[#1a1919] text-xl font-raleway leading-relaxed">
        --- Sip & Savor ---
      </p>
      <h1 className="shaded-text mb-2">Our Popular Products</h1>
      <Link
        to="/add"
        className="rounded-md bg-[#e3b577] shaded-text-slate flex items-center mb-10 text-white font-rancho text-2xl gap-3 py-[9px] px-5 border-2 border-[#1a1919]"
      >
        <p>Add Coffee</p>
        <RiCupLine className="text-[#1a1919]" />
      </Link>

      {/* Coffee section */}
      <div className="grid grid-cols-2 justify-between gap-6 w-full">
        {uiCoffees.map((coffee, index) => (
          <PopularCoffeeCart
            key={index}
            product={coffee}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
