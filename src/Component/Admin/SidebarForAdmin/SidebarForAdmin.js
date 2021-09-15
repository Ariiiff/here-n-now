import {faHome, faPlus, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarForAdmin = () => {
    return (
        <div className="sidebar mt-5">
            <ul>
                <li className="my-3">
                    <Link style={{textDecoration: "none"}} to="/">
                        <span className="sidebar-items"><FontAwesomeIcon className="mx-2" icon={faHome} />Home</span>
                    </Link>
                </li>
                <li className="my-3">
                    <Link style={{textDecoration: "none"}} to="/admin/serviceList">
                        <span className="sidebar-items"><FontAwesomeIcon className="mx-2" icon={faShoppingBag} />Service list</span>
                    </Link>
                </li>
                <li className="my-3">
                    <Link style={{textDecoration: "none"}} to="/admin/addService">
                        <span className="sidebar-items"><FontAwesomeIcon className="mx-2" icon={faPlus} />Add service</span>
                    </Link>
                </li>
                <li className="my-3">
                    <Link style={{textDecoration: "none"}} to="/admin/makeAdmin">
                        <span className="sidebar-items"><FontAwesomeIcon className="mx-2" icon={faUserPlus} />Make Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SidebarForAdmin;