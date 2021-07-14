import React, { useState } from "react";
import SignIn from "./Sign-in/SignIn";
import Register from "./Register/Register";

function SignInRegister() {
   const [Option, setOption] = useState("signin");
   const handleClick = (option) => {
      if (option === "signin") {
         setOption("signin");
      } else if (option === "register") {
         setOption("register");
      }
   };
   return (
      <article>
         <div className="sir-inner-container">
            <div className="sir-sign-in-register">
               <p onClick={() => handleClick("signin")}>Sign In</p>
               <p onClick={() => handleClick("register")}>Register</p>
            </div>
            <div className="sir-logo">
               <img src="" alt="" />
            </div>
            {Option === "signin" && <SignIn />}
            {Option === "register" && <Register />}
         </div>
      </article>
   );
}

export default SignInRegister;
