import './ForumSubmit.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForumSubmit = () =>{

    const comments_URL='http://localhost:5000/api/post/';
    const [comment, setComment]= useState('');
    const [title, setTitle]= useState('');


    const CommentChangeHandler = (event)=>{
        setComment(event.target.value);
             };

    const TitleChangeHandler = (event)=>{
         setTitle(event.target.value);
             };

  

    const commentsHandler=(event)=>{
        event.preventDefault();
              
            const data=
            {
                title: title,
                description: comment,
                
            };
           
        const token=localStorage.getItem("token");
        console.log(token)
        axios.post( comments_URL,data,{
            headers: {
              'x-auth-token': token
            }
          })
        .then(res=>{
            console.log(res.data);
            })
        .catch(err=>console.log(err))

          setComment('');
          setTitle('');
          
            }

    return(
        <div>
            <form onSubmit={commentsHandler}>
            <div className="submit-form">
                
                <div className="topic">
                <h1>Forum Submit</h1>
                    <textarea className="topic-ta" value={title} placeholder="Enter Title of Discussion" onChange={TitleChangeHandler}/>
                   
                </div>
                <div className="description">
                    <textarea className="description-ta" value={comment} placeholder="Description goes here " onChange={CommentChangeHandler}/>
                    <br/>
                    
                    <button type='submit' className="topic-submit">
                    Submit
                    </button>
                    
                    <button className="cancel-btn">Cancel</button>
                </div>
                
            </div>
            </form>
        </div>
    );
}
export default ForumSubmit
