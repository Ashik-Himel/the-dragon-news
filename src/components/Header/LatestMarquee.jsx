import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const LatestMarquee = () => {
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => setNewses(data))
  }, [])

  return (
    <section>
      <div className="container">
        <div className="bg-[#F3F3F3] p-4 flex justify-center items-center gap-4">
          <button className="btn btn-primary">Latest</button>
          <Marquee speed='70' pauseOnHover={true} className="font-semibold">
            {
              newses.filter(news => news.others_info.is_trending).slice(0, 5).map(news => <Link to={`/details/${news._id}`} key={news._id} className="hover:text-blue-700 hover:underline hover:underline-offset-2 mr-8" onClick={() => scrollTo(0, 0)}>{news.title}</Link>)
            }
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default LatestMarquee;