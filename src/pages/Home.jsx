import { useLoaderData } from "react-router-dom";
import FollowUs from "../component/FollowUs";
import HomeBanner from "../component/HomeBanner";
import PopularProducts from "../component/PopularProducts";
import Qualities from "../component/Qualities";

const Home = () => {
  const coffees = useLoaderData();

  return (
    <div>
      <HomeBanner />
      <Qualities />
      <PopularProducts coffees={coffees} />
      <FollowUs />
    </div>
  );
};

export default Home;