import { useLocation, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";
import LatestMarquee from "../components/Header/LatestMarquee";
import Navbar from "../components/Header/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import NewsCardContainer from "../components/NewsCardContainer";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
  const {pathname} = useLocation();

  return (
    <div className="bg-white">
      <Helmet>
        <title>The Dragon News</title>
      </Helmet>

      <Header />
      <LatestMarquee />
      <Navbar />

      <div className="container my-8">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] xl:grid-cols-[300px_1fr_300px] items-start gap-8">
          <LeftSidebar />
          <Outlet />
          {
            pathname === '/' && <NewsCardContainer />
          }
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;