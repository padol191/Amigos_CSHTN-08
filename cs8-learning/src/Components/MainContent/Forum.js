import './Forum.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {FaAngleDoubleUp, FaComments} from 'react-icons/fa';


const Forum = () => {

    
    const[info,setData] = useState(null);
    const[loading,setLoading] = useState(true);
    

    const get_post_url='http://localhost:5000/api/post/';

    const token= localStorage.getItem("token")
    
    useEffect(()=>{
    
        axios.get(get_post_url,
    {
        headers: 
        {
            'x-auth-token': token
        }
    })

    .then((res)=>{
        setTimeout(() => {
            setData(res.data);
            console.log(info);
            let demo= res.data;
            console.log(demo);
            setLoading(false)   
        }, 1000);
        // console.log(res.data);
        
        
        }
    )
    .catch(err=>console.log(err))

},[get_post_url]);





const  ForumBlocks= (props) => {
            
    return (     
        <div className="forum">
           <div className="forum-list">
                <div className="content">   
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43675/white-circle-emoji-clipart-xl.png" width = '80px' style={{display:'inline', float:'left'}} alt="" />
                    <span> 
                    <h3>{props.title1}</h3>
                    </span>
                    <p className="author">By {props.desc}</p>
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

    // if(info){
        
    //     return (
    //         content =
    //     <div className="forum">
            
    //         <div className="heading">
    //             <h1>Forums</h1>
    //             <Link to='/create'>   
    //             <button >Create Discussion</button>
    //             </Link>
    //         </div>
    //         <div>
    //        { info.forEach((data,i) =>{ (<ForumBlocks title= {data[i].title} desc={data[i].name} />  )  })}
    //        </div>
    //     </div>

    //     )
    // }

    
    let iconStyles = { color: "black" };
    return ( 
        <div>
            <div className="forum">
            
            <div className="heading">
                <h1>Forums</h1>
                <Link to='/create'>   
                <button >Create Discussion</button>
                </Link>
            </div>
            <div>
           { info && info.map((data,index) =>{ (<ForumBlocks title1= {data[index]?.title} desc={data[index]?.name} />  )  })}
           </div>
        </div>
        </div>
     );
}
 
export default Forum;