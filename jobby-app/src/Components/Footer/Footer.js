//import components and css
import "./footer.css";
import { BsArrowRightShort } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";

function Footer() {
   return (
      <section className="f-footer-container">
         <div className="container-fluid f-container-fluid">
            <div className="row f-row g-4">
               <div className="f-job-alert-div col-md-4">
                  <h3>Subscribe to recieve Job alerts</h3>
                  <form className="f-form">
                     <input
                        type="email"
                        placeholder="Enter your email address"
                        name="jobEmail"
                        id="jobEmail"
                     />
                     <button className="f-btn">
                        <BsArrowRightShort className="f-btn-icon" />
                     </button>
                  </form>
               </div>
               <div className="col-md-1"></div>
               <div className="f-rightside col-md-7 row g-4">
                  <div className="f-aboutus col-sm-4">
                     <h6>About us</h6>
                     <div className="f-line"></div>
                     <ul>
                        <li>Careers</li>
                        <li>FAQ</li>
                        <li>Legal Notice</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Declaration</li>
                        <li>Term of Service</li>
                     </ul>
                  </div>
                  <div className="f-community col-sm-4">
                     <h6>Community</h6>
                     <div className="f-line"></div>
                     <ul>
                        <li>Blog</li>
                        <li>Conference</li>
                        <li>Customer Support</li>
                     </ul>
                  </div>
                  <div className="f-socialmedia col-md-4">
                     <h6>Find us on social media</h6>
                     <div className="f-line"></div>
                     <ul>
                        <li>
                           <div className="f-icon">
                              <IoLogoTwitter className="f-sm-icon" />
                           </div>
                           Twitter
                        </li>
                        <li>
                           <div className="f-icon">
                              <ImFacebook className="f-sm-icon" />
                           </div>
                           Facebook
                        </li>
                        <li>
                           <div className="f-icon">
                              <FaLinkedinIn className="f-sm-icon" />
                           </div>
                           LinkedIn
                        </li>
                        <li>
                           <div className="f-icon">
                              <FaGithub className="f-sm-icon" />
                           </div>
                           Github
                        </li>
                        <li>
                           <div className="f-icon">
                              <RiInstagramFill className="f-sm-icon" />
                           </div>
                           Instagram
                        </li>
                        <li>
                           <div className="f-icon">
                              <AiFillYoutube className="f-sm-icon" />
                           </div>
                           Youtube
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Footer;
