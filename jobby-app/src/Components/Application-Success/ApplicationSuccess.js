import { Link } from "react-router-dom";

//import components and css
import "./applicationSuccess.css";

function ApplicationSuccess() {
   return (
      <div className="not-container ">
         <div className="not-no-notification as-container">
            <div className="as-inner-div">
               <img src="" alt="" />
               <h3>
                  You application has been <br /> successfully sent
               </h3>
               <div className="not-btn-div">
                  <Link to="/jobsearch">
                     <button className="not-btn">Find job</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ApplicationSuccess;
