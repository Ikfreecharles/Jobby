import "./sidebar.css";

function Sidebar() {
   return (
      <section className="sb-container">
         <h5>Messages</h5>
         <form className="sb-form">
            <select name="showType" id="showType">
               <option value="inbox">Inbox</option>
               <option value="archived">Archived</option>
            </select>
         </form>
      </section>
   );
}

export default Sidebar;
