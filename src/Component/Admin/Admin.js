import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import SidebarForAdmin from './SidebarForAdmin/SidebarForAdmin';
// import logo from '../../images/logos/logo.jpg';
import { useState } from 'react';

const Admin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [serviceList, setServiceList] = useState([]);

    useEffect( () => {
        fetch(`https://evening-coast-46137.herokuapp.com/admin`)
        .then(re => re.json())
        .then(result => setServiceList(result))
    },[])

    return (
        <div>
            <div className='row mt-5 mx-3'>
                <div className="col-md-3">
                    <Link to='/'>
                        {/* <img src={logo} className="ml-5 mb-4" style={{ width: "90px" }} alt="" /> */}
                        <p className="company-logoName">here<span>N</span>now</p>
                    </Link>
                </div>
                <div className="col-md-9 d-flex justify-content-between">
                    <h4>Service List</h4>
                    <h6 className="mr-3">{loggedInUser.name || ""}</h6>
                </div>
            </div>
            <div className='row my-5 mx-3'>
                <div className="col-md-3">
                    <SidebarForAdmin></SidebarForAdmin>
                </div>
                <div className="col-md-9 bg-light p-5">
                    <div className="row">
                        <table className="table p-3" style={{backgroundColor : 'white'}}>
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Project Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    serviceList.map( service => 
                                        <tr>
                                            <td>{service.name}</td>
                                            <td>{service.email}</td>
                                            <td>{service.service}</td>
                                            <td>{service.details}</td>
                                        </tr>
                                    )
                                }
                            </tbody>   
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;