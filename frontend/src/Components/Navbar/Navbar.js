import React from 'react';
import './Navbar.css';
import { NavLink,Link } from 'react-router-dom';




const Navbar = () => {


   return( 
    <header>
    <div class="row align-items-center text-center">
        
        
       
    </div>
   <div className='clms2'>
    <nav class="navbar navbar-expand-lg  p-0 m-0">
        <div class="container-fluid ">
            <NavLink className="navbar-brand" to=""><img src={"img3.png"} alt="ABC ads" height="72" />
            
            </NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                       
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li class="nav-item">
                        
                        <Link className="nav-link" to="/results">BrowseAds </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/">About Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Contact</Link>
                    </li>
                    
                    <li class="nav-item">
                    <span className="gap"></span>
                        <a class="nav-link1" href="#"><b>Login</b></a>
                    </li>
                    <li class="nav-item">
                    <span className="gap"></span>
                       <button type="submit" class="btn btn-primary1">Post an ad</button>

                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    </div> 
</header>

   );

}

export default Navbar