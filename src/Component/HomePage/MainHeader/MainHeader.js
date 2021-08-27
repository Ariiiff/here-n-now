import React from 'react';
import frame from '../../../images/logos/Frame.png';

const MainHeader = () => {
    return (
        <div>
            <div className='row'>
                <div className="col-md-6">
                    <div className="m-5 p-3">
                        <h2>Let's Grow Your <br />Knowledge To The <br />Next Level</h2>
                        <p className="font-weight-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur corrupti rerum ex! Vero quaerat in a autem debitis labore corporis id? Neque maiores, nisi dolorum similique, temporibus sapiente illum hic, tempore veritatis dicta quaerat. Placeat molestiae nobis sint minima deserunt!</p>
                        <br /><br />
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