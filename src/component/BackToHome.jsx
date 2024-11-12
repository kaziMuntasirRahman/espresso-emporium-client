import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const BackToHome = ({ className }) => {
  return (
    <Link to='/' className={`flex items-center gap-4 mx-auto ${className}`}>
      <IoArrowBack className="text-2xl" />
      <h1 className="shaded-text text-slate-700">Back to Home</h1>
    </Link>
  );
};

export default BackToHome;