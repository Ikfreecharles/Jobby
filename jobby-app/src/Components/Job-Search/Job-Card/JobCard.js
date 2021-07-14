import { useState } from "react";

//import component and css
import "./jobCard.css";
import Dropdown from "../Dropdown/Dropdown";

function JobCard() {
   const [ShowIsTrue, setShowIsTrue] = useState(false);

   return (
      <article className="jc-card">
         <div className="jc-card-title">
            <h3>Frontend Developer Home Office (m/w/d)</h3>
            <img
               src=""
               alt="hamburger-menu"
               onClick={() => setShowIsTrue((ShowIsTrue) => !ShowIsTrue)}
            />
            {ShowIsTrue && <Dropdown />}
         </div>
         <p>HSH Soft -and Harware Company Ltd</p>
         <p>Berlin, Germany</p>
         <div className="jc-apply-now">
            <img src="" alt="" />
            <p>Apply now directly</p>
         </div>
         <div className="jc-active-hire">
            <img src="" alt="" />
            <p>Actively hiring</p>
         </div>
         <ul>
            <li>
               We’re searching for our company a javascript developer for
               full-time employment
            </li>
            <li>Ideally should be able to work for 3 days on side.</li>
         </ul>
         <div className="jc-date-posted">
            <img src="" alt="" />
            <p>4 days ago</p>
         </div>
      </article>
   );
}

export default JobCard;
