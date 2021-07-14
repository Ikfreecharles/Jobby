import { useState } from "react";

//import components and css
import "./jobSearch.css";
import FilterForm from "./Filter-Form/FilterForm";
import JobCard from "./Job-Card/JobCard";
import JobDetails from "./Job-Details/JobDetails";
import JobHeader from "./Job-Header/JobHeader";
import JobAlert from "./Job-Alert/JobAlert";

function JobSearch() {
   const [ShowIsTrue, setShowIsTrue] = useState(false);
   const [Alert, setAlert] = useState(true);
   const handleClick = (childResp) => {
      setShowIsTrue(childResp);
   };
   const handleAlert = (childResp) => {
      setAlert(childResp);
   };
   return (
      <article className="container">
         <FilterForm />
         <JobHeader />

         <section className="js-main row">
            <div
               onClick={() => setShowIsTrue((ShowIsTrue) => !ShowIsTrue)}
               className="col-md-5"
            >
               <JobCard />
            </div>
            <div className="col-md-7">
               {ShowIsTrue && <JobDetails handleClick={handleClick} />}
            </div>
         </section>

         {Alert && <JobAlert handleAlert={handleAlert} />}
      </article>
   );
}

export default JobSearch;
