import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.jpg';
import './NavBar.css';
import { useLocation, useHistory } from 'react-router-dom'

const NavBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();
    const {pathname} = location;
    console.log(location.pathname)
    
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <Link to="/"><a class="navbar-brand brand_style"> 
                <img className='logo' src={logo} alt="" srcset=""/> 
                <p className="company-logoName">here<span>N</span>now</p>
            </a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto pr-5">
                    <li class="nav-item active">
                        <Link style={{textDecoration: "none"}} to="/"><a class="nav-link">Home <span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                        onClick={() => pathname === "/" ? window.scrollTo(0, 150) : history.push("/")}
                        >Our Client</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={() => pathname === "/" ? window.scrollTo(0, 650):  history.push("/")}>Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={() => pathname === "/" ? window.scrollTo(0, 1250) : history.push("/")}>Our Works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={() => pathname === "/" ? window.scrollTo(0, 1750) : history.push("/")}>Contact Us</a>
                    </li>
                    {/* <li class="nav-item">
                        <Link style={{textDecoration: "none"}} to="/admin/serviceList" class="nav-link" >Admin</Link>
                    </li> */}
                    <li class="nav-item">
                        {
                            loggedInUser.isLoggedIn ? <p className="nav-link text-success">{loggedInUser.name}</p>
                            : <Link to="/login"><p className="nav-link">Login</p></Link>
                        }
                        
                    </li>
                </ul>
                
            </div>
        </nav>
    );
};

export default NavBar;