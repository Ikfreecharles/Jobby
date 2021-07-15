import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import componenets
import Nav from "./Components/Nav/Nav";
import SignInRegister from "./Components/Signin-Register/SignInRegister";
import JobSearch from "./Components/Job-Search/JobSearch";
import Notification from "./Components/Notification/Notification";
import ApplicationForm from "./Components/Application-Form/ApplicationForm";
import ApplicationSuccess from "./Components/Application-Success/ApplicationSuccess";
import Message from "./Components/Message/Message";

function App() {
   return (
      <main>
         <BrowserRouter>
            <Nav />
            <Switch>
               <Route path="/signin" component={SignInRegister} />
               <Route path="/jobsearch" component={JobSearch} />
               <Route path="/notification" component={Notification} />
               <Route path="/application" component={ApplicationForm} exact />
               <Route
                  path="/application/success"
                  component={ApplicationSuccess}
               />
               <Route path="/message" component={Message} />
            </Switch>
         </BrowserRouter>
      </main>
   );
}

export default App;
