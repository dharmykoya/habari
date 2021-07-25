import PropTypes from "prop-types";

const Button = ({ buttonText, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-habari-green text-white text-text-14 font-bold px-10 py-7 rounded-lg"
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
