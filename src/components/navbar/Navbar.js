import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";
import flag from "../../assets/images/navbar/Flag.png";
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
    <header className="mx-auto">
      <div className="mr-4 mt-4 nav-link-toggle">
        <Menu handleClick={toggleNavbar} />
      </div>
      <nav
        className={classNames(
          openNavbar ? "nav-items-show mt-6" : "nav-items",
          "mx-4"
        )}
      >
        <div className="text-text-14 text-habari-black md:flex justify-end items-center mx-auto md:w-4/5 py-4">
          <Link to="/" className="my-4 mx-5">
            Products
          </Link>
          <Link to="/" className="my-4 mx-5">
            Pricing
          </Link>
          <Link to="/" className="my-4 mx-5">
            Support
          </Link>
          <Link to="/" className="my-4 mx-5">
            Documentation
          </Link>
          <Link to="/" className="my-4 mx-5">
            Login
          </Link>
          <Link to="/" className="my-4 mx-5">
            Create Account
          </Link>
          <Link
            to="/"
            className="my-4 pl-5 flex items-center md:border-l border-habari-border"
          >
            <img src={flag} alt="flag" className="mr-4" />
            <ArrowDownIcon width="15" height="15" fill="#2D4875" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
