import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import components and css
import "./nav.css";
import { IoNotifications, IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import ProfileDropdown from "./Profile-Dropdown/ProfileDropdown";

function Nav({ SignInIsTrue, handleSignIn }) {
   const [ShowProfile, setShowProfile] = useState(false);

   useEffect(() => {
      setShowProfile(false);
      return () => {
         setShowProfile(false);
      };
   }, []);
   return (
      <section className="container n-container">
         <div className="n-logo">
            <img src="" alt="" />
         </div>
         <div className="n-menu">
            <ul>
               <Link to="/jobsearch" className="n-jobsearch">
                  <li>Job Search</li>
               </Link>
               <li>For Companies</li>
            </ul>
         </div>
         {SignInIsTrue ? (
            <div className="n-icons">
               <Link to="/notification" className="n-links">
                  {" "}
                  <IoNotifications />
               </Link>
               <Link to="/message" className="n-links">
                  <MdEmail />
               </Link>
               <IoPerson
                  onClick={() => {
                     setShowProfile((ShowProfile) => !ShowProfile);
                  }}
                  className="n-links"
               />
               {ShowProfile && <ProfileDropdown handleSignIn={handleSignIn} />}
            </div>
         ) : (
            <Link to="/signin">
               <div>
                  <span>SignIn</span>
                  <span>/</span>
                  <span>Register</span>
               </div>
            </Link>
         )}
      </section>
   );
}

export default Nav;