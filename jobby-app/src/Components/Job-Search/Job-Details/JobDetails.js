import "./jobDetails.css";

function JobDetails({ handleClick }) {
   return (
      <article className="jd-card">
         <div className="jd-card-title">
            <h3>Frontend Developer Home Office (m/w/d)</h3>
            <img
               src=""
               alt="close"
               onClick={() => {
                  handleClick(false);
               }}
            />
         </div>
         <div className="jc-apply-now">
            <img src="" alt="" />
            <p>Apply now directly</p>
         </div>
         <div className="jc-active-hire">
            <img src="" alt="" />
            <p>Actively hiring</p>
         </div>
         <p>HSH Soft -and Harware Company Ltd</p>
         <p>Berlin, Germany</p>
         <div className="jd-btn-div">
            <button className="jd-btn">Apply now</button>
            <button className="jd-fav-btn">
               <img src="" alt="" />
            </button>
         </div>
         <p>
            At HSH Soft -and Hardware Company, we develop IT solutions that
            intelligently and effectively improve workflows and business
            processes. The satisfaction of our customers and partners is just as
            important at HSH Soft -and Harware Company Ltd as the well-being of
            our employees. As a medium-sized service company, we are proud of
            our flat hierarchy, flexible working conditions and our respectful
            and familiar atmosphere. This is the basis of our efficiency, with
            which we have been successful in the market for many years.
            https://www.HSHSoft-andHarwareCompanyLtd.de
         </p>
         <h4>What we're looking for</h4>
         <p>
            You will work in agile and classic processes and interdisciplinary
            project teams, consisting of 5-15 people, on our projects from start
            to finish. The focus here is on the new and further development of
            our Java applications and above all on our mission to advance the
            digital transformation of the public sector.
         </p>
         <h4>Your Position</h4>
         <p>
            You work on modern front ends Further development of back-ends with
            sophisticated technical logic Participation in specific projects in
            agile and classic project teams from the start Conception and
            development of customer-specific solutions based on Java using
            modern frameworks Design, conception, development, implementation of
            system and integration tests Working on multi-faceted customer
            projects or products with the greatest possible scope for design
            Independent work
         </p>
         <h4>Our Technologies</h4>
         <p>
            Java SE and Java frameworks Jump Web services (e.g. RESTful, SOAP)
            Relational DBMS Web technologies (e.g. HTML, JSP, CSS, JS, SmartGWT,
            Angular) Build management tools (e.g. MAVEN) Version management
            (e.g. GIT) CI (e.g. Jenkins) JSF, Liferay, PHP and Zend
         </p>
         <h4>Your Contact Person</h4>
         <p>
            Meike Bodemann, HR Manager / Management Assistant European IT
            Consultancy EITCO GmbH Fon +49 (228) 338 881 150
         </p>
         <h4>Location</h4>
         <p>
            Berlin , Potsdamer Platz 10, 10785 Berlin Bonn , Am Bonner Bogen 6,
            53227 Bonn
         </p>
         <p>Posted: 4 days ago</p>
         <button>
            <img src="" alt="" />
            <p>Report Job</p>
         </button>
      </article>
   );
}

export default JobDetails;
