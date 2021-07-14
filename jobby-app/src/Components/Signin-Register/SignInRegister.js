import React from "react";
import SignIn from "./Sign-in/SignIn";
import Register from "./Register/Register";

function SignInRegister() {
   return (
      <article>
         <div className="sir-inner-container">
            <div className="sir-sign-in-register">
               <p>Sign In</p>
               <p>Register</p>
            </div>
            <div className="sir-logo">
               <img src="" alt="" />
            </div>
            <SignIn />
            <Register />
         </div>
      </article>
   );
}

export default SignInRegister;
