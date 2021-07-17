import { useState } from "react";

//import component and css
import "./jobCard.css";
import Dropdown from "../Dropdown/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import { dropDown } from "../JobSearchAnimation";

function JobCard({ handleShowJobDetails }) {
   const [ShowDropdown, setShowDropdown] = useState(false);
   const [ShowJobDetails, setShowJobDetails] = useState(false);

   //function to hide and show job details from job card component
   const handleShow = () => {
      setShowJobDetails((ShowJobDetails) => !ShowJobDetails);
      handleShowJobDetails(ShowJobDetails);
   };

   //function to handle dropdown menu
   const handleClick = (e) => {
      e.stopPropagation();

      setShowDropdown((ShowDropdown) => !ShowDropdown);
      dropDown();

      console.log(dropDown);
   };
   return (
      <article
         className="jc-card"
         onClick={() => {
            handleShow();
         }}
      >
         <div className="jc-card-title">
            <h3>Frontend Developer Home Office (m/w/d)</h3>
            <BsThreeDotsVertical
               // show dropdown menu of threedotsvertical
               onClick={(e) => handleClick(e)}
               className="jc-menu"
            />

            {ShowDropdown && <Dropdown />}
         </div>
         <p>HSH Soft -and Harware Company Ltd</p>
         <p style={{ fontWeight: "700" }}>Berlin, Germany</p>
         <div className="jc-apply-now-active-hire-div">
            <div className="jc-apply-now">
               <img src="" alt="" />
               <p>Apply now directly</p>
            </div>
            <div className="jc-active-hire">
               <img src="" alt="" />
               <p>Actively hiring</p>
            </div>
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
