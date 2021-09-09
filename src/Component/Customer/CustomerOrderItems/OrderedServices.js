import React from 'react';

const OrderedServices = ({serviceInfo}) => {
    const card = {
        borderRadius : '10px',
        backgroundColor : 'white',
        width : "95%",
        height : "300px"
    }

    const status = {
        backgroundColor : "#FFE3E3",
        color : "#FF4545",
        borderRadius: "5px"
    }
    return (
        <div className="col-md-6 text-left">
            <div className='p-4 my-4' style={card}>
                <div className="d-flex justify-content-between">
                    {
                        serviceInfo.serviceImage ? <img className="service-logo" src={`data:image/jpeg;base64,${serviceInfo.serviceImage}`} alt="" srcSet="" />
                        : <img src={serviceInfo.serviceImg} className="service-logo" alt="" srcSet=""/>
                    }
                    <h6 style={status} className="px-3 py-2 m-4">Enrolled</h6>
                </div>
            
                
                <h4>{serviceInfo.service}</h4>
                <small>{serviceInfo.serviceDescription}</small>
            </div>
        </div>
    );
};

export default OrderedServices;