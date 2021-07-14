import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import componenets
import SignInRegister from "./Components/Signin-Register/SignInRegister";
import JobSearch from "./Components/Job-Search/JobSearch";

function App() {
   return (
      <main>
         <BrowserRouter>
            <Switch>
               <Route path="/signin" component={SignInRegister} />
               <Route path="/jobsearch" component={JobSearch} />
            </Switch>
         </BrowserRouter>
      </main>
   );
}

export default App;
