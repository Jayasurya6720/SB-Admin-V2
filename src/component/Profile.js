import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Profile() {
  return <>
  <div>
    <h1>profile</h1>
    <h3>Nested routing useing outlet component</h3>
    <ul>
      <Link to="profiledetails"><li>ProfileDetails</li></Link>
     <Link to="resetpassword"> <li>Reset-Password</li></Link>
    </ul>
    <Outlet/>
  </div>
  </>
}

export default Profile