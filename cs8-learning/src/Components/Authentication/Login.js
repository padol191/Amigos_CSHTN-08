import React from 'react';
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
      if(event.target.value.match('^.{6,}') != null)  
      {
        setPassword(event.target.value);
      }

      }
      const dataHandler=(event)=>{
        event.preventDefault();
    const data=(
    {        
        email: email,
        password : password
        
    });
  
  console.log(data);
  axios.post( LOG_URL,data)
  .then(res=>{console.log(res.data.token)
  
  axios.get(LOG_URL,{
    headers: {
      'x-auth-token': res.data.token
    }
  })
  .then(res2=>{
    const demo=res2.data;
    console.log(demo);
     
     
    })}
  )
  .catch(errors=>console.log("errors"))

 
  setEmail('');
  setPassword('');
  
    }

    return (
    <React.Fragment>  
    <form onSubmit={dataHandler}> 
    <div className="login-form">
        <div className="login-container">
            <h2>
                Login
            </h2>
            <input type="email" required  placeholder="Email" value={email} onChange={EmailChangeHandler}/>
            
            <input type="password" pattern= "^.{6,}" value={password} onChange={PasswordChangeHandler} required  placeholder="Password (at least 6 characters)" />
            <button type='submit'>Login</button>
            <div className="signup-link">
              <Link to ='/signup'>
                <a>New Member ?</a>
              </Link>
            </div>
            
        </div>
        
    </div>
    </form>
    </React.Fragment>
    );
  }
  
  export default Login;