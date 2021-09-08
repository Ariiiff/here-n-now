import React from 'react';
import { useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.jpg';
import './NavBar.css';
import { useLocation, useHistory } from 'react-router-dom'

const NavBar = () => {

    const [onScrolled, setOnScrolled] = useState(false);
    const handleStickyNav = () => {
        if(window.scrollY > 200){
            setOnScrolled(true)
        } else{
            setOnScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleStickyNav)
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();
    const {pathname} = location;
    console.log(location.pathname);


    const handleScroll = (id) => {
        const anchor = document.querySelector(`#${id}`);
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${onScrolled ? "fixed-top scrolling-navbar container navbar-dark bg-dark px-4 py-0" : null}`}>
            <Link to="/"><a class="navbar-brand brand_style"> 
                <img className='logo' src={logo} alt="" srcset=""/> 
                <p className="company-logoName">here<span>N</span>now</p>
            </a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto pr-5">
                    {
                        (pathname === "/" && <li class="nav-item active">
                        <Link style={{textDecoration: "none"}} to="/"><a class="nav-link">Home <span class="sr-only">(current)</span></a></Link>
                        </li>)
                    }

                    {
                        (pathname === "/" && <li class="nav-item">
                        <a class="nav-link"
                        onClick={() => pathname === "/" ? handleScroll('client') : history.push("/")}
                        >Our Client</a>
                        </li>)
                    }
                    

                    {
                        (pathname === "/" && <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Courses
                        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" onClick={() => pathname === "/" ? handleScroll('web_app') : history.push("/")}>Web App Development</a>
                                <a class="dropdown-item" onClick={() => pathname === "/" ? handleScroll('mobile_app') : history.push("/")}>Mobile App Development</a>
                                <a class="dropdown-item" onClick={() => pathname === "/" ? handleScroll('design') : history.push("/")}>Design</a>
                            </div>
                        </li>)
                    }

                    {
                        (pathname === "/" && <li class="nav-item">
                            <a class="nav-link" onClick={() => pathname === "/" ? handleScroll('our_works') : history.push("/")}>Our Works</a>
                        </li>)
                    }

                    {
                        (pathname === "/" && <li class="nav-item">
                            <a class="nav-link" onClick={() => pathname === "/" ? handleScroll('contact') : history.push("/")}>Contact Us</a>
                        </li>)
                    }
                    
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