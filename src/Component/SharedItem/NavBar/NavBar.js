import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './NavBar.css';

const NavBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <Link to="/"><a class="navbar-brand"> <img className='logo' src={logo} alt="" srcset=""/> </a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto pr-5">
                    <li class="nav-item active">
                        <Link style={{textDecoration: "none"}} to="/"><a class="nav-link mr-3 font-weight-bold">Home <span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-3 font-weight-bold" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-3 font-weight-bold" href="#">Our Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-3 font-weight-bold" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <Link style={{textDecoration: "none"}} to="/admin/serviceList" class="nav-link mr-3 font-weight-bold" >Admin</Link>
                    </li>
                    <li class="nav-item">
                        {
                            loggedInUser.isLoggedIn ? <h6 className='m-3'>{loggedInUser.name}</h6>
                            : <Link to="/login"><button className="btn btn-dark mr-3 px-4">Login</button></Link>
                        }
                        
                    </li>
                </ul>
                
  </div>
</nav>
    );
};

export default NavBar;