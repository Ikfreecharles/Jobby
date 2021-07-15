import "./applicationForm.css";

function ApplicationForm() {
   return (
      <main className="ap-container">
         <h3>
            You’re applying for Javascript Developer at HSH HSH Soft -and
            Hardware Company Ltd
         </h3>
         <p>
            Complete your job application by uploading your CV at the top of
            this application form. You can upload additional attachments, such
            as a cover letter or portfolio at the bottom. Please make sure to
            upload all documents that are specified in the job description, as
            it is not possible to upload/change any documents after application
            submission.
         </p>
         <p>Upload either DOC, DOCX, HTML, PDF, or TXT file types (5MB max)</p>
         <div className="af-btn-div">
            <button>Apply with LinkedIn</button>
            <p>or</p>
            <button>Upload Resume</button>
         </div>
         <h6>My Information:</h6>
         <form>
            <label htmlFor="country">
               Country
               <select name="country" id="country">
                  <option value="Nigeria">Nigeria</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
               </select>
            </label>
            <label htmlFor="givenName">
               Given Name*
               <input type="text" required />
            </label>
            <label htmlFor="familyName">
               Family Name*
               <input type="text" required />
            </label>
            <label htmlFor="street">
               Street
               <input type="text" />
            </label>
            <label htmlFor="postalCode">
               Postal Code
               <input type="text" />
            </label>
            <label htmlFor="city">
               City
               <input type="text" />
            </label>
            <label htmlFor="email">
               Email Address*
               <input type="email" required />
            </label>
            <label htmlFor="phone">
               Phone Number*
               <input type="tel" required />
            </label>
            <label htmlFor="hearAboutUs">
               How did you hear about us?
               <select name="aboutUs" id="aboutUs">
                  <option value="friend">From a Friend</option>
                  <option value="media">TV, Media, Social media</option>
                  <option value="seminar">Seminar and Event</option>
               </select>
            </label>

            <h6>skills</h6>

            <label htmlFor="skills">
               <textarea
                  name="skills"
                  id="skills"
                  cols="30"
                  rows="1"
               ></textarea>
            </label>
            <select name="gender" id="gender">
               <option value="male">Male</option>
               <option value="female">Female</option>
            </select>

            <p>
               Please, note that your gender will not be disclosed to the
               respective recruiter or linked to your job application by any
               means. By sharing your gender with us, you explicitly consent to
               the processing of this information and to Delivery Hero adding
               this information to an aggregated data set, which will be used
               for analysis. Should you choose to not participate, please select
               “I choose not to disclose”. Not participating will not have any
               negative impact on your application, and your answer will not be
               identified with you individually. Regardless of what you choose,
               we thank you in advance!
            </p>

            <input type="checkbox" required />
            <span>I agree with the privacy notice</span>
            <input type="checkbox" />
            <span>I would like to receive occasional company updates</span>
            <button>Submit</button>
         </form>
      </main>
   );
}

export default ApplicationForm;
