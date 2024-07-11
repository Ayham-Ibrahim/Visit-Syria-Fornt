import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./ContactSection.css";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { TbClockHour3,TbWorldWww  } from "react-icons/tb";
import { BsTelephoneFill } from "react-icons/bs";

const ContactSection = () => {
  return (
    <>
      <div className="container  contact-section">
          <div className="col-1 mobile-view-social">
            <div>
              <FaFacebookF className="social-media-icon" />
            </div>
            <div>
              <FaInstagram className="social-media-icon" />
            </div>
            <div>
              <FaYoutube className="social-media-icon" />
            </div>
            <div>
              <FaXTwitter className="social-media-icon" />
            </div>
          </div>
          <div className="col-7 mobile-view-contact">
            <div className="mobile-view-location-ay">
            <FaLocationDot className="social-media-icon" />
            <div className=""> سوريا ـ اللاذقية - طريق طرطوس</div>
            </div>
            <div className="mobile-view-location-ay">
            <TbWorldWww className="social-media-icon" />
            <div className=""> mbrestor-sy.com</div>
            </div>
            <div className="mobile-view-location-ay">
            <BsTelephoneFill className="social-media-icon " />
            <div className=""> +963-0988 900 800 </div>
            </div>
            <div className="mobile-view-location-ay">
            <IoIosMail className="social-media-icon" />
            <div className="">info@mbrestor-sy.com</div>
            </div>
            <div className="mobile-view-location-ay">
            <TbClockHour3 className="social-media-icon" />
              <div className="">24 / 24</div>
            </div>
          </div>
          <div className="contact-Ay">
          <div className="row  g-0 ">
          <div className="col-4">
            <div className="row">
              <div className="col-3 text-end">
                <FaLocationDot className="social-media-icon" />
              </div>
              <div className="col-9 contact-info"> سوريا ـ اللاذقية - طريق طرطوس</div>
            </div>
          </div>
          <div className="col-4">
            <div className="row align-items-center">
              <div className="col-3 p-0 text-end p-1 ">
              <TbWorldWww className="social-media-icon" />
              </div>
              <div className="col-9 contact-info"> mbrestor-sy.com</div>
            </div>
          </div>
          <div className="col-4  social-media">
            <div className="row" >
              <div className="col-2 text-center">
                <FaFacebookF className="social-media-icon" />
              </div>
              <div className="col-2 text-center">
                <FaInstagram className="social-media-icon" />
              </div>
              <div className="col-2 text-center">
                <FaYoutube className="social-media-icon" />
              </div>
              <div className="col-2 text-center">
                <FaXTwitter className="social-media-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-0">
            <div className="row">
              <div className="col-3 p-0 text-end">
                <BsTelephoneFill className="social-media-icon " />
              </div>
              <div className="col-9  contact-info "> +963-0988 900 800 </div>
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="row">
              <div className="col-3 text-end" style={{padding:0}}>
                <IoIosMail className="social-media-icon" />
              </div>
              <div className="col-9 contact-info">info@mbrestor-sy.com</div>
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="row justify-content-end">
              <div className="col-6 text-end" >
                <TbClockHour3 className="social-media-icon" />
              </div>
              <div className="col-6 contact-info">24 / 24</div>
            </div>
          </div>
        </div>
          </div>
       
      </div>
    </>
  );
};

export default ContactSection;
