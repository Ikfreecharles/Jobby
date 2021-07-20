import { Link } from "react-router-dom";

//import component and css
import "./signIn.css";
import email from "../../../Images/Icons folders/email.png";
import lock from "../../../Images/Icons folders/lock.png";

function SignIn({ handleSignIn }) {
   const handleFormSubmit = (e) => {
      e.preventDefault();
      handleSignIn(true);
   };
   return (
      <article className="si-outer-div">
         <form>
            <label htmlFor="email">
               Email:
               <div className="si-email">
                  <img src={email} alt="email-icon" />
                  <input
                     type="text"
                     name="email"
                     id="email"
                     placeholder="Enter email address"
                     required
                  />
               </div>
            </label>
            <label htmlFor="password">
               Password:
               <div className="si-password">
                  <img src={lock} alt="password icon" />
                  <input
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Password"
                     required
                  />
               </div>
            </label>
            <Link to="/" className="si-link">
               <button
                  onClick={(e) => {
                     handleFormSubmit(e);
                  }}
               >
                  Sign In
               </button>
            </Link>
         </form>
      </article>
   );
}

export default SignIn;
