import { useContext } from "react";
import "./jobHeader.css";
import AppContext from "../../../ContextApi/app-context";

function JobHeader() {
   const { data, jobTitleInput } = useContext(AppContext);
   return (
      <section className="jh-main">
         <h2>{jobTitleInput}</h2>
         <div className="jh-sort-result">
            <p>Sort by: Date posted</p>
            <p>Results: {data.length}</p>
         </div>
      </section>
   );
}

export default JobHeader;
