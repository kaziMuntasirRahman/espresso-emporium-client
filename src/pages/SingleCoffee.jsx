import { useLoaderData } from "react-router-dom";
import BackToHome from "../component/BackToHome";

const SingleCoffee = () => {
  const { _id, name, chef, supplier, taste, category, details, photoURL } = useLoaderData();
  return (
    <div className="pb-[120px] 2xl:px-[300px] lx:px-[200px] lg:px-[100px] px-14 pt-10">
      <BackToHome />
      <section className="bg-[#f4f3f0] w-full px-[185px] py-[72px] flex items-center gap-[116px] mt-10">
        <img src={photoURL} className="h-[455px] w-[350px] object-cover rounded" />
        <div>
          <h2 className="shaded-text mb-8">Niceties</h2>
          <div className="text-[#1b1a1a] text-xl font-semibold font-raleway flex flex-col gap-2">
            <p>Name: <span className="text-[#5c5b5b] font-normal">{name}</span></p>
            <p>Chef: <span className="text-[#5c5b5b] font-normal">{chef}</span></p>
            <p>Supplier: <span className="text-[#5c5b5b] font-normal">{supplier}</span></p>
            <p>Taste: <span className="text-[#5c5b5b] font-normal">{taste}</span></p>
            <p>Category: <span className="text-[#5c5b5b] font-normal">{category}</span></p>
            <p>Details: <span className="text-[#5c5b5b] font-normal">{details}</span></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCoffee;