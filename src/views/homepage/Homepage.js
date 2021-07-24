import CheckIcon from "../../assests/icons/CheckIcon";
import Navbar from "../../components/navbar/Navbar";
import "./Homepage.css";

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

        <section className="mt-20">
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
            <div className="text-habari-gray">
              Fees range between 0.10-2.4NGN (+ additional fees based on % of
              transaction value). More pricing details per payment method here.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
