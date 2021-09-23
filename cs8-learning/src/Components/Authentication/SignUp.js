import React from 'react';
import './Signup.css';
import Navbar from '../HomeUI/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const REGISTER_URL='http://localhost:5000/api/users/';
const LOG_URL='http://localhost:5000/api/auth/';

const SignUp=()=> {

    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [cpassword, setcPassword]= useState('');
    const [keyInLocal, setKey]= useState('false');

    const LoginChangeHandler = ()=>{
      setKey('true');
      
    };

    const NameChangeHandler = (event)=>{
        setName(event.target.value);
        
      };

    const EmailChangeHandler = (event)=>{
        setEmail(event.target.value);
        
      }

    const PasswordChangeHandler = (event)=>{
        setPassword(event.target.value);
        
      }
    
    const CPasswordChangeHandler = (event)=>{
        setcPassword(event.target.value);
        
      }
    const dataHandler=(event)=>{
        event.preventDefault();
    const data=
    {
        name: name,
        email: email,
        password : password,
        cpassword: cpassword
    };
   
    console.log(data);
  axios.post( REGISTER_URL,data)
  .then(res=>{
    console.log(res.data);
    console.log(res.data.token);
    

    const body = {
      email: email,
      password : password
    };

    axios.get(LOG_URL,{
      headers: {
        'x-auth-token': res.data.token
      }
    })
    .then(res2=>{
      const demo=res2.data;
      console.log(demo);
       const id =demo[Object.keys(demo)[0]];
       window.localStorage.setItem('id', id);
      })
    
  
  })
  .catch(err=>console.log(err.data))
  
 
  setName('');
  setEmail('');
  setPassword('');
  setcPassword('');
    }
      

      
    return (
    <div>
        <Navbar/>
        <form onSubmit={dataHandler}>
        <div className="signup-form">
            <div className="container">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Name" value ={name} onChange={NameChangeHandler}/>
                <input type="email" placeholder="Email" value ={email}onChange={EmailChangeHandler}/>
                <input type="password" placeholder="Password (at least 6 characters)" value={password} onChange={PasswordChangeHandler}/>
                <input type="password" placeholder="Confirm Password" value={cpassword} onChange={CPasswordChangeHandler} />
                <button type='submit'>Sign Up</button>
                <Link to ='/login'>
                <a><h3>Already a member?</h3></a>
                </Link>
            </div>
            
        </div>
        </form>
    </div>
    );
  }
  
  export default SignUp;