import './Forum.css';
import {FaAngleDoubleUp, FaComments} from 'react-icons/fa';
const Forum = () => {
    
    let iconStyles = { color: "black" };
    return ( 
        <div className="forum">
            
            <div className="heading">
                <h1>Forums</h1>   
                <button >Create Discussion</button>
            </div>
            

            <div className="forum-list">
                <div className="content">   
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43675/white-circle-emoji-clipart-xl.png" width = '80px' style={{display:'inline', float:'left'}} alt="" />
                    <span> 
                    <h3>Some Random Topic For Discussion #1</h3>
                    </span>
                    <p className="author">By John Doe</p>
                    <p style={{float:'left'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel sunt officiis praesentium quasi sapiente quo dignissimos. Illo commodi consequatur error repellat deleniti saepe vero quaerat modi doloribus, asperiores beatae.</p>
                    <button className='forum-button' style={{marginRight:'5px',
                            marginTop:'10px'}}>
                        <FaAngleDoubleUp style={{
                            fontSize:"20px",
                        }}/> 
                        <p>99</p>
                    </button>
                    <button className='forum-button'>
                        <FaComments style={{
                            fontSize:"20px",
                        }}/> 
                        <p>99</p>
                    </button>
                </div>
                <div className="content">   
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43675/white-circle-emoji-clipart-xl.png" width = '80px' style={{display:'inline', float:'left'}} alt="" />
                    <span> 
                    <h3>Some Random Topic For Discussion #2</h3>
                    </span>
                    <p className="author">By John Doe</p>
                    <p style={{float:'left'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel sunt officiis praesentium quasi sapiente quo dignissimos. Illo commodi consequatur error repellat deleniti saepe vero quaerat modi doloribus, asperiores beatae.</p>
                    <button className='forum-button' style={{marginRight:'5px',
                            marginTop:'10px'}}>
                        <FaAngleDoubleUp style={{
                            fontSize:"20px",
                        }}/> 
                        <p>99</p>
                    </button>
                    <button className='forum-button'>
                        <FaComments style={{
                            fontSize:"20px",
                        }}/> 
                        <p>99</p>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Forum;