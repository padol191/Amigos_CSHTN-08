import './ForumSubmit.css'

const ForumSubmit = () =>{
    return(
        <div>
            
            <div className="submit-form">
                
                <div className="topic">
                <h1>Forum Submit</h1>
                    <textarea className="topic-ta" placeholder="Enter Title of Discussion"/>
                   
                </div>
                <div className="description">
                    <textarea className="description-ta" placeholder="Description goes here"/>
                    <br/>
                    <button className="topic-submit">
                    Submit
                    </button>
                    <button className="cancel-btn">Cancel</button>
                </div>
                
            </div>
        </div>
    );
}
export default ForumSubmit
