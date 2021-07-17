import { useState } from "react";
import { Link } from "react-router-dom";

//import components and css
import "./notification.css";
import NotificationList from "./Notification-List/NotificationList";

function Notification() {
   const [Notification, setNotification] = useState(false);

   return (
      <main className="not-container">
         {Notification ? (
            <NotificationList />
         ) : (
            <div className="not-no-notification">
               <img src="" alt="" />
               <h3>
                  You currently have <br /> no Notifications
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
      </main>
   );
}

export default Notification;
