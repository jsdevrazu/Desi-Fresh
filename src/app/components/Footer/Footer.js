import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineGlobal, AiOutlineStar } from "react-icons/ai";
import FooterTitle from "./FooterTitle";
import SelectInput from "../Select/Select";
import Faq from "../Faq/Faq";

const options = [
  { value: "bangladesh", label: "Bangladesh - Bangla" },
  { value: "deutschland", label: "Deutschland - English" },
  { value: "derman", label: "German - German" },
];

const FooterBottom = () => {
  return (
    <footer>
      <div className="bg-primary h-full lg:h-16 flex flex-wrap justify-center flex-col">
        <div className="app_container">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center flex-wrap gap-4 py-4 md:py-0">
              <h1 className="flex items-center flex-wrap gap-2 text-white font-semibold">
                <HiOutlineMail />
                Subscribe Our Newsletter
              </h1>
              <button className="px-4 py-2 bg-secondary flex items-center gap-2 text-white rounded-md transition-all duration-300 hover:bg-green-500">
                Sign Me Up
              </button>
            </div>
            <div className="flex flex-wrap items-center md:gap-14 pb-4 md:pb-0 w-full justify-center md:w-fit md:justify-start">
              {/* Social Media */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://react-icons.github.io"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFacebookF size={25} color="white" />
                </a>
                <a
                  href="https://react-icons.github.io"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaTwitter size={25} color="white" />
                </a>
                <a
                  href="https://react-icons.github.io"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaLinkedinIn size={25} color="white" />
                </a>
                <a
                  href="https://react-icons.github.io"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaYoutube size={25} color="white" />
                </a>
                <a
                  href="https://react-icons.github.io"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaInstagram size={25} color="white" />
                </a>
              </div>
              <h1 className="hidden md:flex mt-[-25px] md:mt-[0px] pb-6 md:pb-0 flex-wrap items-center gap-2 text-white font-semibold text-xl">
                <FaMobileAlt size={25} color="white" />
                Mobile Apps
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="app_container">
        <footer className="md:p-10 bg-white footer">
          <div className="max-w-[450px] hidden md:block">
            <h1 className="text-primary font-bold opacity-100 text-xl">
              Desi Fresh -{" "}
              <span className="text-sm">Authentic multicultural groceries</span>
            </h1>
            <p className="text-gray-500">
              Desi Fresh is a one-stop Asian online super market for Indians,
              Bangladeshis, Pakistanis, and Srilankans residing in Germany and
              nearby countries. We are rooted deep in the ‘Desi’ vibe of the
              cuisine and uphold quality, authenticity, and transparency as the
              highest brand values. Our mission is to provide with an extensive
              range of exotic high quality products at an affordable price and
              contribute 2.5% profits towards the education and devevlopment of
              underpriviledged kids through our Desi Hands Mission.
            </p>
            <div className="flex flex-wrap gap-4 items-center mt-10">
              <FaPhoneAlt color="gray" />
              <div>
                <p>Hotline (Mo, -Sa. 8-20 Hrs.)</p>
                <span>(+49)8161-491651</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-4">
              <CiLocationOn color="gray" />
              <div>
                <p>Ganzenmüllerstraße 27 85354</p>
                <span>Freising Germany</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-4">
              <HiOutlineMail color="gray" />
              <div>
                <a href="mailto:support@dfresh.de">support@dfresh.de</a>
              </div>
            </div>
          </div>

          <FooterTitle
            title="KNOW US BETTER"
            data={[
              "About Desi Fresh",
              "Our Story",
              "Meet The Founders",
              "Desi fresh Stores",
              "Quantity & Authenticity",
              "Our Suppliers",
              "Desi Family Card",
              "Desi Hands",
              "Career",
              "Policy",
              "Press",
              "Social Media",
              "Sitemap",
            ]}
          />
          <FooterTitle
            title="OUR SERVICES"
            data={[
              "Customer Service",
              "Contact Us",
              "Payment Methods",
              "Delivery by Pickup or Shipping",
              "Discounts & Offers",
              "Coupons",
              "Return & Refunds",
              "Product Recalls",
              "Faq",
              "Checkout",
              "Covid-19 and Desi Fresh 🦠",
              "Feedback",
            ]}
          />
          <FooterTitle
            title="Business Opportunities"
            data={[
              "Sell on Desi Fresh",
              "Affiliate Sales Program",
              "Become a Supplier",
              "Become a Investor",
              "Discounts & Offers",
              "Accessibility",
              "Advertise With Us",
              "Become a Franchies",
              "Contribute to Blog",
            ]}
          />
        </footer>
        <Faq
          title="Desi Fresh - Authentic multicultural groceries"
          className={`mt-4`}
        />
        <Faq title="FAQ's" />
        <Faq title="Know us better" />
        <Faq title="Our Services" />
        <Faq title="Business Opportunities" />
      </div>
      <div className="app_container mt-10 w-full">
        <div className="flex w-full flex-wrap justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img src="assets/icons/footer/Vector.png" alt="Desi Fresh" />
            <div>
              <h1 className="text-xl font-semibold">
                Help us improve the website?
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <img src="assets/icons/footer/Vector-1.png" alt="Desi Fresh" />
                <img src="assets/icons/footer/Vector-2.png" alt="Desi Fresh" />
                <img src="assets/icons/footer/Vector-3.png" alt="Desi Fresh" />
                <img src="assets/icons/footer/Vector-4.png" alt="Desi Fresh" />
                <img src="assets/icons/footer/Vector-5.png" alt="Desi Fresh" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 border-2 border-whiteGray px-4 rounded-md">
            <AiOutlineGlobal color="black" />
            <SelectInput
              defaultValue={{
                value: "deutschland",
                label: "Deutschland - English",
              }}
              options={options}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] mt-10 w-full py-10 px-4 md:px-0">
        <div className="flex  flex-wrap flex-col justify-center items-center">
          <div className="flex flex-wrap flex-col justify-center items-center">
            <h1 className="text-2xl text-gray-800 font-semibold  relative">
              Delivery Partners
            </h1>
            <div className="flex scrollbar-hide items-center gap-4 overflow-x-auto">
              <img
                src="assets/partner/1.png"
                alt="Desi Fresh"
                className="w-20 h-20 object-contain"
              />
              <img
                src="assets/partner/2.png"
                alt="Desi Fresh"
                className="w-12 h-12 object-contain"
              />
              <img
                src="assets/partner/3.png"
                alt="Desi Fresh"
                className="w-32 h-32 object-contain"
              />
              <img
                src="assets/partner/4.png"
                alt="Desi Fresh"
                className="w-12 h-12 object-contain"
              />
              <img
                src="assets/partner/5.png"
                alt="Desi Fresh"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          <div className="flex flex-wrap flex-col justify-center items-center">
            <h1 className="text-2xl text-gray-800 font-semibold  relative">
              Trust & Safety
            </h1>
            <div className="flex overflow-x-auto items-center gap-4 mt-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-white w-10 h-10 rounded-md flex justify-center items-center">
                  <img src="/assets/icons/google.png" alt="tester" />
                </div>
                <div>
                  <h1 className="text-gray-900 font-bold text-xl">
                    Google Reviews
                  </h1>
                  <h3 className="flex flex-wrap gap-4">
                    <p className="flex flex-wrap items-center gap-2 text-gray-900 font-semibold">
                      4.8 <BsStarFill color="#FDBD12" size={10} />
                      <BsStarFill color="#FDBD12" size={10} />
                      <BsStarFill color="#FDBD12" size={10} />
                      <BsStarFill color="#FDBD12" size={10} />
                      <AiOutlineStar color="#FDBD12" size={10} />
                    </p>
                    <p className="text-white font-semibold">
                      {" "}
                      Rate us on google
                    </p>
                  </h3>
                </div>
              </div>
              <img
                src="assets/icons/Group 7134.png"
                alt="Desi Fresh"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="app_container py-12">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <h1 className="text-2xl text-gray-800 font-semibold  relative">
            Payment Methods
          </h1>
          <img
            src="assets/icons/Payment Methods.png"
            alt="Desi"
            className="mt-6 hidden md:block"
          />
          <img
            src="assets/mobilePayment.png"
            alt="Desi"
            className="mt-6 md:hidden block"
          />
        </div>
      </div>
      <div className="app_container">
        <div className="flex flex-wrap justify-center md:justify-between w-full items-center border-b border-t border-whiteGray py-6">
          <p className="text-center mb-2 md:mb-0">
            © {new Date().getFullYear()} Desi Fresh, All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <p className="cursor-pointer text-[12px] md:text-[16px] font-[700] border-r-2 border-gray-300 pr-2 md:pr-4">
              ABG
            </p>
            <p className="cursor-pointer text-[12px] md:text-[16px] font-[700] border-r-2 border-gray-300 pr-2 md:pr-4">
              Impressum
            </p>
            <p className="cursor-pointer text-[12px] md:text-[16px] font-[700] border-r-2 border-gray-300 pr-2 md:pr-4">
              Data Protection
            </p>
            <p className="cursor-pointer text-[12px] md:text-[16px] font-[700] border-r-2 border-gray-300 pr-2 md:pr-4">
              Legal Notice
            </p>
            <p className="cursor-pointer text-[12px] md:text-[16px] font-[700] ">
              Cookies
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between pb-10 md:pb-6 items-center mt-6 text-center ">
        <h1 className="w-full font-semibold">
          Made with ❤️ for Desi Community
        </h1>
      </div>
    </footer>
  );
};

export default FooterBottom;
