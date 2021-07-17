import { useState } from "react";
import { Link } from "react-router-dom";

//import components and css
import "./main.css";

function Main() {
   const [MessagesIsTrue, setMessagesIsTrue] = useState(false);
   return (
      <section className="not-container main-container">
         {MessagesIsTrue ? (
            <div></div>
         ) : (
            <div className="not-no-notification">
               <img src="" alt="" />
               <h3>
                  You currently have <br /> no messages
               </h3>
               <div className="not-btn-div">
                  <Link to="/jobsearch">
                     <button className="not-btn">Find Job</button>
                  </Link>
               </div>
               <div className="not-btn-div">
                  <button className="not-btn not-resume-btn">
                     Post your Resume
                  </button>
               </div>
            </div>
         )}
      </section>
   );
}

export default Main;
