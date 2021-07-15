import "./signIn.css";

function SignIn({ handleSignIn }) {
   const handleFormSubmit = (e) => {
      e.preventDefault();
      handleSignIn(true);
   };
   return (
      <article className="si-outer-div">
         <form>
            <label htmlFor="email">
               Email
               <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  required
               />
            </label>
            <label htmlFor="password">
               Password
               <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
               />
            </label>
            <button
               onClick={(e) => {
                  handleFormSubmit(e);
               }}
            >
               Submit
            </button>
         </form>
      </article>
   );
}

export default SignIn;
