import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";
import RightSidebar from "../components/RightSidebar";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import EditorsInsightCard from "../components/EditorsInsightCard";
import Navbar from "../components/Header/Navbar";

const NewsDetails = () => {
  const [thisCat3Newses, setThisCat3Newses] = useState([]);
  const [news, setNews] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => {
        setNews(data.find(item => item._id === id));
        setThisCat3Newses(data.sort((a, b) => b.total_view - a.total_view).filter(item => item._id !== news._id).slice(0, 3))
      })
  }, [id, news._id])
  console.log(thisCat3Newses);
  
  const {image_url, title, details, category_id} = news;

  return (
    <>
      <Helmet>
        <title>News Details - The Dragon News</title>
      </Helmet>

      <Header />
      <Navbar />

      <div className="container my-8">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] items-start gap-8">
          <main>
            <section>
              <h3 className="text-2xl font-semibold mb-6">Dragon News</h3>
              <img src={image_url} alt="News Photo" className="mb-6" />
              <h2 className="text-3xl font-bold mb-2">{title}</h2>
              <p className="text-gray mb-6">{details}</p>
              <Link to={`/${category_id}`} className="btn btn-primary">
                <AiOutlineArrowLeft />
                All news in this category
              </Link>
            </section>

            <section className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Editors Insight</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                  thisCat3Newses.map(news => <EditorsInsightCard key={news._id} news={news} />)
                }
              </div>
            </section>
          </main>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default NewsDetails;