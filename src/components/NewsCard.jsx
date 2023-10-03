import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BsBookmark, BsShare, BsFillStarFill, BsStar, BsFillEyeFill } from 'react-icons/bs';

const NewsCard = ({news}) => {
  const { author, title, image_url, details, _id, rating, total_view} = news;
  const ratingArray = [];
  const ratingInt = parseInt(rating.number);
  for (let i = 1; i <= 5; i++) {
    if (i <= ratingInt) ratingArray.push(i)
    else ratingArray.push(-i)
  }

  return (
    <div className="border-2 border-[#E7E7E7] rounded-md mb-8">
      <div className="bg-[#F3F3F3] flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <img className="w-16 rounded-full" src={author.img} alt="Author's Photo" />
          <div>
            <h5 className="text-[18px] font-semibold">{author.name}</h5>
            <span className="text-gray">{author.published_date?.split(" ")[0]}</span>
          </div>
        </div>
        <div className="text-gray text-2xl flex items-center gap-4">
          <BsBookmark />
          <BsShare />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <img className="w-full rounded-md mb-6" src={image_url} alt="News Image" />
        <p className="text-gray">{details.slice(0, 250)}...</p>
        <Link to={`/details/${_id}`} className="font-semibold text-[#FF8C47] text-[18px] mb-4 block">Read More</Link>
        <hr className="text-[#E7E7E7] mb-4" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex gap-[2px] text-[#FF8C47] text-xl">
              {
                ratingArray.map(item => item > 0 ? <BsFillStarFill key={item} /> : <BsStar key={item} />)
              }
            </div>
            <span className="text-[18px] font-medium text-gray">{rating.number}</span>
          </div>
          <div className="flex items-center gap-2 text-gray">
            <BsFillEyeFill className="text-xl" />
            <span className="font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.object
}