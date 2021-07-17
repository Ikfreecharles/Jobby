//import components and css
import "./dropdown.css";
import { MdFavorite } from "react-icons/md";
import { AiFillStop } from "react-icons/ai";
import { BsFlagFill } from "react-icons/bs";

function Dropdown() {
   const handleClick = (e) => {
      e.stopPropagation();
   };
   return (
      <div className="d-container">
         <div className="d-save" onClick={(e) => handleClick(e)}>
            <MdFavorite className="d-icon" />
            <p>Save job</p>
         </div>
         <div className="d-ignore" onClick={(e) => handleClick(e)}>
            <AiFillStop className="d-icon" />
            <p>Ignore Job</p>
         </div>
         <div className="d-report" onClick={(e) => handleClick(e)}>
            <BsFlagFill className="d-icon" />
            <p>Report Job</p>
         </div>
      </div>
   );
}

export default Dropdown;
