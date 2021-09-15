import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import SidebarForAdmin from '../SidebarForAdmin/SidebarForAdmin';
import { useForm } from "react-hook-form";
// import logo from '../../../images/logos/logo.png';
import { useState } from 'react';

const MakeAdmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();

    const [isConfirm, setIsConfirm] = useState(false);

    const onSubmit = data => {

        fetch("https://evening-coast-46137.herokuapp.com/addAdmin", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
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
                        {/* <img src={logo} className="ml-5 mb-4" style={{ width: "90px" }} alt="" /> */}
                        <p className="company-logoName">here<span>N</span>now</p>
                        </Link>
                </div>
                <div className="col-md-9 d-flex justify-content-between">
                    <h4>Make Admin</h4>
                    <h6 className="mr-3">{loggedInUser.name || "name"}</h6>
                </div>
            </div>
            <div className='row my-5 mx-3'>
                <div className="col-md-3">
                    <SidebarForAdmin></SidebarForAdmin>
                </div>
                <div className="col-md-9 bg-light p-5">

                    <form onSubmit={handleSubmit(onSubmit)} className='my-5 mx-3 pr-5'>

                        <input type="text" className="form-control" name="email" ref={register({ required: true, maxLength: 50 })} placeholder="Give email address" />
                        {errors.email && <span className="text-danger">This field is required</span>} <br />

                        <input className="btn btn-dark" type="submit" /> <br/>
                        {
                            isConfirm && <h6 className="text-center text-success">Added as admin successfully</h6>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;