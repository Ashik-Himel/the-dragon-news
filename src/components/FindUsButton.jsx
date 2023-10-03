import PropTypes from "prop-types";

const FindUsButton = ({href, image, text}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 px-4 py-3 border-b border-[#E7E7E7]">
      <div className="bg-[#F3F3F3] p-3 w-[50px] rounded-full">
        <img src={image} alt={`${text} Icon`} />
      </div>
      <span className="text-gray font-medium">{text}</span>
    </a>
  );
};

export default FindUsButton;

FindUsButton.propTypes = {
  href: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string
}