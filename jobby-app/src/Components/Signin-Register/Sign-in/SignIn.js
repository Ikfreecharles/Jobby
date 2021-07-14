import "./signIn.css";

function SignIn() {
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
               />
            </label>
            <label htmlFor="password">
               Password
               <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
               />
            </label>
            <button>Submit</button>
         </form>
      </article>
   );
}

export default SignIn;
