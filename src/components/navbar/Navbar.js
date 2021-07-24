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
      <div className="flex justify-end mr-4 mt-4 nav-link-toggle md:hidden">
        <Menu handleClick={toggleNavbar} />
      </div>
      <nav
        className={classNames(
          openNavbar ? "nav-items-show mt-6" : "nav-items",
          "mx-4"
        )}
      >
        <div className="text-text-14 text-habari-black md-flex">
          <div className="my-4">Products</div>
          <div className="my-4">Pricing</div>
          <div className="my-4">Support</div>
          <div className="my-4">Documentation</div>
          <div className="my-4">Login</div>
          <div className="my-4">Create Account</div>
          <div className="my-4 flex">
            <img src={flag} alt="flag" />
            <ArrowDownIcon width="15" height="15" fill="#2D4875" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
