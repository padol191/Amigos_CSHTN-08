import {FaComments,FaAngleDoubleUp,FaEye} from 'react-icons/fa';
import './ForumDiscussion.css';
import Navbar from '../HomeUI/Navbar';
import React from 'react';


const ForumDiscussion = () => {
    
    return (
        <React.Fragment>
        <div className="forum-discussion">
            <Navbar/>
            <h1>
                Discussions
            </h1>
            <div className="discussion-topic">
                <h2>Some Topic for Discussion #1</h2>   
            </div>
            <div className="description">
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam iusto, tenetur unde magni ipsa animi, reiciendis est repellat harum officia blanditiis quia maxime voluptatum consequatur voluptas beatae modi temporibus.
                </p>
            </div>
            <div className="fd-answer">
                <textarea className="fd-textarea" placeholder ="Type your Response here!"/>
                <button className="fd-submit">
                    Submit
                </button>
            </div>
            <div className='fd-comments'>
                <h2>Responses</h2>
                <div className="responses">
                    <p className='response-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex non alias perspiciatis quisquam atque fugiat voluptate dignissimos, necessitatibus molestias unde qui maxime nulla! Repellendus quo maxime minima dolorum dolores.
                    </p> 
                    <p className='response-author'>
                        Author: Jon Doe
                    </p>
                </div>
            </div>
        </div>
        </React.Fragment> 
     );
}
 
export default ForumDiscussion;