import {FaComments,FaAngleDoubleUp,FaEye} from 'react-icons/fa';
import './ForumDiscussion.css';
import Navbar from '../HomeUI/Navbar';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';


const CommentDiscussions = () => {

    const [info, setData] = useState(null);
    const [text, setText] = useState(null);
    const get_post_url = "http://localhost:5000/api/post/";
    

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(get_post_url, {
        headers: {
          "x-auth-token": token,
        },
      })

      .then((res) => {
        setTimeout(() => {
          let demo = res.data;
          console.log(demo);
          setData(demo);
          
          console.log("ggnt", demo[0].title);
          
        }, 1000);
        
      })
      .catch((err) => console.log(err));
  }, [get_post_url]);

  const CommentDescHandler = (event) => {
    setText(event.target.value);
  };
//////////////////////////////
  const datahandler = (event) => {
    event.preventDefault();

    const data = {
      comments: text
      
    };

    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .post(get_post_url, data, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setText("");
    
  };

/////////////////////////
  const CommentBlocks=(props)=>{
    return(
        <React.Fragment>
        <div className="forum-discussion">
            
            <div className='fd-comments'>
                <h2>5 Answers</h2>
                <div>
                    <hr />
                    <p className='fd-comments-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex non alias perspiciatis quisquam atque fugiat voluptate dignissimos, necessitatibus molestias unde qui maxime nulla! Repellendus quo maxime minima dolorum dolores.
                    </p>
                    <button className='fd-button' style={{marginRight:'5px',
                            marginTop:'10px'}}>
                        <FaAngleDoubleUp style={{
                            fontSize:"16px",
                        }}/> 
                        <p>99</p>
                    </button>
                     
                </div>
            </div>
        </div>
        </React.Fragment>
    );

  }


    return (
        <React.Fragment>
            <div className="forum-discussion">
                <h1>
                Discussions
                </h1>
                <div className="discussion-topic">
                <h2>Title</h2>
                </div>

                <div className="description">
                    <p>Desc</p>
                    <button className='fd-button' style={{marginRight:'5px',
                            marginTop:'10px'}}>
                        <FaAngleDoubleUp style={{
                            fontSize:"16px",
                        }}/> 
                        <p>99</p>
                    </button>
                    
                </div>

                <form onSubmit={datahandler}>
                    <div className="fd-answer">
                    <textarea className="fd-textarea" value= {text} placeholder ="Type your Response here!" onChange={CommentDescHandler} />
                     <br />
                    <button type='submit' className="fd-submit">
                    Submit
                    </button>
                    </div>
                </form>
            <div>
          {/* {info &&
            info.map((data) => {
              return (
                <CommentBlocks
                  title1={data.title}
                  desc={data.description}
                />
              );
            })} */}
        </div>
            </div>
            <CommentBlocks/>
            </React.Fragment>
       
        );
}
 
export default CommentDiscussions;