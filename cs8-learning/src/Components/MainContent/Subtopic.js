import './Subtopic.css';

const Subtopic = () => {
    const handleClick = () => {
        
    }
    return ( 
        <div className='subtopic-main'>
            <h1>Sub Topic</h1>
            <div className="subtopic-list">
                <button className = 'subtopic-links'>Subtopic #1</button>
                <button className = 'subtopic-links'>Subtopic #2</button>
                <button className = 'subtopic-links'>Subtopic #3</button>
                <button className = 'subtopic-links'>Subtopic #4</button>
                <button className = 'subtopic-links'>Subtopic #5</button>
            </div>
        </div>
     );
}
 
export default Subtopic;