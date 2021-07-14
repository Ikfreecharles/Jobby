//import components and css
import "./jobAlert.css";

function JobAlert({ handleAlert }) {
   return (
      <article className="ja-container">
         <div className="ja-title">
            <h6>
               Receive free job alert for this search preference in your email
            </h6>
            <img
               src=""
               alt="close"
               onClick={() => {
                  handleAlert(false);
               }}
            />
         </div>
         <form>
            <input type="text" placeholder="Enter your email address" />
            <button>Activate</button>
         </form>
         <p>
            With the activation of a job email, you accept out terms and
            conditions. You can revoke your decision at any time so that you can
            cancel the job alerts at any time.
         </p>
      </article>
   );
}

export default JobAlert;
