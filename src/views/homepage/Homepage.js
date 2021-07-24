import { Link } from "react-router-dom";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import CheckIcon from "../../assets/icons/CheckIcon";
import Navbar from "../../components/navbar/Navbar";
import card from "../../assets/images/homepage/card.png";
import blackwoman from "../../assets/images/homepage/blackbusinessowner.png";
import "./Homepage.css";
import TickSquareIcon from "../../assets/icons/TickSquareIcon";
import SupportCard from "../../components/supportCard/SupportCard";
import WorldIcon from "../../assets/icons/WorldIcon";
import SalesMan from "../../assets/icons/SalesMan";
import MoneyIcon from "../../assets/icons/MoneyIcon";

const solutions = [
  "Debit and Credit Cards",
  "USSD",
  "Bank Account",
  "Soft POS",
  "Bank Transfer",
  "Mobile Money",
];

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="md:w-4/5 mx-auto">
        <section className="md:pt-56 border-t border-b border-habari-border py-4">
          <div className="md:w-4/6 lg:w-2/4">
            <div className="text-habari-black banner-text">
              A faster & easier way to receive{" "}
              <span className="banner-span px-2">payments</span> online.
            </div>
            <div className="mt-16 text-17 text-habari-black">
              Scuad builds innovative pathways to enable all types of businesses
              and individuals from around the world make and receive payments
              smarter and simpler
            </div>
            <div className="mt-24 mb-32">
              <button className="bg-habari-green text-white text-text-14 font-bold px-10 py-7 rounded-lg">
                Create an Account
              </button>
            </div>
          </div>
        </section>

        <section className="mt-20 mb-20">
          <div>
            <div className="grid grid-cols-3 gap-32 text-17">
              <div className="flex">
                <div className="mr-8 pt-2">
                  <CheckIcon />
                </div>
                <div className="text-habari-gray font-medium">
                  <span className="text-habari-black-100">Quick setup.</span>{" "}
                  Begin accepting payments in 15 minutes.
                </div>
              </div>
              <div className="flex">
                <div className="mr-8 pt-2">
                  <CheckIcon />
                </div>
                <div className="text-habari-gray font-medium">
                  <span className="text-habari-black-100">Honest pricing.</span>{" "}
                  Only pay for successful transactions.
                </div>
              </div>
              <div className="flex">
                <div className="mr-8 pt-2">
                  <CheckIcon />
                </div>
                <div className="text-habari-gray font-medium">
                  <span className="text-habari-black-100">
                    All leading payment methods.
                  </span>{" "}
                  The best localised experience.
                </div>
              </div>
            </div>
            <div className="text-habari-gray text-14 text-center my-24 font-medium">
              Fees range between 0.10-2.4NGN (+ additional fees based on % of
              transaction value). More pricing details per payment method here.
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="grid grid-cols-2 gap-32 text-17">
            <div>
              <div className="text-17 text-habari-blue bg-habari-blue-100 w-min border-b-2 px-2 border-habari-blue-200">
                Features
              </div>
              <h3 className="text-32 text-habari-black font-bold mt-8 mb-10">
                Create Payment Requests
              </h3>
              <p className="text-17 text-habari-black mb-20 leading-10">
                Make a simple payment link in 5 seconds. Use our powerful
                features to customize your request
              </p>
              <Link to="/" className="flex items-center text-habari-blue-300">
                <span className="mr-4 underline">Learn More</span>{" "}
                <ArrowRightIcon />
              </Link>
            </div>
            <div>
              <img src={card} alt="card" />
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="grid grid-cols-2 gap-32 text-17">
            <div>
              <img src={blackwoman} alt="card" />
            </div>
            <div>
              <div className="text-17 text-habari-orange bg-habari-orange-100 w-min border-b-2 px-2 border-habari-orange-200">
                Solutions
              </div>
              <h3 className="text-32 text-habari-black font-bold mt-8 mb-10 line-height">
                Better payments, unlimited opportunities
              </h3>
              <p className="text-17 text-habari-black mb-16 leading-10">
                Get faster, more reliable transactions. Higher conversions.
                Unbeatable insight and flexibility. So you can delight your
                customers and unlock new revenue streams.
              </p>
              <div>
                <div className="grid grid-cols-2 text-17">
                  {solutions?.map((soln, index) => (
                    <div key={index + 1} className="flex my-4 items-center">
                      <div className="mr-6">
                        <TickSquareIcon />
                      </div>
                      <div className="text-15">{soln}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-20">
                <Link to="/" className="flex items-center text-habari-blue-300">
                  <span className="mr-4 underline">Create a free account</span>{" "}
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="">
            <div className="md:w-3/5">
              <div className="text-17 text-habari-blue-400 bg-habari-blue-500 w-min border-b-2 px-2 border-habari-blue-600">
                Support
              </div>
              <h3 className="text-32 text-habari-black font-bold mt-8 mb-10 line-height">
                Trusted by businesses all over Africa
              </h3>
              <p className="text-17 text-habari-black mb-16 leading-10">
                Our platform provides a resource of scalable and reliable
                technology optimized to drive growth in new markets and dominate
                in older ones.
              </p>
            </div>

            <div className="grid grid-cols-3 mt-32">
              <SupportCard
                icon={<WorldIcon />}
                title="Scuad for Global Brands"
                description="We help global brands accept payments from across Africa."
              />
              <SupportCard
                icon={<SalesMan />}
                title="Scuad for Entrepreneurs"
                description="From startup to scale-up, we can support you at every stage of your businesses’ growth."
              />
              <SupportCard
                icon={<MoneyIcon />}
                title="Scuad for Large Organizations"
                description="Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely."
              />
            </div>
          </div>
        </section>

        <section className="pb-64 border-b border-habari-border ">
          <div className="flex">
            <div className="md:w-3/5">
              <div className="text-17 text-habari-green bg-habari-green-100 max-w-xs ready-trial border-b-2 px-2 border-habari-green-200">
                Ready for a trial ?
              </div>
              <h3 className="text-64 text-habari-black font-bold mt-8 mb-10">
                Start accepting{" "}
                <span className="banner-span px-2">payments</span> in minutes
              </h3>
            </div>
            <div className="my-auto ml-auto">
              <button className="bg-habari-green text-white text-text-14 font-bold px-10 py-7 rounded-lg">
                Create a free Account
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="my-4">
        <Navbar />
      </div>
    </div>
  );
};

export default Homepage;
