import "./sidebar.css";

function Sidebar() {
   return (
      <section>
         <h5>Messages</h5>
         <form>
            <select name="showType" id="showType">
               <option value="inbox">Inbox</option>
               <option value="archived">Archived</option>
            </select>
         </form>
      </section>
   );
}

export default Sidebar;
