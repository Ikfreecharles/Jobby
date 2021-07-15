import Main from "./Main/Main";
import "./message.css";
import Sidebar from "./Sidebar/Sidebar";

function Message() {
   return (
      <main className="m-container container-fluid">
         <div className="row">
            <div className="m-sidebar col-md-3">
               <Sidebar />
            </div>
            <div className="m-main col-md-9">
               <Main />
            </div>
         </div>
      </main>
   );
}

export default Message;
