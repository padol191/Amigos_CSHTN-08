import React from 'react';
import Navbar from '../HomeUI/Navbar';
import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';

const LOG_URL='http://localhost:5000/api/auth/';

const Login=()=> {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const EmailChangeHandler = (event)=>{
        setEmail(event.target.value);
        
      }

    const PasswordChangeHandler = (event)=>{
        setPassword(event.target.value);
        
      }
      const dataHandler=(event)=>{
        event.preventDefault();
    const data=
    {        
        email: email,
        password : password
        
    };
  
  console.log(data);
  axios.post( LOG_URL,data)
  .then(res=>console.log(res.data.token))
  .catch(err=>console.log(err))

 
  setEmail('');
  setPassword('');
  
    }

    return (
    <React.Fragment> 
    <div><Navbar/></div>  
    <form onSubmit={dataHandler}> 
    <div className="login-form">
        <div className="container">
            <h2>
                Login
            </h2>
            <input type="email" placeholder="Email" value={email} onChange={EmailChangeHandler}/>
            
            <input type="password" value={password} onChange={PasswordChangeHandler} placeholder="Password (at least 6 characters)" />
            <button type='submit'>Login</button>
            <Link to ='/signup'>
            <a><h3>New member?</h3></a>
            </Link>
        </div>
        
    </div>
    </form>
    </React.Fragment>
    );
  }
  
  export default Login;