import React from "react";

function FilterForm() {
   return (
      <header>
         <form>
            <input type="text" placeholder="What" />
            <input type="text" placeholder="Where" />
            <button>Find Job</button>
         </form>
         <form>
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
