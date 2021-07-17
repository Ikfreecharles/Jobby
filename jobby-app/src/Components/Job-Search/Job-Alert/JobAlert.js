//import components and css
import "./jobAlert.css";
import { IoIosClose } from "react-icons/io";

function JobAlert({ handleAlert }) {
   return (
      <article className="ja-container">
         <div className="ja-title">
            <IoIosClose
               onClick={() => {
                  handleAlert(false);
               }}
               className="ja-close"
            />{" "}
            <h6>
               Receive free job alert for this search preference in your email
            </h6>
         </div>
         <div className="line"></div>
         <div className="ja-input">
            <form className="ja-form">
               <input type="text" placeholder="Enter your email address" />
               <button className="ja-btn">Activate</button>
            </form>
            <p style={{ marginTop: "1rem" }}>
               With the activation of a job email, you accept out terms and
               conditions. You can revoke your decision at any time so that you
               can cancel the job alerts at any time.
            </p>
         </div>
      </article>
   );
}

export default JobAlert;
