import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import components and css
import "./nav.css";
import "./navMediaquery.css";
import { IoNotifications, IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import ProfileDropdown from "./Profile-Dropdown/ProfileDropdown";
import Jobby from "../../Images/Jobby.png";

function Nav({ SignInIsTrue, handleSignIn }) {
  const [ShowProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setShowProfile(false);
    return () => {
      setShowProfile(false);
    };
  }, []);
  return (
    <section className="n-container">
       <div className="n-container-2">
       <div className="n-logo">
        <img src={Jobby} alt="logo"/>
      </div>
     
      <div className="n-menu">
        <ul>
          <Link to="/" className="n-jobsearch">
            <li>Home</li>
          </Link>

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
 <span class="material-icons">menu</span>
       </div>
     
    </section>
  );
}

export default Nav;
