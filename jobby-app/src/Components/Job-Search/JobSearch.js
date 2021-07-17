import { useState } from "react";

//import components and css
import "./jobSearch.css";
import FilterForm from "./Filter-Form/FilterForm";
import JobCard from "./Job-Card/JobCard";
import JobDetails from "./Job-Details/JobDetails";
import JobHeader from "./Job-Header/JobHeader";
import JobAlert from "./Job-Alert/JobAlert";
import { slideIn } from "./JobSearchAnimation";

function JobSearch() {
   const [ShowJobDetails, setShowJobDetails] = useState(false);
   const [Alert, setAlert] = useState(true);

   //function to hide and show job details from job card component
   const handleShowJobDetails = (childResp) => {
      setShowJobDetails(childResp);
      slideIn();
   };

   //function to hide job details from job details component
   const handleClick = (childResp) => {
      setShowJobDetails(childResp);
   };

   //function to hide and show job alert form
   const handleAlert = (childResp) => {
      setAlert(childResp);
   };

   return (
      <article className="">
         <section className="js-filterform-outer-container">
            <section className="container js-container">
               <FilterForm />
            </section>
         </section>

         <section className="container js-container js-main-container-outer">
            <JobHeader />
            <section className="js-main row">
               <div className="col-md-6">
                  <JobCard handleShowJobDetails={handleShowJobDetails} />
               </div>
               <div
                  className="col-md-6 js-jobdetails-container"
                  style={{ pointerEvents: !ShowJobDetails && "none" }}
               >
                  {ShowJobDetails && <JobDetails handleClick={handleClick} />}
               </div>
               <div className="js-jobalert-container">
                  {Alert && <JobAlert handleAlert={handleAlert} />}
               </div>
            </section>
         </section>
      </article>
   );
}

export default JobSearch;
