import TopBar from "../component/TopBar";
import Footer from "../component/Footer";
import BackToHome from "../component/BackToHome";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <TopBar />
      <BackToHome />
      <img src="images/404/404.gif" className="h-[800px] w-auto  mx-auto" />
      <Footer />
    </div>
  );
};

export default ErrorPage;