import React, { useState } from "react";
import AppContext from "./app-context";
import { useFetch } from "./useFetch";

function AppState(props) {
   const [data, setData] = useState([]);
   const [SignInIsTrue, setSignInIsTrue] = useState(false);
   const [jobTitleInput, setjobTitleInput] = useState("");
   const [titleQuery, settitleQuery] = useState("");
   const [dataReceived, setdataReceived] = useState(false);
   const handleSignIn = (childResp) => {
      setSignInIsTrue(childResp);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      settitleQuery(jobTitleInput);
   };
   useFetch(setData, titleQuery, setdataReceived);
   console.log(data);
   return (
      <AppContext.Provider
         value={{
            data,
            SignInIsTrue,
            jobTitleInput,
            handleSubmit,
            setjobTitleInput,
            setSignInIsTrue,
            handleSignIn,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
}

export default AppState;
