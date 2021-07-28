import { useState, useContext } from "react";
import AppContext from "../../../ContextApi/app-context";

//import component and css
import "./jobCard.css";
import Dropdown from "../Dropdown/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import { dropDown } from "../JobSearchAnimation";

function JobCard({ handleShowJobDetails }) {
   const { data } = useContext(AppContext);

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
   };
   return (
      <div>
         {data.map((item) => {
            return (
               <article
                  className="jc-card"
                  onClick={() => {
                     handleShow();
                  }}
                  key={item.MatchedObjectId}
               >
                  <div className="jc-card-title">
                     <h3>{item.MatchedObjectDescriptor.PositionTitle}</h3>
                     <BsThreeDotsVertical
                        // show dropdown menu of threedotsvertical
                        onClick={(e) => handleClick(e)}
                        className="jc-menu"
                     />

                     {ShowDropdown && <Dropdown />}
                  </div>
                  <p>{item.MatchedObjectDescriptor.OrganizationName}</p>
                  <p style={{ fontWeight: "700" }}>
                     {item.MatchedObjectDescriptor.PositionLocationDisplay}
                  </p>
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
                        {`${item.MatchedObjectDescriptor.QualificationSummary.substring(
                           0,
                           150
                        )}...`}
                     </li>
                  </ul>
                  <div className="jc-date-posted">
                     <img src="" alt="" />
                     <p>{item.MatchedObjectDescriptor.PublicationStartDate}</p>
                  </div>
               </article>
            );
         })}
      </div>
   );
}

export default JobCard;
