import './Content.css';
const Content = () => {
    
    const handleClick = () => {
        
    }
    
    return (
        <div className="course-content">
            <div className="content">
                <h1>Overview</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis voluptatem corrupti, itaque dolorum vero temporibus reprehenderit accusamus ipsum quibusdam placeat voluptate veniam ducimus minima sit repellendus recusandae accusantium illum.</p>
                <div className="sub-topic" onClick= {handleClick} >
                    <h3>Sub Topic</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum iste, eaque illo nihil molestiae ullam explicabo rem voluptatem impedit, consequuntur obcaecati suscipit, sapiente veniam totam sed dignissimos? Officiis, facilis.</p>
                </div>
                <div className="sub-topic" onClick= {handleClick}>
                    <h3>Sub Topic</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum iste, eaque illo nihil molestiae ullam explicabo rem voluptatem impedit, consequuntur obcaecati suscipit, sapiente veniam totam sed dignissimos? Officiis, facilis.</p>
                </div>
                
            </div>
            
            
        </div> 
        
     );
}
 
export default Content;