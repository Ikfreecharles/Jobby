import { useState } from "react";
import { Link } from "react-router-dom";

//import components and css
import "./notification.css";
import NotificationList from "./Notification-List/NotificationList";

function Notification() {
   const [Notification, setNotification] = useState(false);

   return (
      <main className="n-container">
         {Notification ? (
            <NotificationList />
         ) : (
            <div className="n-no-notification">
               <img src="" alt="" />
               <h3>You have no Notifications</h3>
               <Link to="/jobsearch">
                  <button>Find Job</button>
               </Link>
               <button>Post your Resume</button>
            </div>
         )}
      </main>
   );
}

export default Notification;
