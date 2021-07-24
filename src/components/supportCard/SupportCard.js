import { Link } from "react-router-dom";
import RightCircleIcon from "../../assets/icons/RightCircleIcon";

import "./SupportCard.css";

const SupportCard = ({ icon, title, description }) => {
  return (
    <div className="support-card px-12 py-20">
      <div>{icon}</div>
      <div className="text-17 font-bold my-6">{title}</div>
      <div className="text-15 support-description">{description}</div>
      <div className="mt-12">
        <Link to="/" className="flex items-center text-15 text-habari-blue-300">
          <span className="mr-4 underline">Learn More</span> <RightCircleIcon />
        </Link>
      </div>
    </div>
  );
};

export default SupportCard;
