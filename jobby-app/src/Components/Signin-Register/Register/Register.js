import "./register.css";
import google from "../../../Images/google.png";
import gmail from "../../../Images/gmail.png";
import linkedin from "../../../Images/linkedin.png";



function Register() {
   return (
      <section className="r-outer-div">
         <button className="r-btn r-btn-1">
            <img src={google} alt="google icon"/>
            <p>Sign up with Google</p>
         </button>
         <button className="r-btn">
            <img src={linkedin} alt="linkedin icon"/>
            <p>Sign up with LinkedIn</p>
         </button>
         <button className="r-btn r-btn-3">
            <img src={gmail} alt="gmail icon"/>
            <p>Sign up with Email</p>
         </button>
      </section>
   );
}

export default Register;
