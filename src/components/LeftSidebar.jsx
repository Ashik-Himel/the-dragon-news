import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import SidebarCard from "./SidebarCard";


const LeftSidebar = () => {
  const {pathname} = useLocation();
  const [categories, setCategories] = useState([]);
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    fetch('/data/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => setNewses(data))
  }, [])

  return (
    <aside className="md:sticky top-6">
      {/* Categories Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">All Category</h3>
        {
          categories.map(category => <NavLink to={`/${category.id}`} key={category.id} className="block p-4 text-center text-light-gray" style={({isActive}) => isActive || (pathname === '/' && category.id === '0') ? {backgroundColor: '#E7E7E7'} : null}>{category.name}</NavLink>)
        }
      </section>
      {/* News Card Section */}
      <section className="mt-8">
        {
          newses.filter(news => news.others_info.is_trending).slice(0, 3).map(news => <SidebarCard key={news._id} news={news} categories={categories} />)
        }
      </section>
    </aside>
  );
};

export default LeftSidebar;