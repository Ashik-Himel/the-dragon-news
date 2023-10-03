import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const NewsCardContainer = () => {
  const [newses, setNewses] = useState([]);
  const id = useParams()?.id || "0";

  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => setNewses(data))
  }, [])

  return (
    <main>
      <h3 className="text-2xl font-semibold mb-4">Dragon News Home</h3>
      {
        id === '0' ? newses.map(news => <NewsCard key={news._id} news={news} />) : newses.filter(news => news.category_id === id).map(news => <NewsCard key={news._id} news={news} />)
      }
    </main>
  );
};

export default NewsCardContainer;