import React from 'react'
import {Link,useNavigate} from 'react-router-dom'


function Slidebar() {
    let nav = useNavigate()
  return (
   <>
      {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <Link to='/dashboard'>
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            </Link>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <Link to='adduser'>
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                   <i className="fa-solid fa-user-plus"></i>
                    <span>AddUser</span>
                </div>
               <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <div className="collapse-item" >Buttons</div>
                        <div className="collapse-item" >Cards</div>
                    </div>
                </div>
               </Link>
            </li>
            <li className="nav-item">
               <Link to='/profile'>
               <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-user"></i>
                    <span>Profile</span>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <div className="collapse-item" >Buttons</div>
                        <div className="collapse-item" >Cards</div>
                    </div>
                </div>
               </Link>
            </li>
            <li className="nav-item">
               <Link to='/pendingrequest'>
               <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-spinner"></i>
                    <span>Pending User</span>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <div className="collapse-item" >Buttons</div>
                        <div className="collapse-item" >Cards</div>
                    </div>
                </div>
               </Link>
            </li>
            <li className="nav-item" onClick={()=> nav ('./task')}>
               
               <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-list-check"></i>
                    <span>task</span>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <div className="collapse-item" >Buttons</div>
                        <div className="collapse-item" >Cards</div>
                    </div>
                </div>
            
            </li>

           

          

          
          

        </ul>
        {/* <!-- End of Sidebar --> */}
       
   </>
  )
}

export default Slidebar