import "./Menu.css";
const Menu = ({ handleClick }) => {
  return (
    <div onClick={handleClick} data-testid="menu">
      <div className="menu-icon"></div>
      <div className="menu-icon"></div>
      <div className="menu-icon"></div>
    </div>
  );
};

export default Menu;
