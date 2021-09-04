import React, { useEffect } from 'react';
import ProvidedServices from './ProvidedServices/ProvidedServices';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import serviceItems from './serviceItems';


const Services = () => {

    const [serviceProvides, setServiceProvides] = useState([]);

    // useEffect(() => {
    //     fetch("https://evening-coast-46137.herokuapp.com/serviceProvides")
    //     .then(res => res.json())
    //     .then( data => setServiceProvides(data));
    // },[]);

    const services = serviceItems.concat(serviceProvides);

    return (
        <div className="my-5 p-5">
            <h3 className='text-center my-5'>Provide awesome <span className='text-success'>Courses</span></h3>

            <h5 id='web_app' style={{color: 'lightseagreen'}}>Web App Development</h5>
            <Link style={{textDecoration: "none"}} className="text-dark" to="/customer/placeOrder"><div className='row p-2'>
                {
                    (services.filter(ser => ser.category === 'web_app_development')).map( service => <ProvidedServices key={service._id} service={service}></ProvidedServices>)
                }
            </div></Link> <br /> <br />

            <h5 id='mobile_app' style={{color: 'lightseagreen'}}>Mobile App Development</h5>
            <Link style={{textDecoration: "none"}} className="text-dark" to="/customer/placeOrder"><div className='row p-2'>
                {
                    (services.filter(ser => ser.category === 'mobile_app_development')).map( service => <ProvidedServices key={service._id} service={service}></ProvidedServices>)
                }
            </div></Link> <br /> <br />

            <h5 id='design' style={{color: 'lightseagreen'}}>Design</h5>
            <Link style={{textDecoration: "none"}} className="text-dark" to="/customer/placeOrder"><div className='row p-2'>
                {
                    (services.filter(ser => ser.category === 'design')).map( service => <ProvidedServices key={service._id} service={service}></ProvidedServices>)
                }
            </div></Link> <br />

            
        </div>
    );
};

export default Services;