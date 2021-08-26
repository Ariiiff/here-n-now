import React from 'react';
import frame from '../../../images/logos/Frame.png';

const MainHeader = () => {
    return (
        <div>
            <div className='row'>
                <div className="col-md-6">
                    <div className="m-5 p-3">
                        <h2>Let's Grow Your <br />Brand To The <br />Next Level</h2>
                        <small className="font-weight-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni saepe laboriosam, nobis distinctio sit corporis quibusdam explicabo nihil natus culpa.</small>
                        <br /><br />
                        <button className='btn btn-dark px-4'>Hire Us</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={frame} alt="" className='img-fluid w-75 m-5' srcset="" />
                </div>
            </div>
            
        </div>
    );
};

export default MainHeader;