import {FaComments,FaAngleDoubleUp,FaEye} from 'react-icons/fa';
import './ForumDiscussion.css'

const ForumDiscussion = () => {
    return ( 
        <div className="forum-discussion">
            <h1>
                Discussions
            </h1>
            <div className="discussion-topic">
                <h2>Some Topic for Discussion #1</h2>
                <div className="views" style={{maxWidth:'40px'}}>
                    <FaEye style={{     
                        paddingTop:'2px',
                        float:'left',
                        fontSize:"16px",
                        }}/> 
                    <p style={{float: 'right',
                    fontSize:'16px'}}>
                        99
                    </p>
                </div>     
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam iusto, tenetur unde magni ipsa animi, reiciendis est repellat harum officia blanditiis quia maxime voluptatum consequatur voluptas beatae modi temporibus.</p>
                <button className='fd-button' style={{marginRight:'5px',
                            marginTop:'10px'}}>
                        <FaAngleDoubleUp style={{
                            fontSize:"20px",
                        }}/> 
                        <p>99</p>
                    </button>
                    <button className='fd-button'>
                        <FaComments style={{
                            fontSize:"20px",
                        }}/> 
                        <p>99</p>
                    </button>
            </div>
            <div className="fd-answer">
                <textarea className="fd-textarea" placeholder ="Type your Response here!"/>
                <br />
                <button className="fd-submit">
                    Submit
                </button>
            </div>
            <div className='fd-comments'>
                <h2>5 Answers</h2>
                <div>
                    <hr />
                    <p className='fd-comments-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex non alias perspiciatis quisquam atque fugiat voluptate dignissimos, necessitatibus molestias unde qui maxime nulla! Repellendus quo maxime minima dolorum dolores.
                    </p>
                    <button className='fd-button' style={{marginRight:'5px',
                            marginTop:'10px'}}>
                        <FaAngleDoubleUp style={{
                            fontSize:"20px",
                        }}/> 
                        <p>99</p>
                    </button>
                    <button className='fd-button'>
                        <FaComments style={{
                            fontSize:"20px",
                        }}/> 
                        <p>99</p>
                    </button>
                    <div className="fd-answer">
                    <textarea className='fd-tacomments' placeholder ="Type your Comment here!"/>
                    <br />
                    <button className="fd-submit">
                        Submit
                    </button>
                    </div>    
                </div>
            </div>
        </div>
     );
}
 
export default ForumDiscussion;