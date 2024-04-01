import React from 'react'
import Cards from './Cards'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function Dashboard({ user, setUser }) {
    let data = [{
        title: "Earnings (Monthly)",
        value: "$40,000",
        icon: "fa-calendar",
        color: "primary",
        progress: false
    },
    {
        title: "Earnings (Annual))",
        value: "$215,000",
        icon: "fa-dollar-sign",
        color: "success",
        progress: false
    },
    {
        title: "Tasks",
        value: "75%",
        icon: "fa-clipboard-list",
        color: "info",
        progress: true
    },
    {
        title: "Pending Requests",
        value: "18",
        icon: "fa-comments",
        color: "warning",
        progress: false
    }
    ]
    let Navigate = useNavigate();

    return (
        <>


            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Topbar --> */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        {/* <!-- Sidebar Toggle (Topbar) --> */}
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>

                    </nav>
                    {/* <!-- End of Topbar --> */}

                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                        </div>

                        {/* <!-- Content Row --> */}
                        <div className="row">
                            {
                                data.map((e, i) => {
                                    return <Cards key={i}
                                        input={e} />
                                })
                            }
                        </div>
                        {/* create table */}
                        <div className='container-fluid'>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th> Name</th>
                                        <th>MobileNo</th>
                                        <th>EmailId</th>
                                        <th>DOB</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user.map((e, i) => {
                                            return <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{e.name}</td>
                                                <td>{e.mobileNo}</td>
                                                <td>{e.email}</td>
                                                <td>{e.dob}</td>
                                                <td> <Button variant="primary" onClick={()=>Navigate(`/edit-user/${i}`)}>Edit</Button>
                                                    &nbsp;&nbsp;
                                                    <Button variant="danger" onClick={()=>{
                                                      let newArray = [...user]
                                                      newArray.splice(i,1)
                                                      setUser(newArray)
                                                        }}>Delete</Button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Dashboard