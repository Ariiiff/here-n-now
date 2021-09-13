import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import '../CustomerPlaceOrder/CustomerPlaceOrder.css';
import logo from '../../../images/logos/logo.jpg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const CustomerReview = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isConfirm, setIsConfirm] = useState(false);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const {name, profession, description} = data;
        const { img } = loggedInUser;
        const newReview = {
            customerName : name,
            customerProfession : profession,
            customerComment : description,
            customerImg : img
        }
        fetch("https://evening-coast-46137.herokuapp.com/addReview", {

            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setIsConfirm(true);
         })
        .catch(err => console.log(err));
    };

    return (
        <div>
            <div className='row mt-5 mx-3'>
                <div className="col-md-3">
                    <Link to='/'>
                        {/* <img src={logo} className="ml-5 mb-4" style={{width: "90px"}} alt=""/> */}
                        <p className="logo">here<span>N</span>now</p>
                    </Link>
                </div>
                <div className="col-md-9 d-flex justify-content-between">
                    <h4>Review</h4>
                    <h6 className="mr-3">{loggedInUser.name}</h6>
                </div>
            </div>
            <div className='row my-5 mx-2'>
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 bg-light">
                    <form onSubmit={handleSubmit(onSubmit)} className='my-5 mx-3 pr-5'>
                            
                        <input type="text" className="form-control" name="name" ref={register({ required: true, maxLength: 20 })} placeholder="Your name/company's name" />
                        {errors.name && <span className="text-danger">This field is required</span>} <br/>

                        <input type="text" className="form-control" name="profession" ref={register({ required: true, maxLength: 30 })} placeholder="Designation, company name" />
                        {errors.profession && <span className="text-danger">This field is required</span>} <br/>

                        <textarea name="description" className="form-control" rows="5" ref={register({ required: true})} placeholder="Description"></textarea><br/>
                        {errors.description && <span className="text-danger">This field is required</span>} <br/>

                        <input className="btn btn-dark" type="submit" value="Submit" /><br/>
                            {
                                isConfirm && <h6 className="text-center text-success">Your feedback is taken successfully.Thank you so much.</h6>
                            }
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default CustomerReview;