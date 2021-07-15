import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import components and css
import "./nav.css";
import { IoNotifications, IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import ProfileDropdown from "./Profile-Dropdown/ProfileDropdown";

function Nav() {
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
         <div className="n-logo">
            <Link to="/notification n-links">
               {" "}
               <IoNotifications />
            </Link>
            <Link to="/message n-links">
               <MdEmail />
            </Link>
            <IoPerson
               onClick={() => {
                  setShowProfile((ShowProfile) => !ShowProfile);
               }}
               className="n-links"
            />
            {ShowProfile && <ProfileDropdown />}
         </div>
      </section>
   );
}

export default Nav;
