import "./jobHeader.css";

function JobHeader() {
   return (
      <section className="jh-main">
         <h2>Java jobs</h2>
         <div className="jh-sort-result">
            <p>Sort by: Date posted</p>
            <p>Result 1-15 of 1489</p>
         </div>
      </section>
   );
}

export default JobHeader;
