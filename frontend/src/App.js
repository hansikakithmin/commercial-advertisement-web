import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';
import Cars from './Components/Cars/Cars';

import { Routes , Route } from 'react-router-dom';
import Results from './Components/Results/Results';
const App = () =>{
  return(
    
    
      <>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/form" element={<Form />} />
      < Route exact path="/results" element={<Results />} />
      <Route exact path="/cars" element={<Cars />} />

      </Routes>
      <Footer />
      
      </>


  )
           
        
    
  
};

export default App;
