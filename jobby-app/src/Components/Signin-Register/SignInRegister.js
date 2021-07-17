import React, { useState } from "react";

//import css, components and images
import "./signInRegister.css";
import SignIn from "./Sign-in/SignIn";
import Register from "./Register/Register";
import Jobby from "../../Images/Jobby.png";
import AdobeStock_269986305 from "../../Images/AdobeStock_269986305.jpeg";

function SignInRegister({ handleSignIn }) {
   const [Option, setOption] = useState("signin");
   const handleClick = (option) => {
      if (option === "signin") {
         setOption("signin");
      } else if (option === "register") {
         setOption("register");
      }
   };

   return (
      <article
         className="sir-outer-container"
         style={{
            backgroundImage:
               Option === "signin" &&
               `linear-gradient(180deg,rgba(255, 255, 255, 0.23853291316526615) 26%,rgba(0, 30, 88, 0.5970763305322129) 63%),url(${AdobeStock_269986305})`,
            transition: "all 0.3s ease-in-out",
         }}
      >
         <div className="sir-inner-container">
            <div className="sir-sign-in-register">
               <p
                  onClick={() => handleClick("signin")}
                  className={Option === "signin" && "active"}
               >
                  Sign In
               </p>
               <p
                  onClick={() => handleClick("register")}
                  className={Option === "register" && "active"}
               >
                  Register
               </p>
            </div>
            <div className="sir-logo">
               <img src={Jobby} alt="logo" />
            </div>
            {Option === "signin" && <SignIn handleSignIn={handleSignIn} />}
            {Option === "register" && <Register />}
         </div>
      </article>
   );
}

export default SignInRegister;
