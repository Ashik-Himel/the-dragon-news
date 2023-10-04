import { useContext, useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import SidebarCard from "./SidebarCard";
import { UserContext } from "../ContextProvider";
import { FaCircleXmark } from "react-icons/fa6";


const LeftSidebar = () => {
  const {pathname} = useLocation();
  const [categories, setCategories] = useState([]);
  const [newses, setNewses] = useState([]);
  const {leftSidebarShow, setLeftSidebarShow} = useContext(UserContext);

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
    <aside className="bg-white w-[300px] xl:w-full fixed top-0 -left-full bottom-0 xl:sticky xl:top-6 overflow-y-auto z-10 px-4 pb-8 pt-14 xl:p-0 border-e-2 xl:border-0 border-gray transition-[left]" style={leftSidebarShow ? {left: '0'} : {}}>
      <FaCircleXmark className='xl:hidden absolute top-4 right-4 text-2xl text-primary' onClick={() => setLeftSidebarShow(!leftSidebarShow)} />
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