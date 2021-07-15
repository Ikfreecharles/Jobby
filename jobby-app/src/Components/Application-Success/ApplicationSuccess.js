import { Link } from "react-router-dom";

//import components and css
import "./applicationSuccess.css";

function ApplicationSuccess() {
   return (
      <div>
         <img src="" alt="" />
         <h3>You application has been successfully sent</h3>
         <Link to="/jobsearch">
            <button>Find job</button>
         </Link>
      </div>
   );
}

export default ApplicationSuccess;
