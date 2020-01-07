import React from 'react'
import { Button } from 'react-bootstrap'

function MyList(props){
    let image = props.img
    let title = props.title
    let movie = props.movie
    let onRemove = props.onRemove
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
            alt={image}/>
            {mouseStatus ? 
                <Button 
                    variant="danger"  active
                    onClick={() => { onRemove(movie); mouseInside(false)}}>
                Remove from list
            </Button> : null}
        </div>
            
    )
}

export default MyList