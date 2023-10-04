import LoginWithButton from "./LoginWithButton";
import googleIcon from "../assets/images/icons/google.png";
import githubIcon from "../assets/images/icons/github.png";
import facebook2Icon from "../assets/images/icons/facebook_2.png";
import twitter2Icon from "../assets/images/icons/twitter_2.png";
import instagram2Icon from "../assets/images/icons/instagram_2.png";
import FindUsButton from "./FindUsButton";
import QZone1 from "../assets/images/qZone1.png";
import QZone2 from "../assets/images/qZone2.png";
import QZone3 from "../assets/images/qZone3.png";
import adBg from "../assets/images/bg.png"
import { useContext } from "react";
import { UserContext } from "../ContextProvider";
import { FaCircleXmark } from 'react-icons/fa6';

const RightSidebar = () => {
  const {user} = useContext(UserContext);
  const {rightSidebarShow, setRightSidebarShow} = useContext(UserContext)

  return (
    <aside className="bg-white w-[300px] xl:w-full fixed -right-full top-0 bottom-0 xl:sticky xl:top-[96px] overflow-y-auto z-30 xl:z-10 px-4 pb-8 pt-14 xl:p-0 border-s-2 xl:border-0 border-gray [box-shadow:-15px_0px_30px_0px_rgba(0,0,0,0.4)] transition-[right]" style={rightSidebarShow ? {right: '0'} : {}}>
      <FaCircleXmark className='xl:hidden absolute top-4 left-4 text-2xl text-primary' onClick={() => setRightSidebarShow(!rightSidebarShow)} />
      {/* Login Section */}
      {
        !user && <section>
          <h3 className="text-2xl font-semibold mb-4">Login With</h3>
          <LoginWithButton method="Google" image={googleIcon} />
          <LoginWithButton method="Github" image={githubIcon} />
        </section>
      }

      {/* Find Us Section */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Find Us On</h3>
        <div className="border border-[#E7E7E7] rounded [&>*:last-child]:border-b-0">
          <FindUsButton href="https://www.facebook.com" image={facebook2Icon} text="Facebook" />
          <FindUsButton href="https://www.twitter.com" image={twitter2Icon} text="Twitter" />
          <FindUsButton href="https://www.instagram.com" image={instagram2Icon} text="Instagram" />
        </div>
      </section>

      {/* Q-Zone Section */}
      <section className="mt-8 bg-[#F3F3F3] px-4 py-6 rounded">
        <h3 className="text-2xl font-semibold mb-4">Q-Zone</h3>
        <div className="space-y-4 [&>*]:w-full">
          <img src={QZone1} alt="Q-Zone Image" />
          <img src={QZone2} alt="Q-Zone Image" />
          <img src={QZone3} alt="Q-Zone Image" />
        </div>
      </section>

      {/* Ad Card Section */}
      <section className="mt-8 text-white min-h-[500px] flex justify-center items-center p-4 text-center" style={{backgroundImage: `url('${adBg}')`}}>
        <div>
          <h2 className="text-3xl font-bold mb-4">Create an Amazing Newspaper</h2>
          <p className="mb-8 leading-7">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <button className="btn btn-primary !min-h-[50px]">Learn More</button>
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;