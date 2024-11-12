import { Outlet } from "react-router-dom";
import TopBar from "../component/TopBar";
import Footer from "../component/Footer";

const Root = () => {
  return (
    <div>
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;