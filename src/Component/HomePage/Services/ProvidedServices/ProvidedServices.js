import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import '../Services.css';

const ProvidedServices = (props) => {
    const { id, name, serviceDescription, img, image} = props.service;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleService = (id, name, serviceDescription, img, image) => {
        const newUser = {...loggedInUser};
        newUser.serviceId = id;
        newUser.serviceName = name;
        newUser.serviceDescription = serviceDescription;
        newUser.serviceImg = img;
        newUser.serviceImage = image;
        setLoggedInUser(newUser);
    }

    return (
        <div onClick={ () => handleService(id, name, serviceDescription, img, image)} className='col-md-4 text-center service-card'>

            <div className='p-3'>
                {
                    image ? <img className="service-logo" src={`data:image/jpeg;base64,${image.img}`} alt="" srcSet="" />
                    : <img src={img} className="service-logo" alt="" srcSet=""/>
                }
                
                <h4>{name}</h4>
                <p class="service_description">{serviceDescription}</p>
            </div>
            
        </div>
    );
};

export default ProvidedServices;