import React from 'react'
import '../Footer/Footer.css';

const Footer = () => {
  return (
    
 
<footer class="flex-rw">
  
  <ul class="footer-list-top">
    <li>
      <b class="footer-list-header">Overview</b></li>
    <li class="footer-specific-list-item"><a  href='/' class="generic-anchor footer-list-anchor" itemprop="significantLink">Home</a></li>
    <li class="footer-specific-list-item"><a href='/results' class="generic-anchor footer-list-anchor" itemprop="significantLink">BrowseAds</a></li>
    <li class="footer-specific-list-item"><a href='#' class="generic-anchor footer-list-anchor" itemprop="significantLink">About Us</a></li>
    <li class="footer-specific-list-item"><a href='#' class="generic-anchor footer-list-anchor" itemprop="significantLink">Contact</a></li>
  </ul>
  
    

    <ul class="footer-list-top">
  <li>
    <b class="footer-list-header">Categories</b>
  </li>
  <li class="footer-specific-list-item"><a href='/cars' class="generic-anchor footer-list-anchor" itemprop="significantLink">Vehicles</a></li>
  <li class="footer-specific-list-item"><a href='/results' class="generic-anchor footer-list-anchor" itemprop="significantLink">Property</a></li>
  <li class="footer-specific-list-item"><a href='/results' class="generic-anchor footer-list-anchor" itemprop="significantLink">Electronics</a></li>
  <li class="footer-specific-list-item"><a href='/results' class="generic-anchor footer-list-anchor" itemprop="significantLink">Pets</a></li>
  <li class="footer-specific-list-item"><a href='/results' class="generic-anchor footer-list-anchor" itemprop="significantLink">Services</a></li>
  <li class="footer-specific-list-item"><a href='/results' class="generic-anchor footer-list-anchor" itemprop="significantLink">Books</a></li>
  <li class="footer-specific-list-item"><a href='/results' class="generic-anchor footer-list-anchor" itemprop="significantLink">Others</a></li>
</ul>

<ul class="footer-list-top">
    <li>
      <b class="footer-list-header">Follow Us On</b></li>
      <div class="footer-social-icons">
      <a href="facebook.com" class="social-icon"><img src="img17.png" alt="Facebook"></img></a>
      <a href="instagram.com" class="social-icon"><img src="img16.png" alt="Instagram"></img></a>
      <a href="youtube.com" class="social-icon"><img src="img18.png" alt="Youtube"></img></a>
   </div>
  </ul>
  



  <section class="footer-social-section flex-rw">
      
    
  </section>
  
    

</footer>


  )
}

export default Footer
