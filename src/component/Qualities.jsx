import { useEffect, useState } from "react";

const Qualities = () => {
  const [allQualitiy, setAllQuality] = useState([]);

  useEffect(() => {
    fetch('data/quality.json')
      .then(res => res.json())
      .then(data => setAllQuality(data))
  }, []);

  return (
    <div className="w-full 2xl:px-[300px] lx:px-[200px] lg:px-[100px] px-14 bg-[#eceae3] flex items-center justify-between gap-10 py-14">
      {
        allQualitiy.map((quality) =>
          <div key={quality.id} className="flex flex-col items-start gap-2">
            <img src={quality.image} className="mb-2" />
            <h1 className="text-[#331a15] text-[35px] font-rancho">{quality.heading}</h1>
            <p className="text-[#1a1919] font-raleway leading-relaxed">{quality.title}</p>
          </div>
        )}
    </div>
  );
};

export default Qualities;