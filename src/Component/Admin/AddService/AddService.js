import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarForAdmin from '../SidebarForAdmin/SidebarForAdmin';
// import logo from '../../../images/logos/logo.png';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const AddService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [file, setFile] = useState(null);
    const [isConfirm, setIsConfirm] = useState(false);

    const handleFileChange = (e) => {
        
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        const {name, description } = data;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('description', description);

        fetch('https://evening-coast-46137.herokuapp.com/addService', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setIsConfirm(true);
            })
            .catch(err => {
                console.error(err)
            })
        }
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
                    <h4>Add Service</h4>
                    <h6 className="mr-3">{loggedInUser.name || "name"}</h6>
                </div>
            </div>
            <div className='row my-5 mx-3'>
                <div className="col-md-3">
                    <SidebarForAdmin></SidebarForAdmin>
                </div>
                <div className="col-md-9 bg-light p-5">
                    <form onSubmit={handleSubmit(onSubmit)} className='my-5 mx-3 pr-5'>

                        <input type="text" className="form-control" name="name" ref={register({ required: true, maxLength: 50 })} placeholder="Service title" />
                        {errors.name && <span className="text-danger">This field is required</span>} <br />

                        <textarea name="description" className="form-control" rows="5" ref={register({ required: true, maxLength: 1000 })} placeholder="Description"></textarea>
                        {errors.description && <span className="text-danger">This field is required</span>}
                        <br />

                        <div className="form-group d-flex">
                            <input onChange={handleFileChange} style={{ width: "30%" }} type="file" name="files" id="exampleFormControlFile1"></input>
                            <label for="exampleFormControlFile1" className="py-2">
                                <FontAwesomeIcon className="mx-3" icon={faCloudUploadAlt} />Upload image
                            </label>

                        </div>

                        <input className="btn btn-dark" type="submit" /> <br/>
                            {
                                isConfirm && <h6 className="text-center text-success">Service added successfully</h6>
                            }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;