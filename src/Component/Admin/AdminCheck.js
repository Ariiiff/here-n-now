import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const AdminCheck = () => {

    const [isAdmin, setIsAdmin] = useContext(UserContext);
    const[isConfirm, setIsConfirm] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {

        fetch("https://evening-coast-46137.herokuapp.com/isAdmin", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email : data.email})
        })
        .then(res => res.json())
        .then(result => {
            setIsAdmin(result);
            history.replace(from);
        })
        .catch(err => {
            console.log(err);
        });
        setIsConfirm(true);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className='my-5 mx-3 p-5'>

                <h2 className="mb-4">Are You Admin?</h2>
                <input style={{width: "60%"}} type="text" className="form-control" name="email" ref={register({ required: true, maxLength: 50 })} placeholder="Give your email address" />
                {errors.email && <span className="text-danger">This field is required</span>} <br />

                <input className="btn btn-dark" type="submit" /> <br/>
                    {
                        isConfirm && <h6 className="text-center text-danger">Sorry, this is protected for admins only</h6>
                    }
            </form>
        </div>
    );
};

export default AdminCheck;