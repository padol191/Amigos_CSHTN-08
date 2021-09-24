import Quiz from './Quiz';
import './SubtopicDetails.css';

const SubtopicDetails = () => {
    return ( 
        <div>
            <div className='subtopic-details'>
                <h1>Subtopic Title</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde obcaecati aliquam, vero itaque maxime qui reiciendis id porro ipsum tempore quae consequatur veritatis nostrum facere, ut commodi corporis nisi.
                </p>
                <img src="https://blog.jetbrains.com/wp-content/uploads/2018/05/webstorm-jsx-tree-highlighting.png" alt="" />
                <div className='additional-resources'>
                    <h2>Addition Resources</h2>
                    <a href="">Link #1</a>
                    <a href="">Link #2</a>
                    <a href="">Link #3</a>
                    <a href="">Link #4</a>
                    <a href="">Link #5</a>
                </div>
                <h1>Test Your Knowledge</h1>
            </div>
            <Quiz />
        </div>
     );
}
 
export default SubtopicDetails;