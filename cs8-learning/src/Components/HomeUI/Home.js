import React from 'react';
import NavBar from './Navbar';
import { Link } from 'react-router-dom';

const Home=()=> {
    return (
      <div>
        <NavBar/>
        <h1>This is Home page</h1>
        <Link to="/login">
        <button className="login">Login</button>
        </Link>
        <Link to="/signup">
        <button className="sign-up">Sign Up</button>
        </Link>
      
      </div>
    );
  }
  
  export default Home;