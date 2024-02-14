import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
//import styles from "../Components/Home/Home.css";







function Home(){

   
    

return(
    <div>
    <div class='conatiner0'><img src="/img5.png" class='image'></img>
   
    
    <input type="text" class="text-input" placeholder='What are you looking for?'/>

  </div>
  
  <div style={{ marginTop: '50px', textAlign: 'center' }}>
  <p class="p1"><h3><b>Browse By Category</b></h3></p>
  </div>

  <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex' }}>
        <div class="link-container">
      <a href="/cars" ><img src="img6.png" alt="Image 1" style={{ width: '80%' }} /></a>
      <a href="/results"><img src="img7.png" alt="Image 2" style={{ width: '80%' }} /></a>
      <a href="/results"><img src="img8.png" alt="Image 2" style={{ width: '80%' }} /></a>
      <a href="#"><img src="img9.png" alt="Image 2" style={{ width: '80%' }} /></a>
      <a href="#"><img src="img10.png" alt="Image 2" style={{ width: '80%' }} /></a>
      <a href="#"><img src="img11.png" alt="Image 2" style={{ width: '80%' }} /></a>
      <a href="#"><img src="img12.png" alt="Image 2" style={{ width: '80%' }} /></a>
    </div>
    </div>
    </div>

    
  
    <div className='container1'>
        <div className='layout'>
              <div className='add_btn mt-2'>
                <NavLink to="/results" ><b class="lnk1">Browse All Categories</b></NavLink>
                </div>    
                  
        </div>
    </div>

    <h3 className='featured-ads' style={{marginTop: '2px'}}><b>Featured Ads</b></h3>
    <div className="advertisement-container">
  <a href="/cars" className="advertisement-link">
  <div className="advertisement">
    <img src="premio.jpg" alt="Car 1" />
    <div className="description">
      <h2> 2018 Toyota Premio</h2>
      <h3> Rs. 11000000</h3>
    </div>
  </div>
  </a>
  <a href="/results" className="advertisement-link">
  <div className="advertisement">
    <img src="img13.png" alt="land 1" />
    <div className="description">
      <h2>Land Kalutara</h2>
      <h3>Rs. 8700000</h3>
    </div>
  </div>
  </a>
  <a href="/results" className="advertisement-link">
  <div className="advertisement">
    <img src="img14.png" alt="phone 1" />
    <div className="description">
      <h2> Apple Iphone 13</h2>
      <h3> Rs. 234000</h3>
    </div>
  </div>
  </a>
  
</div>

<NavLink to="/results" ><button class="button button1">See All</button></NavLink>
   </div>


   
);



}

export default Home;