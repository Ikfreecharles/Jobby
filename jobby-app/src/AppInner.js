import { useContext } from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

// import componenets
import "./App.css";
import Nav from "./Components/Nav/Nav";
import LandingPage from "./Components/Landing-Page/LandingPage";
import SignInRegister from "./Components/Signin-Register/SignInRegister";
import JobSearch from "./Components/Job-Search/JobSearch";
import Notification from "./Components/Notification/Notification";
import ApplicationForm from "./Components/Application-Form/ApplicationForm";
import ApplicationSuccess from "./Components/Application-Success/ApplicationSuccess";
import Message from "./Components/Message/Message";
import Footer from "./Components/Footer/Footer";

import AppContext from "./ContextApi/app-context";

function AppInner() {
   const location = useLocation();
   const { SignInIsTrue } = useContext(AppContext);

   return (
      <>
         <BrowserRouter>
            {location.pathname !== "/signin" && <Nav />}

            <Switch>
               <Route path="/" component={LandingPage} exact />
               <Route path="/signin" component={SignInRegister} />
               <Route path="/jobsearch" component={JobSearch} />
               <Route path="/notification" component={Notification} />
               {SignInIsTrue ? (
                  <Route
                     path="/application"
                     component={ApplicationForm}
                     exact
                  />
               ) : (
                  <Route path="/signin" component={SignInRegister} />
               )}

               <Route
                  path="/application/success"
                  component={ApplicationSuccess}
               />
               <Route path="/message" component={Message} />
            </Switch>

            {location.pathname !== "/signin" && <Footer />}
         </BrowserRouter>
      </>
   );
}

export default AppInner;
