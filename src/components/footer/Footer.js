import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";
import flag from "../../assets/images/navbar/Flag.png";

const Footer = () => {
  return (
    <footer className="mx-auto py-6">
      <nav className="mx-4">
        <div className="text-text-14 text-habari-black grid grid-cols-2 md:flex justify-center lg:justify-end lg:mx-auto items-center lg:w-4/5 ">
          <div className="my-4 mx-5">Products</div>
          <div className="my-4 mx-5">Pricing</div>
          <div className="my-4 mx-5">Support</div>
          <div className="my-4 mx-5">Documentation</div>
          <div className="my-4 mx-5">Login</div>
          <div className="my-4 mx-5">Create Account</div>
          <div className="my-4 pl-5 flex items-center md:border-l border-habari-border">
            <img src={flag} alt="flag" className="mr-4" />
            <ArrowDownIcon width="15" height="15" fill="#2D4875" />
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
