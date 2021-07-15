import "./profileDropdown.css";

function ProfileDropdown({ handleSignIn }) {
   return (
      <div className="pd-container">
         <div className="pd-item">
            <img src="" alt="" />
            <p>Profile</p>
         </div>
         <div className="pd-item">
            <img src="" alt="" />
            <p>Favourite Jobs</p>
         </div>
         <div className="pd-item">
            <img src="" alt="" />
            <p>Subscription</p>
         </div>
         <div className="pd-item">
            <img src="" alt="" />
            <p>Search</p>
         </div>
         <div className="pd-item">
            <img src="" alt="" />
            <p>Settings</p>
         </div>
         <div className="pd-item">
            <img src="" alt="" />
            <p>Contact us</p>
         </div>
         <div className="pd-logout" onClick={() => handleSignIn(false)}>
            <p>Logout</p>
         </div>
      </div>
   );
}

export default ProfileDropdown;
