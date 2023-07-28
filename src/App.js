import React from 'react';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import GlobalStyle from './Globalstyle';
import Home from './Home';
import Pricing from './Pricingpage';
import Signup from './Signup';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
            <GlobalStyle/>
            <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>

    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
