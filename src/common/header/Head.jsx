import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";


const Head = () => {
  const [user, setUser] = useState(null); // Store user data

  useEffect(() => {
    // Set up an observer to listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='lef_trow'>
            <i className='fa fa-phone'></i>
            <label> +61 0466 017 718</label>
            <i className='fa fa-envelope'></i>
            <label> DevLink Marketplace</label>
          </div>
          <div className='right_row_RText'>
            <a className="nav-icon" href="/">Find DEV</a>
            <span><i class="fa " aria-hidden="true"></i></span>
            <span><i class="fa " aria-hidden="true"></i></span>
            <a className="nav-icon" href="/">Find Jobs</a>
            <span><i class="fa " aria-hidden="true"></i></span>
            <span><i class="fa " aria-hidden="true"></i></span>

            {user? (
            <>
              <a className="nav-icon" href="/signout">Sign Out</a>
              <span><i class="fa " aria-hidden="true"></i></span>
              <span><i class="fa " aria-hidden="true"></i></span>
            </>
            ) : (

              <>
              <a className="nav-icon" href="/login">Login</a>
              <span><i className="fa " aria-hidden="true"></i></span>
              <span><i className="fa " aria-hidden="true"></i></span>
              <a className="nav-icon" href="/signup">Create Account</a>
            </>
          )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
