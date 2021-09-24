import React from 'react';
import NavBar from './Navbar';
import Info from './Info';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home=()=> {
    return (
      <div style={{height:'100%'}}>
        <NavBar/>
        <Info />
        <Footer/>
      </div>
    );
  }
  
  export default Home;