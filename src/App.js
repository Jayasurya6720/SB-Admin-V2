import React from 'react'
import Slidebar from './component/Slidebar'
import Dashboard from './component/Dashboard'
import AddUser from './component/AddUser'
import Profile from './component/Profile'
import PendingRequest from './component/PendingRequest'
import Task from './component/Task'
import ProfileDetails from './component/ProfileDetails'
import ResetPassword from './component/ResetPassword'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { useState } from 'react'

function App() {
  let [user,setUser] = useState([
    {
      name : "arun",
      mobileNo : "721527126",
      email : "arun@gmail.com",
      dob : "2001-04-02"
    },
    {
      name : "praveen",
      mobileNo : "72133447126",
      email : "praveen@gmail.com",
      dob : "2003-09-23"
    },
    {
      name : "ravi",
      mobileNo : "23566447126",
      email : "ravi@gmail.com",
      dob : "1994-04-12"
    },
    {
      name : "zoya",
      mobileNo : "8975427126",
      email : "zoya@gmail.com",
      dob : "1998-03-25"
    },
  ])
  return <>
  <BrowserRouter>
    <div id="wrapper">
      <Slidebar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>}> </Route>
        <Route path="/adduser" element={<AddUser user={user} setUser={setUser}/>}></Route>
        <Route path="/edit-user/:id" element={<AddUser user={user} setUser={setUser}/>}></Route>
        <Route path="/profile" element={<Profile/>}>
            <Route path='profiledetails' element={<ProfileDetails/>}/>
            <Route path='resetpassword' element={<ResetPassword/>}/>
        </Route>
        <Route path="/pendingrequest" element={<PendingRequest/>}></Route>
        <Route path="/task" element={<Task/>}></Route>
        <Route path="/*" element={<Navigate to='/dashboard'/>}></Route>
      </Routes>
     
      
      </div>
      </BrowserRouter>
      </>
}

export default App