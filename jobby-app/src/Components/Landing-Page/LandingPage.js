import { useRef, useContext } from "react";
import AppContext from "../../ContextApi/app-context";

//import components and css
import "./landingPage.css";
import "./landingPageMediaquery.css";

//images for listed company's logos
import Companyone from "../../Images/companies logo/Companyone.png";
import Companytwo from "../../Images/companies logo/Companytwo.png";
import Companythree from "../../Images/companies logo/Companythree.png";
import Companyfour from "../../Images/companies logo/Companyfour.png";
import Companyfive from "../../Images/companies logo/Companyfive.png";
import Companysix from "../../Images/companies logo/Companysix.png";
import Companyseven from "../../Images/companies logo/Companyseven.png";
import Companyeight from "../../Images/companies logo/Companyeight.png";
import Companynine from "../../Images/companies logo/Companynine.png";
import Companyten from "../../Images/companies logo/Companyten.png";

//Icons for steps in getting a job
import createprofile from "../../Images/Icons folders/Section Icons/createProfile.png";
import jobinterview from "../../Images/Icons folders/Section Icons/jobinterview.png";
import getOffer from "../../Images/Icons folders/Section Icons/getOffer.png";
import Hired from "../../Images/Icons folders/Section Icons/Hired.png";
import getjob from "../../Images/Section Images/getjob.jpg";

//Icons for Why Use Jobby.
import location from "../../Images/Icons folders/Section Icons/location.png";
import Engineering from "../../Images/Icons folders/Section Icons/Engineering.png";
import ChooseJob from "../../Images/Icons folders/Section Icons/ChooseJob.png";
import TechStack from "../../Images/Icons folders/Section Icons/TechStack.png";

//Free Carrer Support image.
import careersupport from "../../Images/Section Images/careersupport.jpg";

//import container images
import bg1 from "../../Images/bg1.jpeg";
import bg2 from "../../Images/bg2.jpeg";
import bg3 from "../../Images/bg3.jpeg";
import bg4 from "../../Images/bg4.jpeg";

function LandingPage() {
   const imgRef = useRef();
   const { jobTitleInput, setjobTitleInput, handleSubmit } =
      useContext(AppContext);

   /* const imgArray = [bg1, bg2, bg3, bg4];
   

   const changeImage = () => {
      let index = 0;
      imgRef.current.style.backgroundImage = `url(${imgArray[index]})`;
      console.log(imgRef.current);
      index++;
      if (index >= imgArray.length) {
         index = 0;
      }
   };
   setInterval(changeImage, 5000); */

   return (
      <main className="lp-outer-Div">
         <section className="bg-image-container" ref={imgRef}>
            <div className="lp-items-container">
               <h1>Jobby is Europe's Job search platform for student.</h1>
               <form className="lp-input-container" onSubmit={handleSubmit}>
                  <label htmlFor="what-job">
                     What:
                     <input
                        type="text"
                        name="job-search"
                        id="what-job"
                        placeholder="Job title"
                        onChange={(e) => setjobTitleInput(e.target.value)}
                        value={jobTitleInput}
                        required
                     />
                  </label>
                  <label htmlFor="where-job">
                     Where:
                     <input
                        type="text"
                        name="job-search"
                        id="where-job"
                        placeholder="Job location:"
                     />
                  </label>
                  <button>Find Job</button>
               </form>
            </div>
         </section>
         <h2 className="lp-heading"> Companies that hires through us</h2>
         <section className="companies-logos">
            <div className="C-I">
               <img src={Companyone} alt="C-icon" />
            </div>
            <div className="C-I">
               <img src={Companytwo} alt="C-icon" />
            </div>
            <div className="C-I">
               <img src={Companythree} alt="C-icon" />
            </div>
            <div className="C-I">
               <img src={Companyfour} alt="C-icon" />
            </div>
            <div className="C-I">
               <img src={Companyfive} alt="C-icon" />
            </div>
            <div className="C-I">
               <img src={Companysix} alt="C-icon" />
            </div>
            <div className="C-I">
               <img src={Companyseven} alt="C-icon" />
            </div>
            <div className="C-I">
               <img src={Companyeight} alt="C-icon" />
            </div>
            <div className="C-I">
               <img src={Companynine} alt="C-icon" />
            </div>
            <div className="C-I">
               <img src={Companyten} alt="C-icon" />
            </div>
         </section>

         <h3 className="lp-steps-heading">Get a job in easy Steps</h3>

         <section className="icon-image-container row">
            <div className="Profile-icons col-lg-6">
               <div className="container-one lp-Main-Container">
                  <div className="bg-profile-one">
                     <img
                        src={createprofile}
                        alt="Create profile"
                        className="icon-one"
                     />
                  </div>
                  <div>
                     <h6>Create a Profile</h6>
                     <p>
                        It's your chance to tell us what you want in your next
                        role-and it takes less than five minutes.
                     </p>
                  </div>
               </div>
               <div className="container-two lp-Main-Container">
                  <div className="bg-profile-one">
                     <img
                        src={jobinterview}
                        alt="Interview"
                        className="icon-two"
                     />
                  </div>
                  <div>
                     <h6>Complete Our Screening</h6>
                     <p>
                        Pass our screening and take an optional call with your
                        talent sucess Advisor, who postions you to receive the
                        best offer.
                     </p>
                  </div>
               </div>

               <div className="container-three lp-Main-Container">
                  <div className="bg-profile-one">
                     <img
                        src={getOffer}
                        alt="Get profile"
                        className="icon-three"
                     />
                  </div>
                  <div>
                     <h6>Become Visible and get Offer</h6>
                     <p>
                        Become visible on Jobby so that companies can find your
                        profile and make you offers and tech startup front
                     </p>
                  </div>
               </div>

               <div className="container-four lp-Main-Container">
                  <div className="bg-profile-one">
                     <img src={Hired} alt="Get profile" className="icon-four" />
                  </div>
                  <div>
                     <h6>Get Hired</h6>
                     <p>Interview with companies that interests you.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-1"> </div>
            <div className="getjob-img col-lg-5">
               <img src={getjob} alt="get job" />
            </div>
         </section>

         <div className="bg-pattern">
            <section className="why-Use">
               <h5>Why Use Jobby</h5>
            </section>

            <section className="icon-image-container-two">
               <div className="Profile-icons-B">
                  <div className="container-one-B lp-container-two">
                     <div className="bg-profile-one">
                        <img
                           src={location}
                           alt="Choose Location"
                           className="icon-one"
                        />
                     </div>
                     <div>
                        <h6>Choose the location that suits you.</h6>
                        <p>
                           Jobby operates in Europe most exciting tech cities.
                           Set your location preferences and company apply to
                           you
                        </p>
                        <span className="lp-C-one"> Sign up now &#8594;</span>
                     </div>
                  </div>

                  <div className="container-two-B lp-container-two">
                     <div className="bg-profile-one">
                        <img
                           src={Engineering}
                           alt="Choose Location"
                           className="icon-one"
                        />
                     </div>
                     <div>
                        <h6>Join the Engineering team in your Ideal Role</h6>
                        <p>
                           Over 1000 companies are hiring Software developers.
                           DevOps engineers and Engineering leaders just like
                           you!
                        </p>
                        <span className="lp-C-one"> Sign up now &#8594;</span>
                     </div>
                  </div>

                  <div className="container-three-B lp-container-two">
                     <div className="bg-profile-one">
                        <img
                           src={ChooseJob}
                           alt="Choose Location"
                           className="icon-one"
                        />
                     </div>
                     <div>
                        <h6>Choose a Job You Love</h6>
                        <p>
                           On Jobby, you can choose from an array and variety of
                           job listed following a listing tailored based on your
                           preference.
                        </p>
                        <span className="lp-C-one"> Sign up now &#8594;</span>
                     </div>
                  </div>

                  <div className="container-four-B lp-container-two">
                     <div className="bg-profile-one">
                        <img
                           src={TechStack}
                           alt="Choose Location"
                           className="icon-one"
                        />
                     </div>
                     <div>
                        <h6>Work with a Tech Stack You Love</h6>
                        <p>
                           Whether it???s Ruby, Scala, JavaScript or anything
                           else, on Jobby you only get offers from companies for
                           your preferred tech stack and desired salary.
                        </p>
                        <span className="lp-C-one"> Sign up now &#8594;</span>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         <section className="lp-S-container row">
            <div className="lp-S-img col-md-6">
               <img src={careersupport} alt="support image" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
               <h2>Free Career and Dev Support</h2>
               <p>
                  Your dedicated Talent Success Advisor doubles as your personal
                  advocate and go-to expert. They???ve seen hundreds of developers
                  get hired and have a strong understanding of the market.
                  They???ll help benchmark your salary and optimise your profile
                  to stand out. They offer mock interviews to hone your
                  communication and presentation. Plus, you can also receive
                  guidance from our visa support specialists.
               </p>
               <span className="lp-S-span"> Learn More &#8594;</span>
            </div>
         </section>
      </main>
   );
}

export default LandingPage;
