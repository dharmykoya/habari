import { useState } from "react";
import ArrowDownIcon from "../../assests/icons/ArrowDownIcon";
import flag from "../../assests/images/navbar/Flag.png";
import Menu from "../../components/menu/Menu";
import "./Navbar.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };
  return (
    <header>
      <div className="flex justify-end">
        <Menu handleClick={toggleNavbar} />
      </div>
      <nav
        className={classNames(openNavbar ? "nav-items-show mt-6" : "nav-items")}
      >
        <div>
          <div>Products</div>
          <div>Pricing</div>
          <div>Support</div>
          <div>Documentation</div>
          <div>Login</div>
          <div>Create Account</div>
          <div>
            <img src={flag} alt="flag" />
            <ArrowDownIcon width="15" height="15" fill="#2D4875" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
