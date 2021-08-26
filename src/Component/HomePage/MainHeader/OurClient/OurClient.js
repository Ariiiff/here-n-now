import React from 'react';
import google from '../../../../images/logos/google.png';
import airnub from '../../../../images/logos/airbnb.png';
import slack from '../../../../images/logos/slack.png';
import netflix from '../../../../images/logos/netflix.png';
import uber from '../../../../images/logos/uber.png';
import './OurClient.css';

const OurClient = () => {
    return (
        <div className="d-flex justify-content-center my-5"> 
            <img src={slack} className='img-fluid client-logo mr-5' alt="" srcset=""/>
            <img src={airnub} className='img-fluid client-logo mr-5' alt="" srcset=""/>
            <img src={google} className='img-fluid client-logo mr-5' alt="" srcset=""/>
            <img src={netflix} className='img-fluid client-logo mr-5' alt="" srcset=""/>
            <img src={uber} className='img-fluid client-logo' alt="" srcset=""/>
        </div>
    );
};

export default OurClient;