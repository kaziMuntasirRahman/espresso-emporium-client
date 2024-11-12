import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const PopularCoffeeCart = ({ product, onDelete }) => {
  const { _id, name, chef, supplier, taste, category, details, photoURL } = product;


  return (
    <div className="bg-[#f5f4f1] rounded-3xl p-[30px] pr-12 flex justify-between items-center">
      <img src={photoURL} className="h-[240px] w-[185px] object-cover rounded-2xl" />
      <div className="text-[#1b1a1a] text-xl font-semibold font-raleway">
        <p>Name: <span className="text-[#5c5b5b] font-normal">{name}</span></p>
        <p>Chef: <span className="text-[#5c5b5b] font-normal">{chef}</span></p>
        <p>Price: <span className="text-[#5c5b5b] font-normal">890 Taka</span></p>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <Link to={`/coffee/${_id}`} className="bg-[#d2b48c] rounded-md p-3">
          <FaEye className="text-xl" />
        </Link>
        <Link to={`/update/${_id}`} className="bg-[#3c393b] rounded-md p-3">
          <MdEdit className="text-xl" />
        </Link>
        <div
          onClick={() => onDelete(_id)}
          className="bg-[#ea4744] rounded-md p-3 cursor-pointer"
        >
          <MdDelete className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default PopularCoffeeCart;