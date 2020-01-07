import React from 'react'
import { Button } from 'react-bootstrap'

function Recommendations(props){

    let image = props.img
    let title = props.title
    let movie = props.movie
    let onAdd = props.onAdd
    let mouseStatus = props.mouseStatus
    let mouseInside = props.mouseInside

    return(
        <div>
            <h5>
                {title}
             </h5>
            <img   
            onMouseOver={()=>mouseInside(true)}
            src={image} 
            alt={image}
            />
            {mouseStatus ? 
            <Button 
            variant="info"  active
            onClick={() => { onAdd(movie); mouseInside(false)}}>
                Add to list
            </Button> : null}
        </div>
    )
}

export default Recommendations