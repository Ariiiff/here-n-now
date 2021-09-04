import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faCartPlus, faCommentAlt, faHome } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar mt-5">
            <ul>
                <li className="my-3">
                    <Link style={{textDecoration: "none"}} to="/">
                        <span className="sidebar-items"><FontAwesomeIcon className="mx-2" icon={faHome} />Home</span>
                    </Link>
                </li>
                <li className="my-3">
                    <Link style={{textDecoration: "none"}} to="/customer/placeOrder">
                        <span className="sidebar-items"><FontAwesomeIcon className="mx-2" icon={faCartPlus} />Order</span>
                    </Link>
                </li>
                <li className="my-3">
                    <Link style={{textDecoration: "none"}} to="/customer/orderedItems">
                        <span className="sidebar-items"><FontAwesomeIcon className="mx-2" icon={faShoppingBag} />Service list</span>
                    </Link>
                </li>
                <li className="my-3">
                    <Link style={{textDecoration: "none"}} to="/customer/review">
                        <span className="sidebar-items"><FontAwesomeIcon className="mx-2" icon={faCommentAlt} />Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;