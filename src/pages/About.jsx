import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - The Dragon News</title>
      </Helmet>

      <Header />
      <Navbar />
      <main className="my-8">
        <section>
          <div className="container">
            <h2 className="text-3xl font-semibold text-center mt-16">This pages in not developed yet!</h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;