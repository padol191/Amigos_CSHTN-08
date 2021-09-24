import './Content.css';
import Techs from './Techs';
const Content = () => {
    
    return (
        <div className="course-content">
            <div className="subjects">
                <h1>Subjects</h1>
                <p>A brief descritption about why we chose the subjects we chose.
                A brief descritption about why we chose the subjects we chose.
                A brief descritption about why we chose the subjects we chose.
                </p>  
                <Techs />         
            </div> 
        </div> 
        
     );
}
 
export default Content;