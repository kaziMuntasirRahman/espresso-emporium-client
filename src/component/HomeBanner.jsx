import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="relative py-[288px] pl-[50%]">
      <img src="images/more/3.png" className="absolute -z-10 top-0 left-0" />
      <div className="flex flex-col items-start gap-4 pr-[200px]">
        <div className="text-white text-[55px] font-rancho">Would you like a Cup of Delicious Coffee?</div>
        <div className="text-white font-raleway leading-[30px] mb-4">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</div>
        <div className="flex gap-12">
          <Link to='/comments' className="bg-[#e3b577]  text-[#242222] text-2xl font-rancho cursor-pointer px-6 py-[9px]">User Comments</Link>
          <Link to='/users' className="bg-[#e3b577]  text-[#242222] text-2xl font-rancho cursor-pointer px-6 py-[9px]">User List</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;