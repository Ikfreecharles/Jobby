import "./filterForm.css";

function FilterForm() {
   return (
      <header className="ff-container">
         <form className="ff-form">
            <label htmlFor="title">
               What:
               <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Job title"
               />
            </label>
            <label htmlFor="location">
               Where:
               <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Job location"
               />
            </label>

            <button className="ff-btn">Find Job</button>
         </form>
         <form className="ff-filter-form">
            <select id="" name="">
               <option value="HomeOffice">Home Office</option>
               <option value="Onsite">On Site</option>
            </select>
            <select name="" id="">
               <option value="Javascript">JavaScript</option>
               <option value="Java">Java</option>
               <option value="Python">Python</option>
               <option value="Ruby">Ruby</option>
               <option value="C++">C++</option>
               <option value="Go">Go</option>
            </select>
            <select name="" id="">
               <option value="Full-time">Full-time</option>
               <option value="Part-time">Part-time</option>
            </select>
            <select name="" id="">
               <option value="Berlin">Berlin</option>
               <option value="Bayern">Bayern</option>
               <option value="Leipzig">Leipzig</option>
               <option value="Postdam">Postdam</option>
               <option value="Frankfurt">Frankfurt</option>
               <option value="Hamburg">Hamburg</option>
            </select>
            <select name="Company" id="Company">
               <option value="Company">Company</option>
            </select>
            <select name="Languages" id="Language">
               <option value="Deutsch">Deutsch</option>
               <option value="English">English</option>
            </select>
         </form>
      </header>
   );
}

export default FilterForm;
