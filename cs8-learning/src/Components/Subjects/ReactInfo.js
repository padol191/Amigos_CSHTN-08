import React from 'react'
import '../MainContent/Subtopic.css';

function ReactInfo() {
    return (
        <div>
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
        </div>
    )
}

export default ReactInfo
