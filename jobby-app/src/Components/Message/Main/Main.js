import { useState } from "react";
import { Link } from "react-router-dom";

//import components and css
import "./main.css";

function Main() {
   const [MessagesIsTrue, setMessagesIsTrue] = useState(false);
   return (
      <section>
         {MessagesIsTrue ? (
            <div></div>
         ) : (
            <div>
               <img src="" alt="" />
               <h3>You currently have no messages</h3>
               <Link to="/jobsearch">
                  <button>Find Job</button>
               </Link>
               <button>Post your resume</button>
            </div>
         )}
      </section>
   );
}

export default Main;
