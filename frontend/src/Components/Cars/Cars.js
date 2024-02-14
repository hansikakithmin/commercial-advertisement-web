import { NavLink } from "react-router-dom";
import './Cars.css';

function Cars(){
return(
    <div>
    <div class="container">
    <form action="#">
        <input type="text" class="input-field" placeholder="Vehicle Model"/>
        <button type="submit" class="submit-btn">Search</button>
    </form>
   </div>
<div class="cn2">
   <div class="form-container">
     <form action="#" class="form-inputs">
        <h3><b class="b1">Find Vehicle</b></h3>
        <input type="text" class="if1" placeholder="Vehicle Category"></input>
        <input type="text" class="if1" placeholder="Manufactured Year"></input>
        <input type="text" class="if1" placeholder="Location"></input>
        <button type="submit" class="sbtn1">Search</button>
     </form>
</div>

 
<div class="car-advertisement">
   <div class="image-container">
        <img src="allion.jpg" alt="Image 1"/>
    </div>
    <div class="description">
        <h2><b> Toyota Allion</b></h2>
        <h4>Rs. 6000000</h4>
        <h4>From : Colombo</h4>
        <h4>Year: 2007 </h4>
    </div>
    </div>
    </div>


    <a href="/cars" className="advertisement-link">
    <div class="car-advertisement">
   <div class="image-container">
        <img src="premio.jpg" alt="Image 1"/>
    </div>
    <div class="description">
        <h2><b> Toyota Premio</b></h2>
        <h4>Rs. 11000000</h4>
        <h4>From : Colombo</h4>
        <h4>Year: 2018 </h4>
    </div>
    </div>
    </a>

    <a href="/cars" className="advertisement-link">
    <div class="car-advertisement">
   <div class="image-container">
        <img src="axio.jpg" alt="Image 1"/>
    </div>
    <div class="description">
    <h2><b> Toyota Axio</b></h2>
        <h4>Rs. 8300000</h4>
        <h4>From : Colombo</h4>
        <h4>Year: 2013 </h4>
    </div>
    </div>
    </a>

    <a href="/cars" className="advertisement-link">
    <div class="car-advertisement">
   <div class="image-container">
        <img src="vitz.jpg" alt="Image 1"/>
    </div>
    <div class="description">
    <h2><b> Toyota Vitz</b></h2>
        <h4>Rs. 6200000</h4>
        <h4>From : Kaduwela</h4>
        <h4>Year: 2018 </h4>
    </div>
    </div>
    </a>

    <a href="/cars" className="advertisement-link">
    <div class="car-advertisement">
   <div class="image-container">
        <img src="axio141.jpg" alt="Image 1"/>
    </div>
    <div class="description">
    <h2><b> Toyota Axio</b></h2>
        <h4>Rs. 5000000</h4>
        <h4>From : Gampaha</h4>
        <h4>Year: 2008 </h4>
    </div>
    </div>
    </a>

    <a href="#" className="advertisement-link">
    <div class="car-advertisement">
   <div class="image-container">
        <img src="yaris.jpg" alt="Image 1"/>
    </div>
    <div class="description">
    <h2><b> Toyota Yaris</b></h2>
        <h4>Rs. 4500000</h4>
        <h4>From : Piliyandala</h4>
        <h4>Year: 2006 </h4>
    </div>
    </div>
    </a>
   </div>

             
);

   
}


export default Cars