import "./Menu.css";
const Menu = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      <div className="menu-icon"></div>
      <div className="menu-icon"></div>
      <div className="menu-icon"></div>
    </div>
  );
};

export default Menu;
