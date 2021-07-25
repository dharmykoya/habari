import { Link } from "react-router-dom";
import RightCircleIcon from "../../assets/icons/RightCircleIcon";

import "./SupportCard.css";

const SupportCard = ({ icon, title, description }) => {
  return (
    <div className="support-card px-12 py-20">
      <div>{icon}</div>
      <div className="text-17 font-bold my-5 lg:h-20 xl:h-auto">{title}</div>
      <div className="text-15 md:h-36 lg:h-56 xl:h-32">{description}</div>
      <div className="mt-2">
        <Link to="/" className="flex items-center text-15 text-habari-blue-300">
          <span className="mr-4 underline">Learn More</span> <RightCircleIcon />
        </Link>
      </div>
    </div>
  );
};

export default SupportCard;
