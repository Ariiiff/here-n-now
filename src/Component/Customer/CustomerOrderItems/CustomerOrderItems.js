import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../CustomerPlaceOrder/CustomerPlaceOrder.css';
// import logo from '../../../images/logos/logo.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useEffect } from 'react';
import OrderedServices from './OrderedServices';

const CustomerOrderItems = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    console.log(loggedInUser);

    const [registeredCustomer, setRegisteredCustomer] = useState([]);

    useEffect( () => {
        fetch(`https://evening-coast-46137.herokuapp.com/orderedItems?email=${loggedInUser.email}`)
        .then(re => re.json())
        .then(result => setRegisteredCustomer(result))
    },[])
    
    return ( 
        <div>
            <div className='row mt-5 mx-3'>
                <div className="col-md-3">
                    <Link to='/'>
                        {/* <img src={logo} className="ml-5 mb-4" style={{ width: "90px" }} alt="" /> */}
                        <p className="logo">here<span>N</span>now</p>
                    </Link>
                </div>
                <div className="col-md-9 d-flex justify-content-between">
                    <h4>Ordered Services</h4>
                    <h6 className="mr-3">{loggedInUser.name}</h6>
                </div>
            </div>
            <div className='row my-5 mx-3'>
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 bg-light p-5">
                    <div className="row">
                        {
                            registeredCustomer.map( service => <OrderedServices key={service._id} serviceInfo={service}></OrderedServices>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomerOrderItems;