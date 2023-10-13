import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineCalendar } from 'react-icons/ai';
import { format } from 'date-fns';

const SidebarCard = ({news, categories}) => {
  const {_id, thumbnail_url , title, category_id, author} = news;

  return (
    <Link to={`/details/${_id}`} onClick={() => scrollTo(0, 0)}>
      <img className="w-full aspect-[4/3] object-cover object-top rounded-xl mb-3" src={thumbnail_url} alt='Thumbnail' />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex justify-between items-center gap-4 mb-8 text-gray">
        <span>{categories.find(category => category.id === category_id).name.split(" ")[0]}</span>
        <div className="flex items-center gap-2">
          <AiOutlineCalendar className="text-2xl" />
          <span>{format(new Date(author.published_date.split(' ')[0]), "MMM d, yyyy")}</span>
        </div>
      </div>
    </Link>
  );
};

export default SidebarCard;

SidebarCard.propTypes = {
  news: PropTypes.object,
  categories: PropTypes.array
}