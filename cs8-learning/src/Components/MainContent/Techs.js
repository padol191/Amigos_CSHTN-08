import axios from 'axios';
import './Techs.css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// import withAuth from '../Authentication/withAuth';


const Techs = () => {

    const[info,setData] = useState('')
    let content=null;
    
    const topic_URL='http://localhost:5000/api/topic/';
    
    useEffect(()=>{
        axios.get(topic_URL)    
        .then(res2=>{
        console.log(res2.data.topic)
        setData(res2.data.topic);
                  
        })
        .catch(err=>console.log(err))},[]);

        

        if(info){
            content =
                <div>
            <div className="tech-list">
                    <Link to='/react'>
                    <button className='tech-button'>
                    {info[0].name}
                    </button>
                    </Link>

                    <Link to='/express'>
                    <button className='tech-button'>
                    {info[1].name}
                    </button>
                    </Link>

                    <Link to='/git'>
                    <button className='tech-button'>
                    GIT
                    </button>
                    </Link>

                    <Link to='/databases'>
                    <button className='tech-button'>
                    DATABASES
                    </button>
                    </Link>

                    <Link to='/ruby'>
                    <button className='tech-button'>
                    RUBY
                    </button>
                    </Link>

                    <Link to='/nodejs'>
                    <button className='tech-button'>
                    NODEJS
                    </button>
                    </Link>    
            </div>
            <center>
                <div className="tech-list">
                    <button className='get-started'>
                        Get Started
                    </button>
                </div>
            </center>
            
        </div>
        
             }        

    return (
        <div>
            {content}

        </div>
        
        
     )
}
 
export default Techs;