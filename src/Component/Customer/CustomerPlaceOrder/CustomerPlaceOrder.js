import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './CustomerPlaceOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logos/logo.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from '../../../App';

const CustomerPlaceOrder = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {serviceName, serviceId, serviceDescription, serviceImg, serviceImage} = loggedInUser;

    console.log("loggedInUser", loggedInUser)

    const [isConfirm, setIsConfirm] = useState(false);

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const {name, email, details, price} = data;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('serviceId', serviceId);
        formData.append('service', serviceName);
        formData.append('serviceDescription', serviceDescription);
        formData.append('serviceImg', serviceImg);
        if (serviceImage !== undefined){
            formData.append('serviceImage', serviceImage.img);
        }
        formData.append('details', details);
        formData.append('price', price);

        console.log('formData', formData);

        fetch('https://evening-coast-46137.herokuapp.com/addCustomer', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(result => {
                console.log("result", result);
                setIsConfirm(true);
            })
            .catch(err => {
                console.error(err)
            });
        }

    return (
        <div>
            <div className='row mt-5 mx-3'>
                <div className="col-md-3">
                    <Link to='/'>
                        {/* <img src={logo} className="ml-5 mb-4" style={{ width: "90px", height: "90px" }} alt="" /> */}
                        <p className="logo">here<span>N</span>now</p>
                        </Link>
                </div>
                <div className="col-md-9 d-flex justify-content-between header">
                    <h4>Order</h4>
                    <h6 className="mr-3">{loggedInUser.name}</h6>
                </div>
            </div>
            <div className='row my-5 mx-3'>
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 form_container">
                    <h5>serviceDescription : </h5>
                    <div style={{color: 'black'}}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque enim ratione obcaecati deserunt reiciendis repellat hic id repudiandae? Illo quis voluptas doloribus ipsa corrupti. Quisquam, eum recusandae ut doloribus ullam obcaecati natus sequi laudantium laborum nemo aspernatur quia perspiciatis consequatur neque reiciendis iusto vitae voluptatem. Accusantium perferendis corrupti tempora.</p>
                        <p>{serviceDescription}</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='my-5 mr-3 p-5 bg-light'>

                        <input type="text" className="form-control" name="name" ref={register({ required: true, maxLength: 20 })} placeholder="Your name" />
                        {errors.name && <span className="text-danger">This field is required</span>} <br />

                        <input type="text" className="form-control" name="email"
                         defaultValue={loggedInUser.email} 
                         ref={register({ required: true, maxLength: 50 })}
                         placeholder="Your email address" />
                         {errors.email && <span className="text-danger">This field is required</span>} <br />
                        <input type="text" className="form-control" name="service" defaultValue={loggedInUser.serviceName} ref={register({ required: true, maxLength: 200 })} placeholder="Course Name" />
                        {errors.service && <span className="text-danger">This field is required</span>} <br /> 

                        <textarea name="details" className="form-control" rows="5" ref={register({ required: true, maxLength: 60 })} placeholder="This course is interested to you. Because..."></textarea><br /> 

                        <div className="form-group d-flex">
                            <input style={{ width: "30%" }} type="text" className="form-control" name="price" ref={register({ required: true, maxLength: 10 })} placeholder="Price" value={'$500'} />
                            {errors.price && <span className="text-danger">This field is required</span>}

                            <input onChange={handleFileChange} style={{ width: "30%" }} type="file" name="files" id="exampleFormControlFile1"></input>
                            <label for="exampleFormControlFile1" className="ml-3 py-2">
                                <FontAwesomeIcon className="mx-3" icon={faCloudUploadAlt} />Upload image
                            </label>

                        </div> 

                        <input className="btn btn-dark" type="submit" value="Enroll Now" />
                            {
                                isConfirm && <h6 className="text-center text-success">Your order is placed successfully</h6>
                            } 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerPlaceOrder;